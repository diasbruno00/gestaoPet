const express = require("express")
const router = express.Router();
const ControllerLogin = require('../controllers/login');
const ControllerUsuario = require("../controllers/usuario");

const controllerLogin = new ControllerLogin()
const controllerUsuario = new ControllerUsuario()


router.get('/principal', (req, res) => {
    res.render('home')
})

router.get('/contatos' , ( req, res) => {
    res.render('contato')
})

router.get('/criar', controllerLogin.renderizarPaginaCriarLogin)
router.post('/criar', controllerLogin.salvarDadosLogin)

router.get('/login',controllerLogin.renderizarPaginaRealizarLogin )
router.post('/login',controllerLogin.recuperarDadosLogin)

router.get('/cadastro/:id',controllerUsuario.renderizarPaginaCadastro)
router.get('/lista/usuario/:id',controllerUsuario.listarUsuarioCadastrado)
router.post('/cadastro/:id',controllerUsuario.salvarDadosUsuario)

module.exports = router