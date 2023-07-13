const  mongoose = require ('mongoose');
const  { Schema } = require ('mongoose');

 const OrganizadorDao = new Schema({
  observacao: {
    type: String
  },
  dataConsulta :{
    type: String
  },
  dataVacina : {
    type: String
  },
  medicacao: {
    type: String
  },
  horarioAlimentacao:{
    type: String
  },
  higiene: {
    type: String
  },
  cuidadoExtras: {
    type: String
  },
  feddback: {
    type : String
  },
   usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
   }
})

module.exports = mongoose.model('Pet', PetDao)