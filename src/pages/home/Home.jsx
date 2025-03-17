import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import './Home.css';

const Home = () => {
  return (
    <Box className="home-container">
      <Typography variant="h4" component="h1" className="home-title">
        Bem-vindo ao CashFlow
      </Typography>
      
      <Paper className="home-card">
        <Typography variant="h6" gutterBottom className="home-text">
          Dashboard
        </Typography>
        <Typography paragraph className="home-text">
          Aqui você pode visualizar um resumo das suas finanças, incluindo:
        </Typography>
        <ul className="home-text">
          <li>Saldo atual</li>
          <li>Receitas do mês</li>
          <li>Despesas do mês</li>
          <li>Gastos por categoria</li>
        </ul>
      </Paper>
    </Box>
  );
};

export default Home; 