const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    nombres: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);