import React from 'react';
import './TermosServico.css';

const TermosServico = () => {
  return (
    <div className="termos-servico-container">
      <h1 className="termos-title">Termos de Serviço</h1>

      <div className="termos-card">
        <h2 className="termos-text">1. Aceitação dos Termos</h2>
        <p className="termos-text">
          Ao acessar e usar o CashFlow, você concorda em cumprir estes termos de serviço. 
          Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
        </p>
      </div>

      <div className="termos-card">
        <h2 className="termos-text">2. Descrição do Serviço</h2>
        <p className="termos-text">
          O CashFlow é uma plataforma de gestão financeira que oferece:
        </p>
        <ul className="termos-list">
          <li>Controle de receitas e despesas</li>
          <li>Gestão de contas bancárias</li>
          <li>Relatórios financeiros</li>
          <li>Planejamento orçamentário</li>
        </ul>
      </div>

      <div className="termos-card">
        <h2 className="termos-text">3. Responsabilidades do Usuário</h2>
        <p className="termos-text">
          Como usuário do CashFlow, você é responsável por:
        </p>
        <ul className="termos-list">
          <li>Manter a confidencialidade de sua conta</li>
          <li>Fornecer informações precisas e atualizadas</li>
          <li>Não usar o serviço para fins ilegais</li>
          <li>Não tentar acessar áreas restritas do sistema</li>
        </ul>
      </div>

      <div className="termos-card">
        <h2 className="termos-text">4. Limitações do Serviço</h2>
        <p className="termos-text">
          O CashFlow não garante que o serviço estará disponível ininterruptamente ou livre de erros. 
          Reservamos o direito de modificar ou descontinuar o serviço a qualquer momento.
        </p>
      </div>

      <div className="termos-card">
        <h2 className="termos-text">5. Propriedade Intelectual</h2>
        <p className="termos-text">
          Todo o conteúdo, funcionalidades e tecnologia do CashFlow são propriedade exclusiva 
          da empresa e estão protegidos por leis de propriedade intelectual.
        </p>
      </div>

      <div className="termos-card">
        <h2 className="termos-text">6. Modificações dos Termos</h2>
        <p className="termos-text">
          Reservamos o direito de modificar estes termos a qualquer momento. 
          As alterações entram em vigor imediatamente após a publicação.
        </p>
      </div>
    </div>
  );
};

export default TermosServico;
