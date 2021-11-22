import styled from 'styled-components'


export const Flex = styled.div `
    width: 40vw;
    height: 60vh;
    border-radius: 15px;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;

    #input{
        width: 20vw;
        height: 7vh;
        background: #ff6c28;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1rem;
        :hover{
        background:#ff6c28d1;


        }
`

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;



`