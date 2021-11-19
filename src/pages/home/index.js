import React, { useState } from 'react';
import Header from '../../components/header';
import { Fab } from '@material-ui/core';
import {  Flex,MicBox,Container } from "./style";
import Card from '../../components/card';
import Mic from '@material-ui/icons/Mic';
 
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
 

function Home() {

    const[record, setRecord]= useState('');

      const  onStop = (audioData) => {
        console.log('audioData', audioData)
      }

    return (
        <Flex>
            <Header/>
            <MicBox>
                <Fab color="primary" aria-label="add">
                    <Mic />
                </Fab>
                <p>Precione para gravar um áudio</p>
            </MicBox>
            <div>
                <div>
                    <AudioReactRecorder backgroundColor="white"	 state={record} onStop={onStop} />
                    <button onClick={() => setRecord(RecordState.START)}>Start</button>
                    <button onClick={() => setRecord(RecordState.STOP)}>Stop</button>
                </div>
            </div>

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
  