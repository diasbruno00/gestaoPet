const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ContatoDao = new Schema({
  nome: {
    type: String,
  },
  sobrenome: {
    type: String,
  },
  email: {
    type: String,
  },
  telefone: {
    type: String,
  },
  mensagem: {
    type: String,
  },
});

module.exports = mongoose.model("Contato", ContatoDao);
