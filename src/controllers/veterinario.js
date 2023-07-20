const Veterinario = require("../model/veterinario")
const VeterinarioDao = require("../database/veterinarioDao")

class ControllerVeterinario {
  constructor() {}

  renderizarPaginaCadastroVeterinario = (req, res) => {
    res.render("crudVeterinario");
  };

  salvarDadosVeterinario = (req, res) => {
    const { nome, idade, email, telefone, crmv, consultorio, detalhe } = req.body;
    const veterinario = new Veterinario(nome, idade, email, telefone, crmv, consultorio, detalhe)

    VeterinarioDao.create(veterinario)

    req.flash("sucesso", "Dados salvo com sucesso")
    res.redirect("/principal");


  };
    
}

module.exports = ControllerVeterinario;
