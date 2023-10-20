import styled from "styled-components";

const CartContainer=styled.section`
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 5px;

    button{
        background-color: tomato;
        border: none;
        padding: 04px;
    }
`
const Text=styled.p`
width:100%;
white-space: nowrap;
overflow:hidden;
text-overflow:ellipsis;
`
export default CartContainer;