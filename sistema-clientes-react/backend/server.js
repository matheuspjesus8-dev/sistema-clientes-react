const express = require("express");
const cors = require("cors");

const db = require("./database");

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

/*
  GET /clientes

  Retorna todos os clientes cadastrados.
*/

app.get("/clientes", (req, res) => {
  const sql = "SELECT * FROM clientes ORDER BY id DESC";

  db.all(sql, [], (erro, clientes) => {
    if (erro) {
      console.error(erro);

      return res.status(500).json({
        erro: "Erro ao buscar clientes.",
      });
    }

    res.json(clientes);
  });
});

/*
  POST /clientes

  Cadastra um novo cliente.
*/

app.post("/clientes", (req, res) => {
  const { nome, email, telefone } = req.body;

  if (!nome || !email || !telefone) {
    return res.status(400).json({
      erro: "Nome, e-mail e telefone são obrigatórios.",
    });
  }

  const sql = `
    INSERT INTO clientes (nome, email, telefone)
    VALUES (?, ?, ?)
  `;

  db.run(
    sql,
    [nome, email, telefone],
    function (erro) {
      if (erro) {
        console.error(erro);

        return res.status(500).json({
          erro: "Erro ao cadastrar cliente.",
        });
      }

      res.status(201).json({
        id: this.lastID,
        nome,
        email,
        telefone,
      });
    }
  );
});

/*
  Rota inicial
*/

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do Sistema de Clientes funcionando!",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
