import React from 'react';
import { Typography, Box, Paper, TextField, Button, Grid, MenuItem } from '@mui/material';
import './Receita.css';

const Receita = () => {
  return (
    <Box className="receita-container">
      <Typography variant="h4" component="h1" className="receita-title">
        Cadastro de Receita
      </Typography>
      
      <Paper className="receita-card">
        <Typography variant="h6" gutterBottom className="receita-subtitle">
          Nova Receita
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Descrição"
              variant="outlined"
              className="receita-input"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Valor"
              type="number"
              variant="outlined"
              className="receita-input"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Data"
              type="date"
              variant="outlined"
              className="receita-input"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Categoria"
              select
              variant="outlined"
              className="receita-input"
            >
              <MenuItem value="salario">Salário</MenuItem>
              <MenuItem value="investimentos">Investimentos</MenuItem>
              <MenuItem value="outros">Outros</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Observações"
              multiline
              rows={4}
              variant="outlined"
              className="receita-input"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className="receita-button"
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Receita; 