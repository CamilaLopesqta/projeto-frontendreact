import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import { GlobalStyle } from './GlobalStyle';
import { listaDeProdutos } from './Components/Home/Produtos/Produtos/listaDeProdutos';
import Carrinho from './Components/Carrinho/Carrinho';
import { Header } from './Components/Home/Header/Header';

function App () {

  const [produto] = ([listaDeProdutos]); //dados mockados
  const [precoMin, setPrecoMin] = useState(-Infinity); //busca por preço min
  const [precoMax, setPrecoMax] = useState(Infinity); //busca por preço max
  const [orderParam, setOrderParam] = useState ("") //busca por ordem crec/decresc - está na home
  const [consulta, setConsulta] = useState("") //consulta por nome
    
  const handleInputOrderParam = (event) => setOrderParam(event.target.value) //funcao ordem cres/dec
  const handleInputConsulta = (event) => setConsulta(event.target.value) //FUNCAO BUSCA POR NOME
  const handleInputPrecoMin = (event) => setPrecoMin(event.target.value) //FUNCAO BUSCA Preco min
  const handleInputPrecoMax = (event) => setPrecoMax(event.target.value) //FUNCAO BUSCA Preco max
  
  //CARRINHO
  const [carrinhoDeCompras, setCarrinhoDeCompras] = useState(() => {
    const savedCart = localStorage.getItem('carrinhoDeCompras');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('carrinhoDeCompras', JSON.stringify(carrinhoDeCompras));
  }, [carrinhoDeCompras]);
   
  const addProdutoCarrinho = (id) => {
    const indexCarrinho = carrinhoDeCompras.findIndex((prodCarrinho) => 
    prodCarrinho.id === id);
    
    if (indexCarrinho < 0) {
      const novoProdutoAdd = {
        ...produto.find((prodCarrinho) => prodCarrinho.id === id),
        quantidade: 1,
      };
      const novoProdAddCarrinho = [...carrinhoDeCompras, novoProdutoAdd];
      setCarrinhoDeCompras(novoProdAddCarrinho);
    } else {
      const novoProdAddCarrinho = carrinhoDeCompras.map(produto => {
        if (produto.id === id) {
          return { ...produto, quantidade: produto.quantidade + 1 };
        }
        return produto;
      });
      setCarrinhoDeCompras(novoProdAddCarrinho);
    }
  };
  
  const removerProdutoDoCarrinho = (id) => {
    const novoProdAddCarrinho = carrinhoDeCompras
      .map((produtos) => {
        if (produtos.id === id) {
          return { ...produtos, quantidade: produtos.quantidade - 1 };
        }
        return produtos;
      })
      .filter((produtos) => produtos.quantidade > 0);
    setCarrinhoDeCompras(novoProdAddCarrinho);
  };
  
  
  return (
    <div ClassName="App" >
      
    <GlobalStyle />
    <Header />

    <Carrinho 
        produto={produto}
        listaDeProdutos={listaDeProdutos}
        carrinhoDeCompras={carrinhoDeCompras}
        setCarrinhoDeCompras={setCarrinhoDeCompras}
        removerProdutoDoCarrinho={removerProdutoDoCarrinho}
   />

    <Home
        listaDeProdutos={listaDeProdutos} 
        handlers={{handleInputOrderParam, handleInputConsulta, handleInputPrecoMin, handleInputPrecoMax}}
        states={{precoMin, precoMax, consulta, orderParam}}
        addProdutoCarrinho={addProdutoCarrinho}
    />  
 
  </div>
  );
}

export default App;
