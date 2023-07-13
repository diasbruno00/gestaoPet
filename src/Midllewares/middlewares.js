class Middlewares {

    middlewaresGlobal = (req, res, next) => {
      res.locals.sucesso = req.flash("sucesso");
      res.locals.erro = req.flash("erro");
      res.locals.alerta = req.flash("alerta");
      res.locals.logado = req.session.logado
      res.locals.usuario = req.session.usuario
      res.locals.pet = req.session.pet
      next();
    };

}

module.exports = Middlewares