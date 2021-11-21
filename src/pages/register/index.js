import React, { useState } from 'react';

import {  Form } from 'semantic-ui-react';
import { Container, Flex,Backgound } from "./styles";
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
import {useSegurancaContext} from '../../context/context';
import { Link } from 'react-router-dom'
import api from '../../services/api'

const criaFormEmBranco = () => {
    return {
      nome: '',
      email: '',
      senha: '',
      
    };
  };
  

function Register() {

    const [form, setForm] = useState(criaFormEmBranco());
    const history = useHistory();
    const {login} = useSegurancaContext();
  
    const setValor = (evento, campo) => {
      setForm({...form, [campo]: evento.target.value});
    };

    const submeter = async (evento) => {
        evento.preventDefault();
        let dadosForm = {...form};
        setForm(criaFormEmBranco());
        await api.post('/usuarios', dadosForm);
        history.push('/login');
      };

    return (
        <Flex>
            <Backgound/>
            <Container>
                <Form onSubmit={(e) => submeter(e)}>
                        <h3>Registrar</h3>
                        <div>
                            <TextField label="Nome" variant="filled" type="text" name="nome" value={form.nome} onChange={(e) => setValor(e, 'nome')}/>
                        </div>
                        <br/>

                        <div>
                            <TextField label="Email" variant="filled" type="text" name="email" value={form.email} onChange={(e) => setValor(e, 'email')}/>
                        </div>
                        <br/>
                        <div>
                            <TextField label="Senha" variant="filled" type="password" name="senha" value={form.senha} onChange={(e) => setValor(e, 'senha')}/>
                        </div>
                        <br/>
                        <input type="submit" id="input" value="Registrar"/>
                        <br/>
                     
                </Form>
            </Container>
        </Flex>
    );
  }
  
  export default Register;
  