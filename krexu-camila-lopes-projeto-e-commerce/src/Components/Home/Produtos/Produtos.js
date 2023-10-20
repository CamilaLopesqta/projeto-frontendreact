import React from "react";
import { ProdutosContainer } from "./ProdutosStyle";

function Produtos(props) {
  
  
  return (

    <ProdutosContainer key={props.id}>
      <img src={props.imagem} alt="Nome do brinquedo" />
      <h3>{props.nome}</h3>
      <p>{props.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }, { minimumFractionDigits: 2 })}</p>
      <button onClick={()=>{props.addProdutoCarrinho(props.id)}}>Comprar</button>
    </ProdutosContainer>

  );
}

export default Produtos;