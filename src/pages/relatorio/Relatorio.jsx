import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import './Relatorio.css';

const Relatorio = () => {
  return (
    <Box className="relatorio-container">
      <Typography variant="h4" component="h1" className="relatorio-title">
        Relatórios
      </Typography>
      
      <Paper className="relatorio-card">
        <Typography variant="h6" gutterBottom className="relatorio-text">
          Relatórios Financeiros
        </Typography>
        <Typography paragraph className="relatorio-text">
          Aqui você pode visualizar e gerar relatórios detalhados sobre suas finanças.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Relatorio; 