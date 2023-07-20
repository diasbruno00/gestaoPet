const express = require("express");
const router = express.Router();
const ControllerLogin = require("../controllers/login");
const ControllerUsuario = require("../controllers/usuario");
const ControllerPet = require("../controllers/pet");
const ControllerOrganizador = require("../controllers/organizador");
const ControllerVeterinario = require("../controllers/veterinario");
const ControllerPesquisar = require("../controllers/pesquisar")

const controllerLogin = new ControllerLogin();
const controllerUsuario = new ControllerUsuario();
const controllerPet = new ControllerPet();
const controllerOganizador = new ControllerOrganizador();
const controllerVeterinario = new ControllerVeterinario();
const controllerPesquisar = new ControllerPesquisar()

router.get("/principal/", (req, res) => {
  res.render("homeView");
});

router.get("/contatos", (req, res) => {
  res.render("contato");
});

router.get("/pesquisar", controllerPesquisar.renderizarPaginaPesquisa );

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

//router.get('/pet',controllerPet.renderizarPaginaCadastro)
router.post("/salvar/pet/:id", controllerPet.salvarDadosPet);
router.post("/atualizar/pet/:id", controllerPet.atualizarDadosPet);
router.get("/deletar/pet/:id", controllerPet.deletarPet);
router.get("/pet", controllerPet.renderizarPaginaCadastroPet);
router.get("/edicao/pet/:id",controllerPet.renderizarPaginaEditarPet)

//rotas Organizador
router.post("/salvar/organizador/pet", controllerOganizador.salvarDadosOrganizador);
router.get("/pesquisar/organizador", controllerOganizador.renderizarPaginaPesquisarOrganizador)
router.get("/excluir/organizador/:id", controllerOganizador.deletarOrganizador)
router.get("/edicao/organizador/:id", controllerOganizador.renderizarPaginaEdicaoOrganizador)
router.post("/atualizar/organizador/:id",controllerOganizador.editarOrganizador)

//rotas veterinario
router.get("/veterinario",controllerVeterinario.renderizarPaginaCadastroVeterinario);
router.post("/veterinario", controllerVeterinario.salvarDadosVeterinario);
router.get("/pesquisa/veterinario", controllerVeterinario.renderizarPaginaPesquisaVeterinario)
router.get("/excluir/veterinario/:id",controllerVeterinario.excluirVeterinario)

module.exports = router;
