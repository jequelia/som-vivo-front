import styled from 'styled-components'

export const Container  = styled.div`
 
    display: flex;
    justify-content: start;
    align-items: center;
    background: #ff6a28;
    width: 100vw;
    height: 10vh;
    margin-bottom: 15px;
    position: fixed;
    top: 0;
    z-index:1;
`

export const Issues = styled.section`
a{
        margin-left: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        transition: 0.5s;
        color: black;

        div{
            margin-left: 16px;
            strong {
                font-size: 20px;
                color: #3D3D4D;
            }
            p{
                font-size: 18px;
                color: white;
            }
          
        }
        svg{
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`