const express = require("express");
const router = express.Router();
const ControllerLogin = require("../controllers/login");
const ControllerUsuario = require("../controllers/usuario");
const ControllerPet = require("../controllers/pet");
const ControllerOrganizador = require("../controllers/organizador");
const ControllerVeterinario = require("../controllers/veterinario");
const ControllerContato = require("../controllers/contato");
const Middlewares = require("../Midllewares/middlewares");

const controllerLogin = new ControllerLogin();
const controllerUsuario = new ControllerUsuario();
const controllerPet = new ControllerPet();
const controllerOganizador = new ControllerOrganizador();
const controllerVeterinario = new ControllerVeterinario();
const controllerContato = new ControllerContato();
const middlewares = new Middlewares();

// rota home
router.get("/principal/", middlewares.verficandoLoginAdmin, (req, res) => {
  res.render("homeView");
});

// rota contatos
router.get(
  "/contatos",
  middlewares.verficandoLoginAdmin,
  controllerContato.renderizarPaginaContato
);

router.post(
  "/contatos",
  middlewares.verficandoLoginAdmin,
  controllerContato.salvarDadosContatos
);

// rota login
router.get("/criar", controllerLogin.renderizarPaginaCriarLogin);
router.post("/criar", controllerLogin.salvarDadosLogin);

router.get("/login", controllerLogin.renderizarPaginaRealizarLogin);
router.post("/login", controllerLogin.recuperarDadosLogin);
router.get('/deslogar',controllerLogin.deslogar)

// rotas usuarios
router.get(
  "/cadastro/:id",
  middlewares.verficandoLoginAdmin,
  controllerUsuario.renderizarPaginaCadastro
);
router.get(
  "/lista/usuario/",
  middlewares.verficandoLoginAdmin,
  controllerUsuario.listarUsuarioCadastrado
);
router.get(
  "/recuperar/usuario/:id",
  middlewares.verficandoLoginAdmin,
  controllerUsuario.recuperarUsuarioLogado
);
router.post(
  "/cadastro/:id",
  middlewares.verficandoLoginAdmin,
  controllerUsuario.salvarDadosUsuario
);
router.post(
  "/atualizar/usuario/:id",
  middlewares.verficandoLoginAdmin,
  controllerUsuario.atualizarUsuario
);
router.get(
  "/excluir/usuario/:id",
  middlewares.verficandoLoginAdmin,
  controllerUsuario.deletarUsuario
);

// Rotas PET
//router.get('/pet',controllerPet.renderizarPaginaCadastro)
router.post(
  "/salvar/pet/:id",
  middlewares.verficandoLoginAdmin,
  controllerPet.salvarDadosPet
);
router.post(
  "/atualizar/pet/:id",
  middlewares.verficandoLoginAdmin,
  controllerPet.atualizarDadosPet
);
router.delete(
  "/deletar/pet/:id",
  middlewares.verficandoLoginAdmin,
  controllerPet.deletarPet
);
router.get(
  "/pet",
  middlewares.verficandoLoginAdmin,
  controllerPet.renderizarPaginaCadastroPet
);
router.get(
  "/edicao/pet/:id",
  middlewares.verficandoLoginAdmin,
  controllerPet.renderizarPaginaEditarPet
);
router.get(
  "/pesquisar",
  middlewares.verficandoLoginAdmin,
  controllerPet.renderizarPaginaPesquisa
);

//rotas Organizador
router.post(
  "/salvar/organizador/pet",
  middlewares.verficandoLoginAdmin,
  controllerOganizador.salvarDadosOrganizador
);
router.get(
  "/pesquisar/organizador",
  middlewares.verficandoLoginAdmin,
  controllerOganizador.renderizarPaginaPesquisarOrganizador
);
router.delete(
  "/excluir/organizador/:id",
  middlewares.verficandoLoginAdmin,
  controllerOganizador.deletarOrganizador
);
router.get(
  "/edicao/organizador/:id",
  middlewares.verficandoLoginAdmin,
  controllerOganizador.renderizarPaginaEdicaoOrganizador
);
router.post(
  "/atualizar/organizador/:id",
  middlewares.verficandoLoginAdmin,
  controllerOganizador.editarOrganizador
);

//rotas veterinario
router.get(
  "/veterinario",
  middlewares.verficandoLoginAdmin,
  controllerVeterinario.renderizarPaginaCadastroVeterinario
);
router.post(
  "/veterinario",
  middlewares.verficandoLoginAdmin,
  controllerVeterinario.salvarDadosVeterinario
);
router.get(
  "/pesquisa/veterinario",
  middlewares.verficandoLoginAdmin,
  controllerVeterinario.renderizarPaginaPesquisaVeterinario
);
router.delete(
  "/excluir/veterinario/:id",
  middlewares.verficandoLoginAdmin,
  controllerVeterinario.excluirVeterinario
);
router.get(
  "/edicao/veterinario/:id",
  middlewares.verficandoLoginAdmin,
  controllerVeterinario.renderizarPaginaEditarVet
);
router.post(
  "/atualizar/veterinario/:id",
  middlewares.verficandoLoginAdmin,
  controllerVeterinario.atualizarVeterinario
);

module.exports = router;
