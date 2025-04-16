import React from 'react';
import './PlanoContas.css';

const PlanoContas = () => {
  return (
    <div className="plano-contas-container">
      <h1 className="plano-contas-title">Cadastro de Plano de Contas</h1>

      <div className="plano-contas-card">
        <h2 className="plano-contas-subtitle">Nova Conta</h2>

        <form className="plano-contas-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Código"
              className="plano-contas-input"
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Nome da Conta"
              className="plano-contas-input"
            />
          </div>

          <div className="form-row">
            <select className="plano-contas-input">
              <option value="">Tipo</option>
              <option value="receita">Receita</option>
              <option value="despesa">Despesa</option>
              <option value="patrimonio">Patrimônio</option>
            </select>
          </div>

          <div className="form-row">
            <select className="plano-contas-input">
              <option value="">Conta Pai</option>
              <option value="1">Receitas</option>
              <option value="2">Despesas</option>
            </select>
          </div>

          <div className="form-row">
            <textarea
              placeholder="Descrição"
              rows="4"
              className="plano-contas-input"
            ></textarea>
          </div>

          <div className="form-row">
            <button type="submit" className="plano-contas-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanoContas;
