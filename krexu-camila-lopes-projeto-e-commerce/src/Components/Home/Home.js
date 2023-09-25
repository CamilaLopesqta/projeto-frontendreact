import React from "react";
import Filtros from "../Filtros/Filtro";

import { HomeContainer } from "./HomeStyle";
import Produtos from "../Home/Produtos/Produtos";

function Home (props) {
  
  const { item, query, orderParam, results } = props


  const renderList = results.map(item => {
      return (
      <Produtos 
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      )
      })

    return (
      <>
      <HomeContainer>
         <main>
            {renderList}
          </main>  
      </HomeContainer >
      </>
  );
    }
  
  export default Home;