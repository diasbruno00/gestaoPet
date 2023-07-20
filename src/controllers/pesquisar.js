const PetDao = require("../database/petDao");

class ControllerPesquisar {
  constructor() {}

  renderizarPaginaPesquisa = async (req, res) => {
    const nomePet = req.query.pesquisar;

    if (!nomePet) {
        
      let lista;

      try {
        lista = await PetDao.find();
      } catch (error) {
        console.log(error);
      }
      res.render("pesquisa", { lista });
    } else {

      let lista;

      try {
        lista = await PetDao.findOne({ nome: nomePet });
      } catch (error) {
        console.log(error);
      }
      res.render("pesquisa", { lista });
    }
  };
}

module.exports = ControllerPesquisar;
