const Contato = require("../model/contato");
const ContatoDao = require("../database/contatoDao");
class ControllerContato {
  constructor() {}

  renderizarPaginaContato = (req, res) => {
    res.render("contato");
  };

  salvarDadosContatos = (req, res) => {
    
    const { nome, sobrenome, email, telefone, mensagem } = req.body;

    const contato = new Contato(nome, sobrenome, email, telefone, mensagem);

    ContatoDao.create(contato);

    req.flash(
      "sucesso",
      `Ola ${nome} recebemos a sua mensagem, logo daremos o retorno, obrigado !`
    );
    res.redirect("back");
  };
}

module.exports = ControllerContato;
