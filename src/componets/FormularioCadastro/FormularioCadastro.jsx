import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';

function FormularioCadastro() {
    const [nome, setNome] = useState('');   
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
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
                }}
                id='sobrenome'
                label='Sobrenome'
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                id='cpf'
                label='CPF'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <FormControlLabel label='Promoções' control={
                <Switch
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                    color='primary'
                    defaultChecked={promocoes}
                    name='promocoes'
                />
            } />

            <FormControlLabel label='Novidades' control={
                <Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                    color='primary'
                    defaultChecked={novidades}
                    name='novidades'
                />
            } />

            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;