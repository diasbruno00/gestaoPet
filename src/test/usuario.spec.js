const Usuario = require("../model/usuario");

describe("Usuario", () => {

  test("inicialização class Usuario", () => {
    const usuario = new Usuario(
      "bruno",
      "dias",
      "diasbruno00@gmail.com",
      "31988216532",
      "11111111111",
      24,
      "apaixonado por pet",
      1
    );
    expect(usuario).toHaveProperty("primeiroNome", "bruno");
    expect(usuario).toHaveProperty("sobrenome", "dias");
    expect(usuario).toHaveProperty("email", "diasbruno00@gmail.com");
    expect(usuario).toHaveProperty("telefone", "31988216532");
    expect(usuario).toHaveProperty("indentificador", "11111111111")
    expect(usuario).toHaveProperty("idade", 24)
    expect(usuario).toHaveProperty("bio", "apaixonado por pet")
    expect(usuario).toHaveProperty("login", 1)
  });
});

