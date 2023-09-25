import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --soft-white: #f2f2f2;
    --green: #8bcf21;
    --yellow: #383b40;
    --deep-blue: #011640;
    --deep-blue-secondary: #010f2b;
    --darkcyan: #008b8b;
    --aliceblue: #f0f8ff;
    --yellowgreen: #9acd32;
    --darkslategrey: #2f4f4f;
    --grey: #808080
    }

    h1 {
        font-family: ubuntu, cursive;
        color: var(--green);
    }

    h2, h3 {
        font-family: skranji, cursive;
        color: var(--deep-blue-secondary);
    }

    p {
        font-family: croissant one, sans-serif;
        background: var(--darkcyan);
        color: var(--soft-white);
    }

    body { 
        font-family: croissant one, sans-serif;
        background: var(--deep-blue);
        color: var(--soft-white);
    }

    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }

    
`