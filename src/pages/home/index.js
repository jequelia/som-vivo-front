import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import { Fab } from '@material-ui/core';
import {  Flex,MicBox,Container, Box,Card } from "./style";
import Mic from '@material-ui/icons/Mic';
import Stop from '@material-ui/icons/Stop';
import { Link } from 'react-router-dom'
import GraphicEq from '@material-ui/icons/GraphicEq'
import api from '../../services/api'

 
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
 

function Home() {

    const[record, setRecord]= useState('');
    const[som, setSom]= useState([]);

    useEffect(() => {
        teste()
      }, [som]);
    
   
     const  teste = async () =>{
        const response = await api.get('/som');
        const repository = response.data;
        setSom(repository);
        
      }

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
                {som.map((repo) => (
                    <Container>
                            {console.log(repo.nome)}
                            <Link  to={`/details/${repo._id}`}>
                            <Card>
                                <Container>
                                    <GraphicEq/>
                                    <h5>{repo.nome}</h5>
                                </Container>
                            </Card>
                            </Link>
                        </Container>
                    ))}
            </Container>
        </Flex>
    );
}
  
export default Home;
  