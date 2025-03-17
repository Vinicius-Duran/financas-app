import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Stack,
} from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    background: 'var(--background-gradient)',
    color: 'white',
    padding: '20px 0',
    marginTop: 'auto',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 0.8,
    },
  };

  return (
    <Box component="footer" sx={footerStyle}>
      <Container maxWidth="1400px">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 4 }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', sm: 'center' }}
        >
          <Typography variant="body2">
            © {currentYear} CashFlow © - Todos os direitos reservados
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            alignItems="center"
          >
            <Link to="/politica-privacidade" style={linkStyle}>
              <Typography variant="body2">Política de Privacidade</Typography>
            </Link>
            <Link to="/termos-servico" style={linkStyle}>
              <Typography variant="body2">Termos de Serviço</Typography>
            </Link>
            <Link to="/contato" style={linkStyle}>
              <Typography variant="body2">Contato</Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 