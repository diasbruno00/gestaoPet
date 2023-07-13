const LoginDao = require("../database/loginDao");
const Login = require("../model/login");

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
    const { email, senha } = req.body;
    // buscando por um email especifico
    let emailExiste = await LoginDao.findOne({ email });

    if (emailExiste) {
      req.flash("erro", `${email} invalido`);
      res.redirect("back");
    } else {
      const login = new Login(email, senha);

      const dados = await LoginDao.create({
        email: login.email,
        senha: login.senha,
      });

      const id = dados._id;

      req.flash("sucesso", `Ola, Realize seu cadastro`);
      res.redirect(`/cadastro/${id}`);
      
    }
  };

  recuperarDadosLogin = async (req, res) => {
    const { email, senha } = req.body;

    //LoginDao.find({email,senha}).populate('usuario')
    const resposta = await LoginDao.findOne({ email, senha });
    console.log(resposta)

    if (resposta) {
      req.session.logado = resposta;
      //res.redirect('/principal')
      res.redirect(`/principal/${resposta._id}`);
    } else {
      req.flash("alerta", `Verifique os dados informados`);
      res.redirect("back");
    }
  };
}

module.exports = ControllerLogin;
