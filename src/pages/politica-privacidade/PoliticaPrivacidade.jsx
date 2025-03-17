import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import './PoliticaPrivacidade.css';

const PoliticaPrivacidade = () => {
  return (
    <Box className="politica-privacidade-container">
      <Typography variant="h4" component="h1" className="politica-title">
        Política de Privacidade
      </Typography>
      
      <Paper className="politica-card">
        <Typography variant="h6" gutterBottom className="politica-text">
          1. Coleta de Informações
        </Typography>
        <Typography paragraph className="politica-text">
          O CashFlow coleta informações pessoais que você fornece diretamente ao criar uma conta ou usar nossos serviços. 
          Isso pode incluir nome, endereço de e-mail, informações financeiras e outros dados necessários para o funcionamento do sistema.
        </Typography>
      </Paper>

      <Paper className="politica-card">
        <Typography variant="h6" gutterBottom className="politica-text">
          2. Uso das Informações
        </Typography>
        <Typography paragraph className="politica-text">
          Utilizamos suas informações para:
        </Typography>
        <ul className="politica-list">
          <li>Fornecer e melhorar nossos serviços</li>
          <li>Processar suas transações financeiras</li>
          <li>Enviar comunicações importantes sobre sua conta</li>
          <li>Personalizar sua experiência no sistema</li>
        </ul>
      </Paper>

      <Paper className="politica-card">
        <Typography variant="h6" gutterBottom className="politica-text">
          3. Segurança dos Dados
        </Typography>
        <Typography paragraph className="politica-text">
          Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais 
          contra acesso não autorizado, alteração, divulgação ou destruição.
        </Typography>
      </Paper>

      <Paper className="politica-card">
        <Typography variant="h6" gutterBottom className="politica-text">
          4. Compartilhamento de Dados
        </Typography>
        <Typography paragraph className="politica-text">
          Não vendemos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário 
          para o funcionamento do serviço ou quando exigido por lei.
        </Typography>
      </Paper>

      <Paper className="politica-card">
        <Typography variant="h6" gutterBottom className="politica-text">
          5. Seus Direitos
        </Typography>
        <Typography paragraph className="politica-text">
          Você tem o direito de:
        </Typography>
        <ul className="politica-list">
          <li>Acessar suas informações pessoais</li>
          <li>Corrigir informações imprecisas</li>
          <li>Solicitar a exclusão de seus dados</li>
          <li>Optar por não receber comunicações de marketing</li>
        </ul>
      </Paper>

      <Paper className="politica-card">
        <Typography variant="h6" gutterBottom className="politica-text">
          6. Contato
        </Typography>
        <Typography paragraph className="politica-text">
          Para questões relacionadas à privacidade, entre em contato conosco através do email: 
          privacidade@cashflow.com
        </Typography>
      </Paper>
    </Box>
  );
};

export default PoliticaPrivacidade; 