class Pet {
    
  constructor(
    nome,
    idade,
    tipo,
    raca,
    remedios,
    vacina,
    alimentacao,
    observacao,
    usuario
  ) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.raca = raca;
    this.remedios = remedios;
    this.vacina = vacina;
    this.alimentacao = alimentacao;
    this.observacao = observacao
    this.usuario = usuario;
  }
}

module.exports = Pet