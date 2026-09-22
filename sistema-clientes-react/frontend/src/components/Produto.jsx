function Produto({ nome, categoria, preco }) {
  return (
    <div className="produto">
      <h3>{nome}</h3>
      <p className="categoria">{categoria}</p>
      <p className="preco">
        R$ {preco.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}
      </p>
    </div>
  );
}

export default Produto;
