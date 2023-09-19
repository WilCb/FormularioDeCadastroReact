import React, { Component } from 'react'
import './App.css'
import FormularioCadastro from './componets/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/500.css';

class App extends Component {

  render() {
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align='center'>Formulário de Cadastro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App
