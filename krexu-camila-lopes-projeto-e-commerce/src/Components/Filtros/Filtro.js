import React, { useState } from "react";
import App from "../../App";
import { StyledForm } from "./FiltroStyle";


function Filtros(props) {
const { filtro } = props
const { precoMax, precoMin, query, orderParam } = props.states
const { handleInputPrecoMax, handleInputPrecoMin, handleInputQuery, handleInputOrderParam } = props.handlers

  
    return (
      
      <StyledForm>
        
        <h2>Filtro</h2>
        <aside>
      <form>
            <label htmlFor="precoMax"  >Preço Máximo:</label>
            <input 
            onChange={handleInputPrecoMax} 
            type="text"
            id="precoMax"
            value={precoMax}  />

            <label htmlFor="precoMin"  >Preço Mínimo:</label>
            <input 
            onChange={handleInputPrecoMin} 
            type="text" 
            id="precoMin"
            value={precoMin}  />

            <button  >Filtrar</button>

            <h3>Busca</h3>
            <input type="text" value={query} onChange={handleInputQuery} />

            <h3>Ordenar</h3>
            <select name="" id="" value={orderParam} onChange={handleInputOrderParam} >
              <option value="asc" >Crescente</option>
              <option value="desc" >Decrescente</option>
            </select>

           

           </form>
           </aside>
     </StyledForm>
     
    );
  }
  
  export default Filtros;