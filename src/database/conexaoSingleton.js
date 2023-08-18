
const mongoose = require("mongoose");

class Database {
  constructor() {
    if (!Database.instance) {
      const dbUser = process.env.DB_USER;
      const dbPassword = process.env.DB_PASS;
      const dbName = process.env.DB_NAME;
      console.log(dbName)

      this.connectionString = `mongodb+srv://${dbUser}:${dbPassword}@gestaopet.4ipmrrw.mongodb.net/${dbName}?retryWrites=true&w=majority`;

      this.connect();

      Database.instance = this; // Armazenar a instância única
    }

    return Database.instance; // Retornar a instância existente
  }

  connect() {
    mongoose.connect(this.connectionString);

    const conexao = mongoose.connection;

    conexao.on("error", () => {
      console.error("erro ao conectar com o MongoDB");
    });

    conexao.on("open", () => {
      console.log("conectado ao MongoDB com sucesso");
    });
  }
}

module.exports = new Database(); // Exportar a instância única
