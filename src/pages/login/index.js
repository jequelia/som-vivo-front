import React, { useState } from 'react';

import {  Form } from 'semantic-ui-react';
import { Container, Flex,Backgound } from "./styles";
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
import {useSegurancaContext} from '../../context/context';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const criaFormEmBranco = () => {
    return {
      email: '',
      senha: ''
    };
  };
  

function Login() {

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
        try {
          await login(dadosForm);
          history.push('/home');

        } catch (err) {
          Swal.fire({
            icon: 'error',
            title: 'Email ou senha incorreta',
            showConfirmButton: true,
            confirmButtonColor: '#ff6a28'
        }).then(() => {})
        }
      };

    return (
        <Flex>
            <Backgound/>
            <Container>
                <Form onSubmit={(e) => submeter(e)}>
                        <h3>Login</h3>
                        <div>
                            <TextField label="Email" variant="filled" type="text" name="email" value={form.email} onChange={(e) => setValor(e, 'email')}/>
                        </div>
                        <br/>
                        <div>
                            <TextField label="Senha" variant="filled" type="password" name="senha" value={form.senha} onChange={(e) => setValor(e, 'senha')}/>
                            <Link id="senha"to="/recuperar-senha">Esqueceu a senha?</Link>
                        </div>
                        <br/>
                        <input type="submit" id="input" value="Entrar"/>
                        <br/>
                        <div id="register">
                            <p>Não possui conta?</p>
                            <Link to="/register">Registre-se!</Link>
                        </div>
                </Form>
            </Container>
        </Flex>
    );
  }
  
  export default Login;
  