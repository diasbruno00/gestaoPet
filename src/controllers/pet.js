const Pet = require("../model/pet");
const PetDao = require("../database/petDao");
const UsuarioDao = require("../database/usuarioDao");

class ControllerPet {
  constructor() {}

  renderizarPaginaCadastro = (req, res) => {
    res.render("crudPet");
  };

  salvarDadosPet = async (req, res) => {
    const id = req.params.id;

    const {
      nome,
      idade,
      tipo,
      raca,
      remedios,
      vacina,
      alimentacao,
      observacao,
    } = req.body;

    const pet = new Pet(
      nome,
      idade,
      tipo,
      raca,
      remedios,
      vacina,
      alimentacao,
      observacao,
      id
    );

    const resposta = await PetDao.create(pet);

    req.session.pet = resposta;

    req.flash("sucesso", `Os dados do pet ${nome} foram salvo com sucesso`);
    res.redirect(`/principal/`);
  };

  atualizarDadosPet = async (req, res) => {
    const id = req.params.id;

    const {
      nome,
      idade,
      tipo,
      raca,
      remedios,
      vacina,
      alimentacao,
      observacao,
    } = req.body;

    const pet = new Pet(
      nome,
      idade,
      tipo,
      raca,
      remedios,
      vacina,
      alimentacao,
      observacao,
      req.session.usuario.id
    );

    const novoPet = await PetDao.findByIdAndUpdate(id, pet, {
      new: true,
    });

    req.session.pet = novoPet;

    req.flash("sucesso", `Os dados do pet ${nome} foram salvo com sucesso`);
    res.redirect("/pesquisar");
  };

  deletarPet = async (req, res) => {
    try {
      const id = req.params.id;
      console.log("meu id beck", id);
      const petExcluido = await PetDao.findOneAndDelete({ _id: id });
      req.session.pet = "";
      // req.flash("sucesso", "Pet excluido com sucesso");
      // res.redirect("back");
      res.json(petExcluido);
    } catch (error) {
      res.json({ erro: error });
    }
  };

  renderizarPaginaCadastroPet = (req, res) => {
    res.render("cadastroPet");
  };

  renderizarPaginaEditarPet = async (req, res) => {
    const id = req.params.id;

    try {
      const pet = await PetDao.findById({ _id: id }).populate("usuario");

      res.render("crudPet", { pet });
    } catch (e) {
      console.log(e);
    }
  };

  renderizarPaginaPesquisa = async (req, res) => {
    const nomePet = req.query.pesquisar;

    if (!nomePet) {
      let lista;

      try {
        lista = await PetDao.find().populate("usuario");
      } catch (error) {
        console.log(error);
      }
      res.render("pesquisa", { lista });
    } else {
      let lista;

      try {
        lista = await PetDao.find({ nome: nomePet }).populate("usuario");
        console.log(lista);
      } catch (error) {
        console.log(error);
      }
      res.render("pesquisa", { lista });
    }
  };
}

module.exports = ControllerPet;
