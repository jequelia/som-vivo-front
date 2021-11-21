import React, { useState } from 'react';
import Header from '../../components/header';
import { Fab } from '@material-ui/core';
import {  Flex,MicBox,Container, Box } from "./style";
import Card from '../../components/card';
import Mic from '@material-ui/icons/Mic';
import Stop from '@material-ui/icons/Stop';

 
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
 

function Home() {

    const[record, setRecord]= useState('');

      const  onStop = (audioData) => {
        console.log('audioData', audioData)
      }


      

    return (
        <Flex>
            <Header/>
            
            <div>
                <Box>
                    <AudioReactRecorder canvasWidth="300" canvasHeight="200" backgroundColor="white"	 state={record} onStop={onStop} />
                    {record === RecordState.START?
                        <MicBox>
                            <Fab color="primary" aria-label="add">
                                <Stop onClick={() => setRecord(RecordState.STOP)} />
                            </Fab>
                            <p>Parar gravação</p>
                        </MicBox>
                        :
                        <MicBox>
                            <Fab color="primary" aria-label="add">
                                <Mic onClick={() => setRecord(RecordState.START)} />
                            </Fab>
                            <p>Gravar áudio</p>
                        </MicBox> 
                    }
                </Box>
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
  