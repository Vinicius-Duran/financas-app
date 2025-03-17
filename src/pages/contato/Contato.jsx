import React, { useState } from 'react';
import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o formulário
    setOpenSnackbar(true);
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box className="contato-container">
      <Typography variant="h4" component="h1" className="contato-title">
        Contato
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper className="contato-info-card">
            <Typography variant="h6" gutterBottom className="contato-text">
              Informações de Contato
            </Typography>
            <Typography paragraph className="contato-text">
              Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo:
            </Typography>
            <Box className="contato-info">
              <Typography variant="body1" gutterBottom className="contato-text">
                <strong>Email:</strong> contato@cashflow.com
              </Typography>
              <Typography variant="body1" gutterBottom className="contato-text">
                <strong>Telefone:</strong> (11) 1234-5678
              </Typography>
              <Typography variant="body1" gutterBottom className="contato-text">
                <strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP
              </Typography>
              <Typography variant="body1" gutterBottom className="contato-text">
                <strong>Horário de Atendimento:</strong> Segunda a Sexta, 9h às 18h
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="contato-form-card">
            <Typography variant="h6" gutterBottom className="contato-text">
              Envie sua Mensagem
            </Typography>
            <form onSubmit={handleSubmit} className="contato-form">
              <TextField
                fullWidth
                label="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                margin="normal"
                required
                className="contato-input"
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'var(--text-color)',
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'var(--text-color)',
                    '& fieldset': {
                      borderColor: 'var(--border-color)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--primary-color)',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                className="contato-input"
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'var(--text-color)',
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'var(--text-color)',
                    '& fieldset': {
                      borderColor: 'var(--border-color)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--primary-color)',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                margin="normal"
                required
                className="contato-input"
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'var(--text-color)',
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'var(--text-color)',
                    '& fieldset': {
                      borderColor: 'var(--border-color)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--primary-color)',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Mensagem"
                name="mensagem"
                multiline
                rows={4}
                value={formData.mensagem}
                onChange={handleChange}
                margin="normal"
                required
                className="contato-input"
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'var(--text-color)',
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'var(--text-color)',
                    '& fieldset': {
                      borderColor: 'var(--border-color)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--primary-color)',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="contato-submit-button"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contato; 