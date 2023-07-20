const express = require("express");
const router = express.Router();
const ControllerLogin = require("../controllers/login");
const ControllerUsuario = require("../controllers/usuario");
const ControllerPet = require("../controllers/pet");
const ControllerOrganizador = require("../controllers/organizador");
const ControllerVeterinario = require("../controllers/veterinario");
const PetDao = require("../database/petDao");

const controllerLogin = new ControllerLogin();
const controllerUsuario = new ControllerUsuario();
const controllerPet = new ControllerPet();
const controllerOganizador = new ControllerOrganizador();
const controllerVeterinario = new ControllerVeterinario();

router.get("/principal/", (req, res) => {
  res.render("homeView");
});

router.get("/contatos", (req, res) => {
  res.render("contato");
});

router.get("/pesquisar", async (req, res) => {
  const nomePet = req.query.pesquisar;

  if (!nomePet) {
    let lista;

    try {
      lista = await PetDao.find();
      console.log(lista);
    } catch (error) {
      console.log(error);
    }
    res.render("pesquisa", { lista });
  } else {
    let lista;

    try {
      lista = await PetDao.findOne({ nome: nomePet });
      console.log(lista)
    } catch (error) {
      console.log(error);
    }
    res.render("pesquisa", { lista });
  }
});

router.get("/criar", controllerLogin.renderizarPaginaCriarLogin);
router.post("/criar", controllerLogin.salvarDadosLogin);

router.get("/login", controllerLogin.renderizarPaginaRealizarLogin);
router.post("/login", controllerLogin.recuperarDadosLogin);

// rotas usuarios

router.get("/cadastro/:id", controllerUsuario.renderizarPaginaCadastro);
router.get("/lista/usuario/", controllerUsuario.listarUsuarioCadastrado);
router.post("/cadastro/:id", controllerUsuario.salvarDadosUsuario);
router.post("/atualizar/usuario/:id", controllerUsuario.atualizarUsuario);
router.get("/excluir/usuario/:id", controllerUsuario.deletarUsuario);

// rotas Pet
//router.get('/pet',controllerPet.renderizarPaginaCadastro)
router.post("/salvar/pet/:id", controllerPet.salvarDadosPet);
router.post("/atualizar/pet/:id", controllerPet.atualizarDadosPet);
router.get("/deletar/pet/:id", controllerPet.deletarPet);
router.get("/pet", controllerPet.renderizarPaginaCadastroPet);

//rotas Organizador
router.post("/salvar/organizador/pet", controllerOganizador.salvarDadosOrganizador);

//rotas veterinario
router.get("/veterinario",controllerVeterinario.renderizarPaginaCadastroVeterinario);
router.post("/veterinario", controllerVeterinario.salvarDadosVeterinario);

module.exports = router;
