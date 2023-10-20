import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: black;
    padding: 2em 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
        font-size: 3em;
    }

    div {
        button{
            font-size: 1.5em;
            background-color: transparent;
            border: none;
            color: #fff;
            padding: 0.5em 0 0 0.5em;
            color: var(--yellowgreen)
        }
        input {
            padding: 1em;
            border: none;
            border-radius: 1em;
            width: 35em;
            color: var(--deep-blue-secondary)
        }
    }

    img {
        max-width: 100px;
        margin-right: 50px;
    }

`