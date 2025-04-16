import React from 'react';
import './Receita.css';

const Receita = () => {
  return (
    <div className="receita-container">
      <h1 className="receita-title">Cadastro de Receita</h1>

      <div className="receita-card">
        <h2 className="receita-subtitle">Nova Receita</h2>

        <form className="receita-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Descrição"
              className="receita-input"
            />
          </div>

          <div className="form-row">
            <input
              type="number"
              placeholder="Valor"
              className="receita-input"
            />
          </div>

          <div className="form-row">
            <input
              type="date"
              className="receita-input"
            />
          </div>

          <div className="form-row">
            <select className="receita-input">
              <option value="">Categoria</option>
              <option value="salario">Salário</option>
              <option value="investimentos">Investimentos</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div className="form-row">
            <textarea
              placeholder="Observações"
              rows="4"
              className="receita-input"
            ></textarea>
          </div>

          <div className="form-row">
            <button type="submit" className="receita-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Receita;
