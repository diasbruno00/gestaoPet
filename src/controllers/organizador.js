const Organizador = require("../model/organizador");
const OrganizadorDao = require("../database/organizadorDao");
const PetDao = require("../database/petDao");
const veterinarioDao = require("../database/veterinarioDao");

class ControllerOrganizador {
  constructor() {}

  salvarDadosOrganizador = async (req, res) => {
    const {
      dataConsulta,
      dataVacina,
      medicacao,
      horarioAlimentacao,
      higiene,
      cuidadeExtresas,
      feddback,
      nomePet,
      nomeVeterinario,
    } = req.body;

    const pet = await PetDao.findOne({ nome: nomePet });
    console.log(pet);
    const veterinario = await veterinarioDao.findOne({ nome: nomeVeterinario });

    if (pet) {
      if (veterinario) {
        const organizador = new Organizador(
          dataConsulta,
          dataVacina,
          medicacao,
          horarioAlimentacao,
          higiene,
          cuidadeExtresas,
          feddback,
          nomePet,
          nomeVeterinario
        );

        console.log(organizador);
        const resposta = await OrganizadorDao.create(organizador);
        console.log(resposta);

        req.flash("sucesso", `Dados salvos com sucesso`);
        res.redirect("/principal");
      } else {
        req.flash(
          "erro",
          `${nomeVeterinario} nao consta no banco de dados de Veterinario`
        );
        res.redirect("back");
      }
    } else {
      req.flash("erro", `${nomePet} nao consta no banco de dados do Pet`);
      res.redirect("back");
    }
  };

  renderizarPaginaPesquisarOrganizador = async (req, res) => {
    const nome = req.query.pesquisar;
    console.log(nome);
    if (!nome) {
      const lista = await OrganizadorDao.find();
      console.log(lista);

      res.render("pesquisaOrganizador", { lista });
    } else {
      const lista = await OrganizadorDao.find({ nomePet: nome });
      console.log(lista);
      res.render("pesquisaOrganizador", { lista });
    }
  };

  deletarOrganizador = async (req, res) => {
    const id = req.params.id;
    console.log("meu id oia: ", id);

    try {
      const organizadorExcluido = await OrganizadorDao.findOneAndDelete({
        _id: id,
      });
      res.json(organizadorExcluido)
    } catch (error) {
      console.log(error);
      res.json({erro: error})

    }
  };

  renderizarPaginaCadastroPet = (req, res) => {
    res.render("cadastroPet");
  };

  renderizarPaginaEdicaoOrganizador = async (req, res) => {
    const id = req.params.id;

    try {
      const organizador = await OrganizadorDao.findById({ _id: id });
      console.log(organizador);

      res.render("crudOrganizador", { organizador });
    } catch (error) {
      res.json({ error });
    }
  };

  editarOrganizador = async (req, res) => {
    const id = req.params.id;

    const {
      dataConsulta,
      dataVacina,
      medicacao,
      horarioAlimentacao,
      higiene,
      cuidadeExtresas,
      feddback,
      nomePet,
      nomeVeterinario,
    } = req.body;

    const pet = await PetDao.findOne({ nome: nomePet });
    console.log(pet);
    const veterinario = await veterinarioDao.findOne({ nome: nomeVeterinario });

    if (pet) {
      if (veterinario) {
        const organizador = new Organizador(
          dataConsulta,
          dataVacina,
          medicacao,
          horarioAlimentacao,
          higiene,
          cuidadeExtresas,
          feddback,
          nomePet,
          nomeVeterinario
        );

        const novoOrganizador = await OrganizadorDao.findByIdAndUpdate(id, organizador, {
          new: true,
        });

        req.flash("sucesso", `Dados salvos com sucesso`);
        res.redirect("/pesquisar/organizador");
      } else {
        req.flash(
          "erro",
          `${nomeVeterinario} nao consta no banco de dados de Veterinario`
        );
        res.redirect("back");
      }
    } else {
      req.flash("erro", `${nomePet} nao consta no banco de dados do Pet`);
      res.redirect("back");
    }

  };
}

module.exports = ControllerOrganizador;
