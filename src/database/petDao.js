const  mongoose = require ('mongoose');
const  { Schema } = require ('mongoose');

 const PetDao = new Schema({
  
  nome: {
    type: String
  },
  idade: {
    type: Number
  },
  tipo: {
    type: String
  },
  raca : {
    type : String
  },
  remedios: {
    type: String
  },
  vacina : {
    type: String
  },
  alimentacao : {
    type: String
  },
  observacao:{
    type: String
  },
   usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
   }
})

module.exports = mongoose.model('Pet', PetDao)