const  mongoose = require ('mongoose');
const  { Schema } = require ('mongoose');

 const OrganizadorDao = new Schema({
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
  nomePet: {
    type : String,
    require: true
  },
  nomeVeterinario: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Organizador', OrganizadorDao)