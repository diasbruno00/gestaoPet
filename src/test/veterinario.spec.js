const Veterinario = require("../model/veterinario");

describe("Veterinario", () => {
  test("inicialização  class Veterinario", () => {
    const veterinario = new Veterinario(
      "mariana",
      20,
      "mariana@gmail.com",
      "31988469832",
      "21231",
      "mari consultorios",
      "melhor escolha para o seu pet"
    );

    expect(veterinario).toHaveProperty("nome", "mariana");
    expect(veterinario).toHaveProperty("idade", 20);
    expect(veterinario).toHaveProperty("email", "mariana@gmail.com");
    expect(veterinario).toHaveProperty("telefone", "31988469832");
    expect(veterinario).toHaveProperty("crmv", "21231");
    expect(veterinario).toHaveProperty("consultorio", "mari consultorios");
    expect(veterinario).toHaveProperty(
      "detalhes",
      "melhor escolha para o seu pet"
    );
  });

  test("vericando uma idade valida", ()=>{
    const  veterinario = new Veterinario()
    veterinario.idade = 20
    expect(veterinario.verificandoIdadeValida()).toBe(true)
  })

  test("vericando uma idade não valida", ()=>{
    const  veterinario = new Veterinario()
    veterinario.idade = true
    expect(veterinario.verificandoIdadeValida()).toBe(false)
  })
});
