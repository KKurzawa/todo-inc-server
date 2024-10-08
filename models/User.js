const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    user: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    matchedPwd: { type: String, required: true },
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel