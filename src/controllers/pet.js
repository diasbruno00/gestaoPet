const Pet = require("../model/pet")
const PetDao = require("../database/petDao")
const UsuarioDao = require("../database/usuarioDao")

class ControllerPet {
    constructor(){

    }

    renderizarPaginaCadastro = ( req, res) => {

        res.render('crudPet')

    }
    salvarDadosPet = async ( req, res) =>{

        const id = req.params.id

        const {nome, idade,tipo, raca, remedios, vacina, alimentacao, observacao} = req.body

        const pet = new Pet(nome,idade,tipo,raca,remedios,vacina, alimentacao, observacao,id)

        const resposta = await PetDao.create(pet)

        req.session.pet = resposta

        const usuario = await UsuarioDao.findById(resposta.usuario)
     
        res.redirect(`/principal/${usuario.login._id}`)

    
    }
    atualizarDadosPet = async ( req, res) =>{
        
    }
}

module.exports = ControllerPet