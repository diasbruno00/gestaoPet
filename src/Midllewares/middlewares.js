class Middlewares {
  middlewaresGlobal = (req, res, next) => {
    res.locals.sucesso = req.flash("sucesso");
    res.locals.erro = req.flash("erro");
    res.locals.alerta = req.flash("alerta");
    res.locals.logado = req.session.logado;
    res.locals.usuario = req.session.usuario;
    res.locals.pet = req.session.pet;
    next();
  };

  verficandoLoginAdmin = (req, res, next) => {
    if (!req.session.logado) {
      req.flash(
        "alerta",
        "E necessario efetuar login para ter acesso a essa area"
      );
      req.session.save(() => {
        res.redirect("/criar");
      });
      return;
    }
    next();
  };
}

module.exports = Middlewares;
