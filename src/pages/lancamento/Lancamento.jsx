import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import './Lancamento.css';

const Lancamento = () => {
  return (
    <Box className="lancamento-container">
      <Typography variant="h4" component="h1" className="lancamento-title">
        Lançamentos
      </Typography>
      
      <Paper className="lancamento-card">
        <Typography variant="h6" gutterBottom className="lancamento-text">
          Novo Lançamento
        </Typography>
        <Typography paragraph className="lancamento-text">
          Aqui você pode registrar suas receitas e despesas.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Lancamento; 