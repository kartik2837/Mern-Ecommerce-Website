
const backendDomin = "http://localhost:5000"
const SummaryApi = {
    SignUp: {
        url: `${backendDomin}/api/signup`,
        method: "post"
    },
    SignIn: {
        url: `${backendDomin}/api/signin`,
        method: "post"
    },
    current_user: {
        url: `${backendDomin}/api/user-details`,
        method: "get"

    },
    logout_user: {
        url: `${backendDomin}/api/userLogout`,
        method: 'get'
    },
    AllUser: {
        url: `${backendDomin}/api/all-user`,
        method: "get"
    },
    updateUser: {
        url: `${backendDomin}/api/update-user`,
        method: "post"
    },
    uploadProduct: {
        url: `${backendDomin}/api/upload-product`,
        method: "post"

    },
    allProduct: {
        url: `${backendDomin}/api/get-product`,
        method: "get"
    },
    updateProduct: {
        url: `${backendDomin}/api/update-product`,
        method: "post"
    },
    categoryProduct: {
        url: `${backendDomin}/api/get-categoryProduct`,
        method: "get"

    },
    categoryWiseProduct: {
        url: `${backendDomin}/api/category-product`,
        method: "post"
    },
    productDetails: {
        url: `${backendDomin}/api/product-details`,
        method: "post"

    },
    addToCartProduct: {
        url: `${backendDomin}/api/addtocart`,
        method: "post"
    },
    addToCartProductcount: {
        url: `${backendDomin}/api/addToCartProduct`,
        method: "get"

    },
    addToCartViewProduct: {
        url: `${backendDomin}/api/view-cart-product`,
        method: "get"
    },
    upadteCartProduct: {
        url: `${backendDomin}/api/update-cart-product`,
        method: "post"
    },
    deleteCartProduct: {
        url: `${backendDomin}/api/delete-cart-product`,
        method: 'post'
    },
    searchProduct: {
        url: `${backendDomin}/api/search`,
        method: "get"
    },
    filterProduct: {
        url: `${backendDomin}/api/filter-product`,
        method: "post"
    },
    payment: {
        url: `${backendDomin}/api/checkout`,
        method: "post"
    },
    getOrder: {
        url: `${backendDomin}/api/order-list`,
        method: "get"
    }
}

export default SummaryApi