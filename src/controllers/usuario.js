const UsuarioDao = require("../database/usuarioDao");
const Usuario = require("../model/usuario");

class ControllerUsuario {
  constructor() {}

  renderizarPaginaCadastro = async (req, res) => {
    const id = req.params.id;
    
    const obj = {
      chave: id,
    };
  
    res.render("cadastroUsuario", { obj: [obj]});
  };

  listarUsuarioCadastrado = async (req, res) => {
    
    try {

      const id = req.params.id;
      const usuario = await UsuarioDao.findOne({ login: id }).populate("login");

       //res.render("crudUsuario", { usuario: usuario, idLogin: id });
       res.render("crudUsuario")

    } catch (error) {
      console.log(error);
    }
  };

  salvarDadosUsuario = async (req, res) => {
    try {
      const id = req.params.id;

      const { nome, sobrenome, email, telefone, indentificador, idade, bio } =
        req.body;
        const usuario = new Usuario(
          nome,
          sobrenome,
          email,
          telefone,
          indentificador,
          idade,
          bio,
          id
        );

        const dados = await UsuarioDao.create(usuario);

        req.session.usuario = dados;

        console.log(dados)
    
        res.redirect(`/principal/${dados.login._id}`);
      }catch (error) {
      res.json({ error });
    }
  };

  atualizarUsuario = async (req, res) => {

    const id = req.params.id;

    const { nome, sobrenome, email, telefone,  indentificador, idade, bio } =
      req.body;
     
      const usuario = new Usuario(
        nome,
        sobrenome,
        email,
        telefone,
        indentificador,
        idade,
        bio,
        id
      );
      console.log(usuario)

      const novoUsuario = await UsuarioDao.findByIdAndUpdate(id, usuario, {
        new: true,
      });
      console.log(novoUsuario)

      req.session.usuario = novoUsuario;

      req.flash('sucesso',`Ola ${nome} dados atualizados com sucesso`)
      res.redirect(`/principal/${novoUsuario.login._id}`);

    
  };

  deletarUsuario = (req, res) => {};
}

module.exports = ControllerUsuario;
