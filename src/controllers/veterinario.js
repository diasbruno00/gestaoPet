const Veterinario = require("../model/veterinario");
const VeterinarioDao = require("../database/veterinarioDao");

class ControllerVeterinario {
  constructor() {}

  renderizarPaginaCadastroVeterinario = (req, res) => {
    res.render("crudVeterinario");
  };

  salvarDadosVeterinario = (req, res) => {
    const { nome, idade, email, telefone, crmv, consultorio, detalhes } =
      req.body;
    const veterinario = new Veterinario(
      nome,
      idade,
      email,
      telefone,
      crmv,
      consultorio,
      detalhes
    );

    VeterinarioDao.create(veterinario);

    req.flash("sucesso", "Dados salvo com sucesso");
    res.redirect("/principal");
  };

  renderizarPaginaPesquisaVeterinario = async (req, res) => {
    const nome = req.query.pesquisar;
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

  renderizarPaginaEditarVet = async (req, res) => {
    const id = req.params.id;
    const vet = await VeterinarioDao.findById({ _id: id });
    res.render("editarVeterinario", { vet });
  };

  atualizarVeterinario = async (req, res) => {
    const id = req.params.id;

    const { nome, idade, email, telefone, crmv, consultorio, detalhes } =
      req.body;
    const veterinario = new Veterinario(
      nome,
      idade,
      email,
      telefone,
      crmv,
      consultorio,
      detalhes
    );
    const veterinarioAtualizado = await VeterinarioDao.findByIdAndUpdate(
      id,
      veterinario,
      {
        new: true,
      }
    );

    req.flash("sucesso", "Dados atualizados com sucesso")
    res.redirect("/pesquisa/veterinario")
  };
}

module.exports = ControllerVeterinario;
