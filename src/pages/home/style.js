import styled from 'styled-components'


export const Flex = styled.div `
    width: 100%;
    height: 100vh;

`

export const MicBox = styled.div `
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p{
        margin-top: 30px;
    }
`

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Box = styled.div `
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    button{
        background-color:#ff6a28;
    }

`

export const Card = styled.div `
    width: 10vw;
    height: 20vh;
    border-radius: 15px;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    text-decoration: none;


    h5, svg{
        color:#ff6a28;
    }
    a{
        text-decoration: none;
    }

`