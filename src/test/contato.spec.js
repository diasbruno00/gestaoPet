const Contato = require("../model/contato");

describe("Contato", () => {
  test("inicialização  class Contato", () => {
    const contato = new Contato(
      "jose",
      "augusto",
      "jose@gmail.com",
      "031988743221",
      "Erro ao relizar cadastro"
    );
    expect(contato).toHaveProperty("nome", "jose");
    expect(contato).toHaveProperty("sobrenome", "augusto");
    expect(contato).toHaveProperty("email", "jose@gmail.com");
    expect(contato).toHaveProperty("telefone", "031988743221");
    expect(contato).toHaveProperty("mensagem", "Erro ao relizar cadastro");
  });
});
