import styled from "styled-components";

export const FiltrosContainer = styled.div`
   margin-top: 1em;
   display: flex;
   width: 100%;
  
   aside {
    min-width: 15%;
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 70%;
    margin: auto;

    margin: 20px 0px 0px 20px;

    button{
        margin-top: 5px;
        padding: 5px;
    }
  }

  label {
    display: flex;
    flex-direction: row;
    margin-left: 1.5em;
    font-size: 16px;
    margin-bottom: 0.5em;
  }

  select {
    font-size: 16px;
    margin-left: 1.2em;
    width: 14em;
    height: 1.8em;
    text-align: center;
  }

  main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 1rem;
  }
  
  h1 {
        font-size: 1em;
    }
    
  h2 {
        color: var(--yellowgreen);
    }

  h3 {
        color: var(--yellowgreen);
    }
`