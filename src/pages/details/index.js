import React, { useState, useEffect } from 'react';
import {  Flex,Container } from "./styles";
import GraphicEq from '@material-ui/icons/GraphicEq'
import {  useRouteMatch } from "react-router-dom";
import api from '../../services/api'
import { Link } from 'react-router-dom'

function Details() {
    const[som, setSom]= useState([]);
    const { params } = useRouteMatch();
    const id = `som/${params.id}`

    useEffect(() => {
        teste()
      }, []);
    
    const  teste = async () =>{
        const response = await api.get(`${id}`);
        const detail = response.data;
        console.log(detail)
        setSom(detail);
      }

    return (
        <Container>
            <Flex>
                <GraphicEq/>
                <h5>Nome: {som.nome}</h5>
                <h4>Categoria: {som.categoria}</h4>
                <h4>Classificação: {som.classificacao}</h4>
                <h4>Frequência: {som.frequencia}</h4>
                <br/>
                <Link  to="/home">
                    <input type="submit" id="input" value="Voltar"/>
                </Link>

            </Flex>
        </Container>
    );
  }
  
  export default Details;
  