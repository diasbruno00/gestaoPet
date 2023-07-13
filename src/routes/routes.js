const express = require("express")
const router = express.Router();
const ControllerLogin = require('../controllers/login');
const ControllerUsuario = require("../controllers/usuario");
const ControllerPet = require("../controllers/pet")

const controllerLogin = new ControllerLogin()
const controllerUsuario = new ControllerUsuario()
const controllerPet = new ControllerPet()


router.get('/principal/:id', (req, res) => {
    
   const id = req.params.id

   
    const obj = {
        chave: id,
      };
      

    res.render('homeView',{id: [obj]})
})

router.get('/contatos' , ( req, res) => {
    res.render('contato')
})

router.get('/criar', controllerLogin.renderizarPaginaCriarLogin)
router.post('/criar', controllerLogin.salvarDadosLogin)

router.get('/login',controllerLogin.renderizarPaginaRealizarLogin )
router.post('/login',controllerLogin.recuperarDadosLogin)

// rotas usuarios

router.get('/cadastro/:id',controllerUsuario.renderizarPaginaCadastro)
router.get('/lista/usuario/:id',controllerUsuario.listarUsuarioCadastrado)
router.post('/cadastro/:id',controllerUsuario.salvarDadosUsuario)
router.post('/atualizar/usuario/:id',controllerUsuario.atualizarUsuario)

// rotas Pet
router.get('/pet',controllerPet.renderizarPaginaCadastro)
router.post('/salvar/pet/:id',controllerPet.salvarDadosPet)

module.exports = router