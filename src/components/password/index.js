import React, { useState } from 'react';

import {  Form } from 'semantic-ui-react';
import { Container, Flex,Backgound } from "./styles";
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
import api from '../../services/api'
import Swal from 'sweetalert2'

const criaFormEmBranco = () => {
    return {
      email: '',
    };
  };
  

function Email() {

    const [form, setForm] = useState(criaFormEmBranco());
    const history = useHistory();
  
    const setValor = (evento, campo) => {
      setForm({...form, [campo]: evento.target.value});
    };

    const submeter = async (evento) => {
        evento.preventDefault();
        let dadosForm = {...form};
        setForm(criaFormEmBranco());
        await api.post('/email', dadosForm)
        .then( () => {
          Swal.fire({
            icon: 'success',
            title: 'Um email foi enviado para você, verifique sua caixa de spam!',
            showConfirmButton: true,
            
        }).then(() => {
          history.push('/login');
        })
        })
        .catch((error)=> {
          Swal.fire({
            icon: 'error',
            title: 'Email não encontrado!',
            showConfirmButton: true,
            
        }).then(() => {})
        });
        
      };

    return (
        <Flex>
            <Backgound/>
            <Container>
                <Form onSubmit={(e) => submeter(e)}>
                        <h3>Insira seu e-mail para recuperar a senha</h3>
                        <div>
                            <TextField label="Email" variant="filled" type="text" name="email" value={form.email} onChange={(e) => setValor(e, 'email')}/>
                        </div>
                        <br/>
                       
                        <input type="submit" id="input" value="Enviar"/>
                        <br/>
                       
                </Form>
            </Container>
        </Flex>
    );
  }
  
  export default Email;
  