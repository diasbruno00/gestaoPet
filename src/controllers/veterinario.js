const Veterinario = require("../model/veterinario");
const VeterinarioDao = require("../database/veterinarioDao");

class ControllerVeterinario {
  constructor() {}

  renderizarPaginaCadastroVeterinario = (req, res) => {
    res.render("crudVeterinario");
  };

  salvarDadosVeterinario = (req, res) => {
    const { nome, idade, email, telefone, crmv, consultorio, detalhe } =
      req.body;
    const veterinario = new Veterinario(
      nome,
      idade,
      email,
      telefone,
      crmv,
      consultorio,
      detalhe
    );

    VeterinarioDao.create(veterinario);

    req.flash("sucesso", "Dados salvo com sucesso");
    res.redirect("/principal");
  };

  renderizarPaginaPesquisaVeterinario = async (req, res) => {
    const nome = req.quer.pesquisar;
    if (!nome) {
      const lista = await VeterinarioDao.find();
      res.render("pesquisarVeterinario", { lista });
    } else {
      const lista = await VeterinarioDao.find({ nome: nome });
      res.render("pesquisarVeterinario", { lista });
    }
  };

  excluirVeterinario = async (req, res) => {
    const id = req.params.id;

    const veterinario = await VeterinarioDao.findOneAndDelete({ _id: id });

    req.flash("sucesso", "Veterinario excluido com sucesso");
    res.redirect("back");
  };
}

module.exports = ControllerVeterinario;
