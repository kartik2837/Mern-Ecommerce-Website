const express = require('express')

const router = express.Router();
const AllUsers = require('../controller/user/AllUsers');
const getProductController = require('../controller/product/getProduct');
const updateProductController = require('../controller/product/updateProduct');
const uploadProductController = require("../controller/product/uploadProduct");
const updateUser = require('../controller/user/updateUser');
const userDetailsController = require('../controller/user/userDetails');
const userLogout = require('../controller/user/userLogout');
const userSignInController = require('../controller/user/userSignin');
const userSignUpcontroller = require("../controller/user/userSignUp");
const authToken = require('../middleware/authToken');
const getCategoryProduct = require('../controller/product/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct');
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/user/addToCartController');
const countAddToCart = require('../controller/user/countAddToCart');
const addToCartViewProduct = require('../controller/user/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');
const SearchProduct = require('../controller/product/searchProduct');
const filterProductController = require('../controller/product/filterProduct');
const paymentController = require('../controller/order/paymentController');
const webhooks = require('../controller/order/webhook');
const orderController = require('../controller/order/ordercontroller');

// api
router.post("/signup", userSignUpcontroller)
router.post('/signin', userSignInController)
router.get("/user-details", authToken, userDetailsController)
router.get("/userLogout", userLogout)

router.get("/all-user", authToken, AllUsers)
router.post("/update-user", authToken, updateUser)

// product
router.post("/upload-product", authToken, uploadProductController)

router.get("/get-product", getProductController)
router.post("/update-product", authToken, updateProductController)
router.get("/get-categoryProduct", getCategoryProduct)
router.post("/category-product", getCategoryWiseProduct)
router.post("/product-details", getProductDetails)
router.get("/search", SearchProduct)
router.post("/filter-product", filterProductController)

//add to cart
router.post("/addtocart", authToken, addToCartController)
router.get("/addToCartProduct", authToken, countAddToCart)
router.get("/view-cart-product", authToken, addToCartViewProduct)
router.post("/update-cart-product", authToken, updateAddToCartProduct)
router.post("/delete-cart-product", authToken, deleteAddToCartProduct)

//payment
router.post('/checkout', authToken, paymentController)
router.post("/webhook", webhooks)
router.get("/order-list", authToken, orderController)


module.exports = router