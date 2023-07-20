const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const VeterinarioDao = new Schema({
  nome: {
    type: String,
  },
  idade: {
    type: Number,
  },
  email: {
    type: String,
  },
  telefone: {
    type: String,
  },
  crmv: {
    type: String,
  },
  consultorio: {
    type: String,
  },
  detalhes: {
    type: String,
  },
});

module.exports = mongoose.model("Veterinario", VeterinarioDao);
