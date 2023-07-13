const  mongoose = require ('mongoose');
const  { Schema } = require ('mongoose');

 const UsuarioDao = new Schema({
   primeiroNome: {
    type: String
   },
   sobrenome:{
    type: String
   },
   email: {
    type: String
   },
   telefone:{
    type: String
   },
   indentificador: {
    type: String
   },
   idade:{
    type: Number
   },
   bio: {
    type: String
   },
   login: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Login',
    required: true
   }
})

module.exports = mongoose.model('Usuario', UsuarioDao)