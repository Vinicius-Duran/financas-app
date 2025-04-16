import React from 'react';
import './Relatorio.css';

const Relatorio = () => {
  return (
    <div className="relatorio-container">
      <h1 className="relatorio-title">Relatórios</h1>

      <div className="relatorio-card">
        <h2 className="relatorio-text">Relatórios Financeiros</h2>
        <p className="relatorio-text">
          Aqui você pode visualizar e gerar relatórios detalhados sobre suas finanças.
        </p>
      </div>
    </div>
  );
};

export default Relatorio;
