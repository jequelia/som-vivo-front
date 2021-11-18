import React from 'react';
import Header from '../../components/header';
import { Fab } from '@material-ui/core';
import {  Flex,MicBox,Container } from "./style";
import Card from '../../components/card';
import Mic from '@material-ui/icons/Mic';


function Home() {

    return (
        <Flex>
            <Header/>
            <MicBox>
                <Fab color="primary" aria-label="add">
                    <Mic />
                </Fab>
                <p>Precione para gravar um áudio</p>
            </MicBox>

            <Container>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </Container>
        </Flex>
    );
}
  
export default Home;
  