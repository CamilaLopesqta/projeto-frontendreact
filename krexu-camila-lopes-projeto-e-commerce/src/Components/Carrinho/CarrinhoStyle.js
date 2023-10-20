import styled from "styled-components";

export const CarrinhoContainer = styled.div`
    background-color: var(--soft-white);
    padding: 10px;
    margin: 5px;
    text-align: center;
    color: var(--dark);

    img{
        max-width: 50px;
    }

    h2 {
        color: var(--deep-blue)
    }

    p {
        color: var(--dark)
    }    

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    span {
        padding-left: 0.5em;
    }

    button{
    background-color: transparent;
    border: none;
    color: var(--dark);
    font-size: 1em;
    padding-left: 0.5em;
    }
`
export const CardProduto = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    p {
        width: 50%;
        padding-left: 0.5em;
        font-size: 1.5em;
        font-family: skranji, cursive;
    }

    span {
        width: 25%;
        padding-left: 0.5em;
        font-size: 1.5em;
        font-family: skranji, cursive;
    }
`
export const Lixeira = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.5em;
    padding-left: 0.5em;
`

export const ContainerCarrinho = styled.div`
    background-color: var(--deep-blue-secondary);
    height: 100%;
    display : flex;
    flex-direction: column;
    position: relative;
    align-content: center;

    h2 {
        margin-top: 1em;
    }
`
export const TituloCarrinho = styled.h1 `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    margin: 0.5em;
    background-color: var(--deep-blue-secondary);
    padding: 1em;
`
export const ListaDeCompras = styled.div `
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    line-height: 3em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    
    h2{
        color: var(--yellowgreen);
    }

    button {
        display: flex;
        text-align: center;
        width: 100%;
        justify-content: center;
        font-size: 1.5em;
        font-family: skranji, cursive;
    }

`
