import React, { useState } from 'react';

import {  Form } from 'semantic-ui-react';
import { Container, Flex,Backgound } from "./styles";
import { useHistory } from 'react-router';
import {  useRouteMatch } from "react-router-dom";
import { TextField } from '@material-ui/core';
import api from '../../services/api'
import Swal from 'sweetalert2'

const criaFormEmBranco = () => {
    return {
      senha: '',

    };
  };
  

function RecuperarSenha() {

    const [form, setForm] = useState(criaFormEmBranco());
    const history = useHistory();
    const { params } = useRouteMatch();
    const setValor = (evento, campo) => {
      setForm({...form, [campo]: evento.target.value});
    };

    const submeter = async (evento) => {
        evento.preventDefault();
        let dadosForm = {...form};
        setForm(criaFormEmBranco());
        await api.put(`/usuarios/${params.id}`, dadosForm).then( () => {
          Swal.fire({
            icon: 'success',
            title: 'Senha alterada com sucesso!',
            showConfirmButton: true,
            confirmButtonColor: '#ff6a28'
            
        }).then(() => {
          history.push('/login');
        })
        }).catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Usuario não encontrado!',
            showConfirmButton: true,
            confirmButtonColor: '#ff6a28'
        }).then(() => {})
        }
        );
        
      };

    return (
        <Flex>
            <Backgound/>
            <Container>
                <Form onSubmit={(e) => submeter(e)}>
                        <h3>Insira sua nova senha</h3>
                        
                        <div>
                            <TextField label="Digite novamente" variant="filled" type="password" name="senha" value={form.senha} onChange={(e) => setValor(e, 'senha')}/>
                        </div>
                        <br/>
                       
                        <input type="submit" id="input" value="Entrar"/>
                        <br/>
                       
                </Form>
            </Container>
        </Flex>
    );
  }
  
  export default RecuperarSenha;
  