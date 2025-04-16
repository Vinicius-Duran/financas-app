import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © {new Date().getFullYear()} CashFlow. Todos os direitos reservados.
        </p>
        
        <div className="footer-links">
          <Link to="/politica-privacidade" className="footer-link">
            Política de Privacidade
          </Link>
          <Link to="/termos-servico" className="footer-link">
            Termos de Serviço
          </Link>
          <Link to="/contato" className="footer-link">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 