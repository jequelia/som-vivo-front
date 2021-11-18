import styled from 'styled-components'

export const Container  = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 30px;
    flex-direction: column;
    border-radius: 17px;
    background: #ffffffcf;
    width: 30%;
    padding: 87px;


    .create-form label{
        color: whitesmoke !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px !important;
    }

    form{
        width: 100%;

        h3{
            color: #ff6a28;
        }

        .row{
            display: flex;
            margin-bottom: 30px;
        }

        div{
            width: 100%;
        }
    }

    button{
        width: 100%;

       
    }
`

export const Flex = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://blog.gazinatacado.com.br/wp-content/uploads/2018/01/ouvir-os-clientes.jpg');
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

`