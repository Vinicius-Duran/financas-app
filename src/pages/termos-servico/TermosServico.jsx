import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import './TermosServico.css';

const TermosServico = () => {
  return (
    <Box className="termos-servico-container">
      <Typography variant="h4" component="h1" className="termos-title">
        Termos de Serviço
      </Typography>
      
      <Paper className="termos-card">
        <Typography variant="h6" gutterBottom className="termos-text">
          1. Aceitação dos Termos
        </Typography>
        <Typography paragraph className="termos-text">
          Ao acessar e usar o CashFlow, você concorda em cumprir estes termos de serviço. 
          Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
        </Typography>
      </Paper>

      <Paper className="termos-card">
        <Typography variant="h6" gutterBottom className="termos-text">
          2. Descrição do Serviço
        </Typography>
        <Typography paragraph className="termos-text">
          O CashFlow é uma plataforma de gestão financeira que oferece:
        </Typography>
        <ul className="termos-list">
          <li>Controle de receitas e despesas</li>
          <li>Gestão de contas bancárias</li>
          <li>Relatórios financeiros</li>
          <li>Planejamento orçamentário</li>
        </ul>
      </Paper>

      <Paper className="termos-card">
        <Typography variant="h6" gutterBottom className="termos-text">
          3. Responsabilidades do Usuário
        </Typography>
        <Typography paragraph className="termos-text">
          Como usuário do CashFlow, você é responsável por:
        </Typography>
        <ul className="termos-list">
          <li>Manter a confidencialidade de sua conta</li>
          <li>Fornecer informações precisas e atualizadas</li>
          <li>Não usar o serviço para fins ilegais</li>
          <li>Não tentar acessar áreas restritas do sistema</li>
        </ul>
      </Paper>

      <Paper className="termos-card">
        <Typography variant="h6" gutterBottom className="termos-text">
          4. Limitações do Serviço
        </Typography>
        <Typography paragraph className="termos-text">
          O CashFlow não garante que o serviço estará disponível ininterruptamente ou livre de erros. 
          Reservamos o direito de modificar ou descontinuar o serviço a qualquer momento.
        </Typography>
      </Paper>

      <Paper className="termos-card">
        <Typography variant="h6" gutterBottom className="termos-text">
          5. Propriedade Intelectual
        </Typography>
        <Typography paragraph className="termos-text">
          Todo o conteúdo, funcionalidades e tecnologia do CashFlow são propriedade exclusiva 
          da empresa e estão protegidos por leis de propriedade intelectual.
        </Typography>
      </Paper>

      <Paper className="termos-card">
        <Typography variant="h6" gutterBottom className="termos-text">
          6. Modificações dos Termos
        </Typography>
        <Typography paragraph className="termos-text">
          Reservamos o direito de modificar estes termos a qualquer momento. 
          As alterações entram em vigor imediatamente após a publicação.
        </Typography>
      </Paper>
    </Box>
  );
};

export default TermosServico; 