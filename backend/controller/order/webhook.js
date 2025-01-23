const stripe = require('../../config/stripe');
const orderModel = require('../../models/orderModel');

const endpointSecret = 'whsec_eb4a5f8d2421cf7cafafc42199c2f362e38a3d3865f35a5c6066cb25c31c439';  // Replace with your actual endpoint secret

async function getLineItems(lineitems) {
    const productItems = [];
    if (lineitems?.data?.length) {
        for (const item of lineitems.data) {
            try {
                const product = await stripe.products.retrieve(item.price.product);
                const productId = product.metadata.productId;
                const productData = {
                    productId: productId,
                    name: product.name,
                    price: item.price.unit_amount / 100, // Convert from cents to dollars
                    quantity: item.quantity,
                    image: product.images  // Handle case if there are no images
                };
                productItems.push(productData);
            } catch (err) {
                console.error('Error retrieving product:', err);
                // You can either break or continue based on your needs
                continue;
            }
        }
    }
    return productItems;
}

const webhooks = async (request, response) => {
    const sig = request.headers['stripe-signature'];
    const payloadString = JSON.stringify(request.body);

    let event;

    try {
        event = stripe.webhooks.constructEvent(payloadString, sig, endpointSecret);
    } catch (err) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout session completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        try {
            // Fetch line items associated with the session
            const lineitems = await stripe.checkout.sessions.listLineItems(session.id);
            const productDetails = await getLineItems(lineitems);

            const orderDetails = {
                productDetails: productDetails,
                email: session.customer_email,
                userId: session.metadata.userId,
                paymentDetails: {
                    paymentId: session.payment_intent,
                    payment_method_type: session.payment_method_types,
                    payment_status: session.payment_status,
                },
                shipping_options: session.shipping_options.map(s => ({
                    ...s,
                    shipping_amount: s.shipping_amount / 100 // Convert from cents to dollars
                })),
                totalAmount: session.amount_total / 100 // Convert from cents to dollars
            };

            // Save the order in your database
            const order = new orderModel(orderDetails);
            await order.save();

            console.log('Order saved successfully');

        } catch (err) {
            console.error('Error processing the checkout session:', err);
            return response.status(500).send('Internal Server Error');
        }
    } else {
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Acknowledge receipt of the event
    response.status(200).send('Event received');
};

module.exports = webhooks;
