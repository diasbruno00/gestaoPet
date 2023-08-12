class Organizador {
  constructor(
    dataConsulta,
    dataVacina,
    medicacao,
    horarioAlimentacao,
    higiene,
    cuidadoExtras,
    feddback,
    nomePet,
    nomeVeterinario
  ) {
    this.dataConsulta = dataConsulta;
    this.dataVacina = dataVacina;
    this.medicacao = medicacao;
    this.horarioAlimentacao = horarioAlimentacao;
    this.higiene = higiene;
    this.cuidadoExtras = cuidadoExtras;
    this.feddback = feddback;
    this.nomePet = nomePet;
    this.nomeVeterinario = nomeVeterinario
  }
}

module.exports = Organizador