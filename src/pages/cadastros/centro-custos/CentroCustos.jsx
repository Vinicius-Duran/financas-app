import React from 'react';
import { Typography, Box, Paper, TextField, Button, Grid } from '@mui/material';
import './CentroCustos.css';

const CentroCustos = () => {
  return (
    <Box className="centro-custos-container">
      <Typography variant="h4" component="h1" className="centro-custos-title">
        Cadastro de Centro de Custos
      </Typography>
      
      <Paper className="centro-custos-card">
        <Typography variant="h6" gutterBottom className="centro-custos-subtitle">
          Novo Centro de Custo
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Nome do Centro de Custo"
              variant="outlined"
              className="centro-custos-input"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Código"
              variant="outlined"
              className="centro-custos-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descrição"
              multiline
              rows={4}
              variant="outlined"
              className="centro-custos-input"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className="centro-custos-button"
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CentroCustos; 