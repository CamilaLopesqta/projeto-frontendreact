import React from "react";
import { ProdutosContainer } from "./ProdutosStyle";


function Produtos(props) {
  
  const { image, name, description, price } = props

   return (
      <ProdutosContainer>
        <img src={image} alt={name} /> 
        <h2>{name}</h2>
        <h3>{description}</h3>
        <p>{price}</p> 
      </ProdutosContainer>
    );
  }
  
  export default Produtos;