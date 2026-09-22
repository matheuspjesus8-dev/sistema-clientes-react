import { useState } from "react";

function FormularioCliente({ adicionarCliente }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nome || !email || !telefone) {
      alert("Preencha todos os campos.");
      return;
    }

    const novoCliente = {
      nome,
      email,
      telefone,
    };

    try {
      const resposta = await fetch("http://localhost:3001/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoCliente),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar cliente.");
      }

      const clienteCadastrado = await resposta.json();

      adicionarCliente(clienteCadastrado);

      setNome("");
      setEmail("");
      setTelefone("");

      alert("Cliente cadastrado com sucesso!");
    } catch (erro) {
      console.error(erro);
      alert("Não foi possível cadastrar o cliente.");
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Cadastrar Cliente</h2>

      <div className="campo">
        <label htmlFor="nome">Nome</label>

        <input
          id="nome"
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="email">E-mail</label>

        <input
          id="email"
          type="email"
          placeholder="Digite o e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="telefone">Telefone</label>

        <input
          id="telefone"
          type="text"
          placeholder="Digite o telefone"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />
      </div>

      <button type="submit">
        Cadastrar cliente
      </button>
    </form>
  );
}

export default FormularioCliente;
