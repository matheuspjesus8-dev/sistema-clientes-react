const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./clientes.db", (erro) => {
  if (erro) {
    console.error("Erro ao conectar ao banco:", erro.message);
  } else {
    console.log("Banco de dados conectado.");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT NOT NULL
  )
`);

module.exports = db;
