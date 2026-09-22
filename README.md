# Sistema de Clientes React

Atividade 03.1 por Matheus Pereira de Jesus e Haniel Sousa e Souza

Aplicação web desenvolvida em React para gerenciamento de clientes, com integração a uma API REST desenvolvida em Node.js e Express.

O projeto foi desenvolvido como atividade prática para aplicar conceitos de React, componentes, Props, State, eventos, `map()`, `fetch()`, API REST e banco de dados.

## 🎯 Objetivo

Desenvolver uma aplicação capaz de:

- Exibir produtos utilizando React;
- Cadastrar clientes;
- Consultar clientes cadastrados;
- Integrar o Front-End com uma API REST;
- Armazenar os clientes em um banco de dados.

## 🛠️ Tecnologias utilizadas

### Front-End

- React
- JavaScript
- JSX
- CSS
- Vite
- Fetch API

### Back-End

- Node.js
- Express
- CORS

### Banco de Dados

- SQLite

### Ferramentas

- VS Code
- Git
- GitHub
- Postman

## 📁 Estrutura do projeto

```text
sistema-clientes-react/
│
├── backend/
│   ├── clientes.db
│   ├── database.js
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Cliente.jsx
│   │   │   ├── FormularioCliente.jsx
│   │   │   ├── Produto.jsx
│   │   │   └── Titulo.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
