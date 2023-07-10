const UsuarioDao = require("../database/usuarioDao");
const Usuario = require("../model/usuario");


class ControllerUsuario {
  constructor() {}

  renderizarPaginaCadastro = async (req, res) => {

    const id = req.params.id;

    const obj = {
        chave: id,
      };

      res.render("cadastroUsuario", {obj :[obj]});
      
  };

  
  listarUsuarioCadastrado = async (req, res) => {

    const id = req.params.id;

    const obj = {
        chave: id,
      };

    const usuario = await UsuarioDao.find({"login": id}).populate('login')
    
      res.render("crudUsuario", {usuario} )
    
  };

  salvarDadosUsuario = async (req, res) => {
    try {

      const id = req.params.id;

      const { nome, sobrenome, email, telefone, identificador, idade, bio} = req.body;

      const usuario = new Usuario(
        nome,
        sobrenome,
        email,
        telefone,
        identificador,
        idade,
        bio,
        id
      );

      const dados = await UsuarioDao.create(usuario);
      req.session.usuario = dados;

      console.log(dados)

      res.redirect("/principal");
    } catch (error) {
      res.json({ error });
    }
  };
}

module.exports = ControllerUsuario;
