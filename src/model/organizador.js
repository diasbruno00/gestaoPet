class Organizador {
  constructor(
    dataConsulta,
    dataVacina,
    medicacao,
    horarioAlimentacao,
    higiene,
    cuidadeExtresas,
    feddback,
    nomePet,
    nomeVeterinario
  ) {
    this.dataConsulta = dataConsulta;
    this.dataVacina = dataVacina;
    this.medicacao = medicacao;
    this.horarioAlimentacao = horarioAlimentacao;
    this.higiene = higiene;
    this.cuidadeExtresas = cuidadeExtresas;
    this.feddback = feddback;
    this.nomePet = nomePet;
    this.nomeVeterinario = nomeVeterinario
  }
}

module.exports = Organizador