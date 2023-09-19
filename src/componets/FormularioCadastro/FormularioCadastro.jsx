import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';

function FormularioCadastro() {
    const [nome, setNome] = useState('');   
    const [sobrenome, setSobrenome] = useState('')
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(nome)
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    let tmpNome = event.target.value
                    if(tmpNome.length >= 3) {
                        tmpNome = tmpNome.substring(0, 3);
                    }
                    setNome(tmpNome);
                }}
                id='nome'
                label='Nome'
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                    if(sobrenome.length >= 3) {
                        setSobrenome(sobrenome.substring(0, 3))
                    }
                }}
                id='sobrenome'
                label='Sobrenome'
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <TextField
                id='cpf'
                label='CPF'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <FormControlLabel label='Promoções' control={
                <Switch
                    color='primary'
                    defaultChecked
                    name='promocoes'
                />
            } />

            <FormControlLabel label='Novidades' control={
                <Switch
                    color='primary'
                    defaultChecked
                    name='novidades'
                />
            } />

            <Button variant='contained' color='primary'>Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;