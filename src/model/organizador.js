class Organizador {
  constructor(
    observacao,
    dataConsulta,
    dataVacina,
    medicacao,
    horarioAlimentacao,
    higiene,
    cuidadeExtresas,
    feddback
  ) {
    this.observacao = observacao;
    this.dataConsulta = dataConsulta;
    this.dataVacina = dataVacina;
    this.medicacao = medicacao;
    this.horarioAlimentacao = horarioAlimentacao;
    this.higiene = higiene;
    this.cuidadeExtresas = cuidadeExtresas;
    this.feddback = feddback;
  }
}

module.exports = Organizador