const Login = require("../model/login");

describe("Login", () => {
  test("Senhas iguais True", () => {
    const login = new Login();
    expect(login.verificandoSenhas("123", "123")).toBe(true);
  });

  test("Senhas iguais False", () => {
    const login = new Login();
    expect(login.verificandoSenhas("123", "124")).toBe(false);
  });

  test("inicialização class Login", () => {
    const login = new Login("diasbruno00@gmail.com", "12345");
    expect(login).toHaveProperty("email", "diasbruno00@gmail.com");
    expect(login).toHaveProperty("senha", "12345");
  });
});
