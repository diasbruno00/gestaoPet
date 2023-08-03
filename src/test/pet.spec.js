const Pet = require("../model/pet");

describe("Pet", () => {
  test("inicialização  class Pet", () => {
    const pet = new Pet(
      "toto",
      5,
      "cachorro",
      "pitbull",
      "dipirona",
      "anti-raiva",
      "racao",
      "limpar corativo",
      3
    );
    expect(pet).toHaveProperty("nome", "toto");
    expect(pet).toHaveProperty("idade", 5);
    expect(pet).toHaveProperty("tipo", "cachorro");
    expect(pet).toHaveProperty("raca", "pitbull");
    expect(pet).toHaveProperty("remedios", "dipirona");
    expect(pet).toHaveProperty("vacina", "anti-raiva");
    expect(pet).toHaveProperty("alimentacao", "racao");
    expect(pet).toHaveProperty("observacao", "limpar corativo");
    expect(pet).toHaveProperty("usuario", 3);
  });
});
