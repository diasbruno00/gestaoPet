const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@gestaopet.4ipmrrw.mongodb.net/gestaoPet?retryWrites=true&w=majority`
  );

  const conexao = mongoose.connection;

  conexao.on("error", () => {
    console.error("erro ao conectar com o mongoDB");
  });

  conexao.on("open", () => {
    console.log("conetado ao mongoDB com sucesso");
  });
};

connect();

module.exports = mongoose;
