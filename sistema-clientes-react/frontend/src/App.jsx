import { useEffect, useState } from "react";

import Titulo from "./components/Titulo";
import Produto from "./components/Produto";
import Cliente from "./components/Cliente";
import FormularioCliente from "./components/FormularioCliente";

function App() {
  const [produtos] = useState([
    {
      id: 1,
      nome: "Notebook",
      categoria: "Informática",
      preco: 3500,
    },
    {
      id: 2,
      nome: "Smartphone",
      categoria: "Eletrônicos",
      preco: 2200,
    },
    {
      id: 3,
      nome: "Monitor",
      categoria: "Informática",
      preco: 1200,
    },
  ]);

  const [clientes, setClientes] = useState([]);

  const buscarClientes = async () => {
    try {
      const resposta = await fetch("http://localhost:3001/clientes");

      if (!resposta.ok) {
        throw new Error("Erro ao buscar clientes.");
      }

      const dados = await resposta.json();

      setClientes(dados);
    } catch (erro) {
      console.error(erro);
    }
  };

  useEffect(() => {
    buscarClientes();
  }, []);

  const adicionarCliente = (cliente) => {
    setClientes((clientesAnteriores) => [
      ...clientesAnteriores,
      cliente,
    ]);
  };

  return (
    <div className="app">
      <Titulo />

      <main>
        <section className="secao">
          <div className="titulo-secao">
            <h2>Produtos</h2>
            <p>Confira alguns produtos disponíveis.</p>
          </div>

          <div className="lista-produtos">
            {produtos.map((produto) => (
              <Produto
                key={produto.id}
                nome={produto.nome}
                categoria={produto.categoria}
                preco={produto.preco}
              />
            ))}
          </div>
        </section>

        <section className="secao cadastro">
          <FormularioCliente
            adicionarCliente={adicionarCliente}
          />
        </section>

        <section className="secao">
          <div className="titulo-secao">
            <h2>Clientes cadastrados</h2>
            <p>
              Lista de clientes armazenados no banco de dados.
            </p>
          </div>

          <div className="lista-clientes">
            {clientes.length === 0 ? (
              <p className="nenhum-cliente">
                Nenhum cliente cadastrado.
              </p>
            ) : (
              clientes.map((cliente) => (
                <Cliente
                  key={cliente.id}
                  nome={cliente.nome}
                  email={cliente.email}
                  telefone={cliente.telefone}
                />
              ))
            )}
          </div>
        </section>
      </main>

      <footer>
        <p>Sistema de Clientes - Projeto React</p>
      </footer>
    </div>
  );
}

export default App;
