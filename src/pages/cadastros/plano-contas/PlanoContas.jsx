import React from 'react';
import { Typography, Box, Paper, TextField, Button, Grid, MenuItem } from '@mui/material';
import './PlanoContas.css';

const PlanoContas = () => {
  return (
    <Box className="plano-contas-container">
      <Typography variant="h4" component="h1" className="plano-contas-title">
        Cadastro de Plano de Contas
      </Typography>
      
      <Paper className="plano-contas-card">
        <Typography variant="h6" gutterBottom className="plano-contas-subtitle">
          Nova Conta
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Código"
              variant="outlined"
              className="plano-contas-input"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Nome da Conta"
              variant="outlined"
              className="plano-contas-input"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Tipo"
              select
              variant="outlined"
              className="plano-contas-input"
            >
              <MenuItem value="receita">Receita</MenuItem>
              <MenuItem value="despesa">Despesa</MenuItem>
              <MenuItem value="patrimonio">Patrimônio</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Conta Pai"
              select
              variant="outlined"
              className="plano-contas-input"
            >
              <MenuItem value="">Nenhuma</MenuItem>
              <MenuItem value="1">Receitas</MenuItem>
              <MenuItem value="2">Despesas</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descrição"
              multiline
              rows={4}
              variant="outlined"
              className="plano-contas-input"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className="plano-contas-button"
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PlanoContas; 