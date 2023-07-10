const  mongoose = require ('mongoose');
const  { Schema } = require ('mongoose');

 const LoginDao = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    senha: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Login',LoginDao)