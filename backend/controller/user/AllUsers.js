const userModel = require("../../models/userModel")

async function AllUsers(req, res) {
    try {
        console.log("userId all Users", req.userId)

        const AllUsers = await userModel.find()
        res.json({
            message: "Created is All Users",
            data: AllUsers,
            success: true,
            error: false,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        })

    }

}

module.exports = AllUsers