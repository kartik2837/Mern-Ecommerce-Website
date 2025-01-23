const productModel = require("../../models/productModel")

const filterProductController = async (req, res) => {
    try {
        const categoryList = req?.body?.categor
        const product = productModel.find({
            category: {
                "$in": categoryList
            }
        })
        res.json({
            data: product,
            message: "categoryList",
            error: false,
            success: true
        })

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })

    }
}

module.exports = filterProductController