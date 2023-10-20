import React, { useState } from "react";
import { FiltrosContainer } from "./FiltrosStyle";


//busca por nome, retornar visualização sem filtros, 

function Filtros(props) {

  const {precoMin, precoMax, consulta} = props.states
  const { handleInputConsulta, handleInputPrecoMin, handleInputPrecoMax} = props.handlers
  
  return (
    <>
      <>
        <FiltrosContainer>
          <aside>
            <form>
              <h2>Filtro:</h2>
              <label htmlFor="Preço Mínimo"></label>
              <input 
                id="Preço Mínimo"
                placeholder="Preço Mínimo"
                type="number"
                value={precoMin}
                onChange={handleInputPrecoMin}
              />
              <label htmlFor="Preço Máximo"></label>
              <input
                id="Preço Máximo"
                placeholder="Preço Máximo"
                type="number"
                value={precoMax}
                onChange={handleInputPrecoMax}
              />
            </form>
          </aside>
        </FiltrosContainer>
        <FiltrosContainer>
          <aside>
            <form>
              <h2>Busca:</h2>
              <label htmlFor="Pesquisa" ></label>
              <input
                id="Pesquisa"
                placeholder="Busca por nome"
                value={consulta}
                onChange={handleInputConsulta}
                type="text"
              />
            </form>
          </aside>
        </FiltrosContainer>
      </>
    </>
  );
}

export default Filtros;