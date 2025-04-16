import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Sistema de Gestão Financeira</h1>
      <p className="home-description">
        Gerencie suas finanças de forma eficiente e organizada. 
        Acompanhe seus gastos, receitas e mantenha suas contas em dia.
      </p>
      <div className="home-features">
        <div className="feature-card">
          <h2>Cadastros</h2>
          <p>Gerencie seus centros de custo, contas bancárias e plano de contas.</p>
        </div>
        <div className="feature-card">
          <h2>Lançamentos</h2>
          <p>Registre suas receitas e despesas de forma simples e rápida.</p>
        </div>
        <div className="feature-card">
          <h2>Relatórios</h2>
          <p>Visualize relatórios detalhados da sua situação financeira.</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 