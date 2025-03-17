import React from 'react';
import { Typography, Box, Paper, TextField, Button, Grid, MenuItem } from '@mui/material';
import './ContasBancarias.css';

const ContasBancarias = () => {
  return (
    <Box className="contas-bancarias-container">
      <Typography variant="h4" component="h1" className="contas-bancarias-title">
        Cadastro de Contas Bancárias
      </Typography>
      
      <Paper className="contas-bancarias-card">
        <Typography variant="h6" gutterBottom className="contas-bancarias-subtitle">
          Nova Conta Bancária
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Nome do Banco"
              variant="outlined"
              className="contas-bancarias-input"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Tipo de Conta"
              select
              variant="outlined"
              className="contas-bancarias-input"
            >
              <MenuItem value="corrente">Conta Corrente</MenuItem>
              <MenuItem value="poupanca">Conta Poupança</MenuItem>
              <MenuItem value="investimento">Conta Investimento</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Agência"
              variant="outlined"
              className="contas-bancarias-input"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Número da Conta"
              variant="outlined"
              className="contas-bancarias-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Observações"
              multiline
              rows={4}
              variant="outlined"
              className="contas-bancarias-input"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className="contas-bancarias-button"
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ContasBancarias; 