import styled from "styled-components";

export const HomeContainer = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
      
   main {   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    padding: 1rem;
   }

   aside {
    min-width: 15%;
  }

  form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 70%;
      margin: auto;

      margin: 20px 0px 0px 20px;

  button {
         margin-top: 5px;
         padding: 5px;
      }
   }

   h2 {
        color: var(--yellowgreen);
    }

` 

