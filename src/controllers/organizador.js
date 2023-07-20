const Organizador = require("../model/organizador");
const OrganizadorDao = require("../database/organizadorDao");
const PetDao = require("../database/petDao");
const veterinarioDao = require("../database/veterinarioDao");

class ControllerOrganizador {

  constructor() {}

  salvarDadosOrganizador = async (req, res) => {
    const {
      dataConsulta,
      dataVacina,
      medicacao,
      horarioAlimentacao,
      higiene,
      cuidadeExtresas,
      feddback,
      nomePet,
      nomeVeterinario,
    } = req.body;

    const pet = await PetDao.findOne({ nome: nomePet });
    console.log(pet)
    const veterinario = await veterinarioDao.findOne({ nome: nomeVeterinario });

    if (pet) {
      if (veterinario) {
        const organizador = new Organizador(
          dataConsulta,
          dataVacina,
          medicacao,
          horarioAlimentacao,
          higiene,
          cuidadeExtresas,
          feddback,
          nomePet,
          nomeVeterinario
        );

        console.log(organizador);
        const resposta = await OrganizadorDao.create(organizador);
        console.log(resposta);

        req.flash("sucesso", `Dados salvos com sucesso`);
        res.redirect("/principal");

      } else {
        req.flash(
          "erro",
          `${nomeVeterinario} nao consta no banco de dados de Veterinario`
        );
        res.redirect("back");
      }
    } else {
      req.flash("erro", `${nomePet} nao consta no banco de dados do Pet`);
      res.redirect("back");
    }
  };
}

module.exports = ControllerOrganizador;
