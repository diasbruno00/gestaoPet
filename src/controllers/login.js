const LoginDao = require("../database/loginDao");
const Login = require("../model/login");
const bcrypt = require("bcrypt");

class ControllerLogin {
  constructor() {}

  renderizarPaginaCriarLogin = (req, res) => {
    res.render("criarLogin");
  };

  renderizarPaginaRealizarLogin = async (req, res) => {
    // retornando a lista de login registrado no banco
    const listaDeLogin = await LoginDao.find();
    //res.json({listaDeLogin})
    res.render("realizarLogin");
  };

  salvarDadosLogin = async (req, res) => {
    const { email, senha, confirmarSenha } = req.body;
    // buscando por um email especifico
    let emailExiste = await LoginDao.findOne({ email });

    if (emailExiste) {
      req.flash("erro", `${email} invalido`);
      res.redirect("back");
    } else {
      const login = new Login(email, senha);

      const iguais = login.verificandoSenhas(senha, confirmarSenha);

      if (iguais) {
        const senhaSegura = await bcrypt.hash(senha, 10);

        const dados = await LoginDao.create({
          email: login.email,
          senha: senhaSegura,
        });

        req.session.logado = dados;
        const id = dados._id;

        req.flash("sucesso", `Ola, Realize seu cadastro`);
        res.redirect(`/cadastro/${id}`);
      } else {
        req.flash("erro", `Senhas não sao iguais`);
        res.redirect("back");
      }
    }
  };

  recuperarDadosLogin = async (req, res) => {
    const { email, senha } = req.body;
  
    try {
      const resposta = await LoginDao.find({ email });
      if (!resposta || resposta.length === 0) {

        req.flash("alerta", `${email} não existe na base de dados`);
        res.redirect("back");
        return;
      }
  
      let usuarioEncontrado = null;
  
      for (const login of resposta) {
        const senhaCorrespondente = login.senha;
        const senhaCorreta = await bcrypt.compare(senha, senhaCorrespondente);
  
        if (senhaCorreta) {
          usuarioEncontrado = login;
          req.session.logado = usuarioEncontrado;
          console.log("Login" + login)
          console.log("x" + req.session.logado)
          console.log(usuarioEncontrado._id)

          res.redirect(`/recuperar/usuario/${usuarioEncontrado._id}`);
          return
        }
      }
    
      req.flash("alerta", "Verifique os dados informados");
      res.redirect("back");
      
    } catch (error) {
      console.log(error);
      res.json({erro: error})
    }
  };

  deslogar(req, res, next) {
    req.session.destroy();
    res.redirect("/criar");
  }
}

module.exports = ControllerLogin;
