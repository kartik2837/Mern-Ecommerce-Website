const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs');

async function userSignUpcontroller(req, res) {
    try {
        const { email, password, name } = req.body
        const user = await userModel.findOne({ email })
        if (user) {
            throw new Error("User Already exist")
        }
        if (!email) {
            throw new Error("Please Enter email")
        }
        if (!password) {
            throw new Error("Please Enter password")
        }
        if (!name) {
            throw new Error("Please Enter name")
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Something is wrong")
        }
        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()
        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created is successfully"
        })


    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })

    }
}


module.exports = userSignUpcontroller