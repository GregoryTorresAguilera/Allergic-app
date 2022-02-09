const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { validationPassword } = require('../../utils/validators/validations')
const { setError } = require('../../utils/error/error')

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    phone: {type: Number, trim: true },
    allergen: {type: String, trim: true,}, //Schema.Types.ObjectId, ref: "allergen"
    userImage: {type: String, trim: true },
    contact: {
        sosname: { type: String, trim: true},
        sosphone: { type: Number, trim: true},
        assurance: {type: String, trim: true}
    //favoritos del scaner aplicar un array que recoja los alimentos scaneados.
    }
}, { timestamps: true })

userSchema.pre("save", function (next) {
    if (!validationPassword(this.password)) {
        return next(setError(400, 'La contraseña no tiene los minimos requeridos'))
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('users', userSchema)
module.exports = User