import React, { useState } from 'react';

import {  Form } from 'semantic-ui-react';
import { Container, Flex } from "./styles";
import { useHistory } from 'react-router';
import app from '../../services/api';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    let history = useHistory();

    const postData = () => {
        app.post('',{
            email,
            password
        }).then(() => {
            history.push('/');
        });
    }

    return (
        <Flex>
            <Container>
                <Form>
                    <Form.Field>
                        <TextField 
                            id="outlined-basic"  
                            onChange={(e) => setEmail(e.target.value)} 
                            label="E-mail" 
                            variant="outlined" />
                        
                    </Form.Field>
                    <br/>
        
                    <Form.Field>
                    <TextField 
                            id="outlined-basic"  
                            onChange={(e) => setPassword(e.target.value)}
                            label="Senha" 
                            variant="outlined" />
                    </Form.Field>
                    <br/>

        
                    <div id="buttons">
                        <Button variant="contained" onClick={postData} type='submit'>Entrar</Button>
                    </div>

                </Form>
            </Container>
        </Flex>
    );
  }
  
  export default Login;
  