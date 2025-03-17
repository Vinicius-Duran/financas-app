import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import './Usuario.css';

const Usuario = () => {
  return (
    <Box className="usuario-container">
      <Typography variant="h4" component="h1" className="usuario-title">
        Perfil do Usuário
      </Typography>
      
      <Paper className="usuario-card">
        <Typography variant="h6" gutterBottom className="usuario-text">
          Informações Pessoais
        </Typography>
        <Typography paragraph className="usuario-text">
          Aqui você pode gerenciar suas informações pessoais e preferências do sistema.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Usuario; 