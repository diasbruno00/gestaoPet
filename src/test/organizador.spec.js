const Organizador = require("../model/organizador");
const OrganizadorDao = require("../database/organizadorDao")

describe("Organizador", () => {
  test("inicialização  class Organizador", () => {
    const organizador = new Organizador(
      "20/12/2020",
      "12/08/2021",
      "diporona",
      "12:00",
      "banho diariamente",
      "aplicar medicacoa diaramente",
      "muito bom",
      "toto",
      "mariana"
    );
    expect(organizador).toHaveProperty("dataConsulta", "20/12/2020");
    expect(organizador).toHaveProperty("dataVacina", "12/08/2021");
    expect(organizador).toHaveProperty("medicacao", "diporona");
    expect(organizador).toHaveProperty("horarioAlimentacao", "12:00");
    expect(organizador).toHaveProperty("higiene", "banho diariamente");
    expect(organizador).toHaveProperty(
      "cuidadoExtras",
      "aplicar medicacoa diaramente"
    );
    expect(organizador).toHaveProperty("feddback", "muito bom");
    expect(organizador).toHaveProperty("nomePet", "toto");
    expect(organizador).toHaveProperty("nomeVeterinario", "mariana");
  });

});
