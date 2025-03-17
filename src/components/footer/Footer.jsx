import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Divider,
} from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Box className="footer-content">
          <Typography variant="body2" className="copyright">
            © {new Date().getFullYear()} CashFlow. Todos os direitos reservados.
          </Typography>
          
          <Box className="footer-links">
            <Link to="/politica-privacidade" className="footer-link">
              Política de Privacidade
            </Link>
            <Link to="/termos-servico" className="footer-link">
              Termos de Serviço
            </Link>
            <Link to="/contato" className="footer-link">
              Contato
            </Link>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer; 