import React from 'react';
import './ContasBancarias.css';

const ContasBancarias = () => {
  return (
    <div className="contas-bancarias-container">
      <h1 className="contas-bancarias-title">Cadastro de Contas Bancárias</h1>

      <div className="contas-bancarias-card">
        <h2 className="contas-bancarias-subtitle">Nova Conta Bancária</h2>

        <form className="contas-bancarias-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Nome do Banco"
              className="contas-bancarias-input"
            />
          </div>

          <div className="form-row">
            <select className="contas-bancarias-input">
              <option value="">Tipo de Conta</option>
              <option value="corrente">Conta Corrente</option>
              <option value="poupanca">Conta Poupança</option>
              <option value="investimento">Conta Investimento</option>
            </select>
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Agência"
              className="contas-bancarias-input"
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Número da Conta"
              className="contas-bancarias-input"
            />
          </div>

          <div className="form-row">
            <textarea
              placeholder="Observações"
              rows="4"
              className="contas-bancarias-input"
            ></textarea>
          </div>

          <div className="form-row">
            <button type="submit" className="contas-bancarias-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContasBancarias;
