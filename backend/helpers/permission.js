const userModel = require("../models/userModel")

const uploadProductPermission = async (userId) => {
    const user = userModel.findById(userId)
    if (user.role !== "ADMIN") {
        return false
    }
    return false

}

module.exports = uploadProductPermission