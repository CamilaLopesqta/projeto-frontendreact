import React from "react";
import { CardProduto, Lixeira, ContainerCarrinho, TituloCarrinho, ListaDeCompras } from "./CarrinhoStyle";

function Carrinho(props) {

  const finalizarCompra = () => {
    alert ("Compra finalizada com sucesso!")
}

const listaDeProd = props.carrinhoDeCompras.map((e) => {

    let qntProduto = e.quantidade * e.preco

    return (
        <CardProduto >
            <p>{e.quantidade}x    </p>           <p>{e.nome}</p>
            <span>
                {qntProduto.toLocaleString('pt-BR',{ style:'currency', currency:'BRL'},)}
            </span>
            <Lixeira onClick={() => props.removerProdutoDoCarrinho(e.id)}> Remover </Lixeira>
        </CardProduto>
    )
    })

    let somaItens = 0
    for (let item of props.carrinhoDeCompras) {
        somaItens += item.quantidade * item.preco
    }
 
    return (
        <ContainerCarrinho>
            <TituloCarrinho>
                Carrinho
            </TituloCarrinho>
            <ListaDeCompras>
                {listaDeProd}
                <h2>
                    Total: {somaItens.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }, { minimumFractionDigits: 2 })}
                </h2>
                <button onClick={finalizarCompra}>Finalizar compra</button>
            </ListaDeCompras>
        </ContainerCarrinho>
    )
    }



export default Carrinho;