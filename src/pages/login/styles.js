import styled from 'styled-components'

export const Container  = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 30px;
    flex-direction: column;
    background: #ffffff42;
    width: 30%;
    padding: 87px;
    border: none;


    .create-form label{
        color: whitesmoke !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px !important;
    }

    form{
        width: 100%;
        border: none;

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
        #register{
           display: flex;
           width: 100%;
           justify-content: center;
           align-items: center;
       }

       #senha{
           font-size: 14px;
       }
    }

    #input{
        width: 27vw;
        height: 7vh;
        background: #ff6c28;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1rem;
        :hover{
        background:#ff6c28d1;


        }

      
    }
    a{
        color:#ff6c28d1;
        margin-left: 6px;

    }
`

export const Flex = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100vh;

`

export const Backgound = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://blog.gazinatacado.com.br/wp-content/uploads/2018/01/ouvir-os-clientes.jpg');
    width: 50%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

`