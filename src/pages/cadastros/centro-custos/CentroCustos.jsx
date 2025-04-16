import React from 'react';
import './CentroCustos.css';

const CentroCustos = () => {
  return (
    <div className="centro-custos-container">
      <h1 className="centro-custos-title">Cadastro de Centro de Custos</h1>

      <div className="centro-custos-card">
        <h2 className="centro-custos-subtitle">Novo Centro de Custo</h2>

        <form className="centro-custos-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Nome do Centro de Custo"
              className="centro-custos-input"
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              placeholder="Código"
              className="centro-custos-input"
            />
          </div>
          <div className="form-row">
            <textarea
              placeholder="Descrição"
              rows="4"
              className="centro-custos-input"
            ></textarea>
          </div>
          <div className="form-row">
            <button type="submit" className="centro-custos-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CentroCustos;
