import React, { useState } from 'react';
import Filtros from './Components/Filtros/Filtro';
import Home from './Components/Home/Home';
import Carrinho from './Components/Carrinho/Carrinho';
import { GlobalStyle } from './GlobalStyle';
import { results } from './Components/Home/Produtos/data/data';
import { Header } from './Components/Home/Header/Header';

function App() {

  const [precoMax, setPrecoMax] = useState("")
  const [precoMin, setPrecoMin] = useState("")
  const [item, setItem] = useState(results)
  const [ query, setQuery ] = useState("")
  const [ orderParam, setOrderParam ] = useState ("")

  const handleInputPrecoMax = (event) => setPrecoMax(event.target.value);
  const handleInputPrecoMin = (event) => setPrecoMin(event.target.value);
  const handleInputQuery = (event) => setQuery(event.target.value)
  const handleInputOrderParam = (event) => setOrderParam(event.target.value)
  
  return (
    <div ClassName="App" >
      
    <GlobalStyle />
    <Header />
    <Home results={item} />
    <Carrinho />
    <Filtros 
        states={{precoMax, precoMin, query, orderParam}}
        handlers={{handleInputPrecoMax, handleInputPrecoMin, handleInputQuery, handleInputOrderParam}}
    />
    </div>
  );
}

export default App;
