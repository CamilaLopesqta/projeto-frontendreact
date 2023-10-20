import styled from "styled-components";

export const ProdutosContainer = styled.div`
    background-color: var(--soft-white);
    padding: 10px;
    margin: 5px;
    text-align: center;
    color: var(--dark);

    img {
        width: 200px;
        height: 200px;
    }

    h2 {
        color:var(--deep-blue)
    }

    h6 {
        color: var(--deep-blue)
    }

    p {
        display:flex;
        justify-content: center;
        color: var(--deep-blue-secondary)
    }

    button {
      font-size: 0.9em;
      background: var(--deep-blue);
      border: 0.1em solid black;
      color: var(--soft-white)
    }
`

export const ProdutosOrdenados = styled.div`
  margin-top: 1em; 
  display: flex;
  
  label {
    display: flex;
    flex-direction: row;
    margin-left: 1.5em;
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  
  select {
    font-size: 0.8em;
    margin-left: 1.2em;
    width: 14em;
    height: 1.8em;
    border-radius: 0.7em;
    text-align: center;
  }
`;

export const Prod = styled.div`
  align-items: center;
  justify-content: center;
`;

