import React, { useEffect, useState } from "react";
import { HomeContainer } from "./HomeStyle";
import Produtos from "../Home/Produtos/Produtos";
import Filtros from "../Filtros/Filtros";

//adicionar produtos ao carrinho (falta)
function Home(props) {

  const { listaDeProdutos, addProdutoCarrinho } = props
  const { consulta, precoMin, precoMax, orderParam} = props.states
  const { handleInputOrderParam, handleInputConsulta, handleInputPrecoMin, handleInputPrecoMax } = props.handlers

  const renderList = listaDeProdutos
    .filter((produto) => {
      return produto.nome.toLocaleLowerCase().includes(consulta) || produto.nome.toLocaleUpperCase().includes(consulta) || produto.nome.includes(consulta)
    })
    .filter((produto) => {
      return produto.preco >= precoMin || precoMin === ""
    })
    .filter((produto) => {
      return produto.preco <= precoMax || precoMax === ""
    })
    .sort((a, b) => orderParam === "" || orderParam === "asc" && a.nome > b.nome ? 1 : -1)
    .sort((a, b) => orderParam === "" || orderParam === "desc" && a.nome > b.nome ? -1 : 1)
    .map(prod => {
      return (
        <Produtos
          key={prod.id}
          id={prod.id}
          nome={prod.nome}
          preco={prod.preco}
          imagem={prod.imagem}
          addProdutoCarrinho={addProdutoCarrinho}
          />
      )
    })

  return (
    <>
      <>

      <Filtros
          listaDeProdutos={listaDeProdutos}
          states={{ precoMin, precoMax, consulta, orderParam }}
          handlers={{ handleInputConsulta, handleInputPrecoMin, handleInputPrecoMax }}
        />

        <HomeContainer>
          <aside>
            <form>
              <label>
                <h2> Ordenar por: </h2>
                <select value={orderParam} onChange={handleInputOrderParam} >
                  <option value="asc" >Crescente</option>
                  <option value="desc" >Decrescente</option>
                </select>
              </label>
            </form>
          </aside>

          <main>
            {renderList}
          </main>
        </HomeContainer>
        </>
    </>
  );
}

export default Home;