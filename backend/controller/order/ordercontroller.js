const orderModel = require("../../models/orderModel")

const orderController = async (request, response) => {
    try {
        const currentUserId = request.userId
        const orderList = await orderModel.find({ userId: currentUserId })
        response.json({
            data: orderList,
            message: "order-List",
            success: true,
            error: false
        })

    } catch (error) {
        response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })

    }
}
module.exports = orderController