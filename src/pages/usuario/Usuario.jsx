import React from 'react';
import './Usuario.css';

const Usuario = () => {
  return (
    <div className="usuario-container">
      <h1 className="usuario-title">Perfil do Usuário</h1>
      
      <div className="usuario-card">
        <h2 className="usuario-text">Informações Pessoais</h2>
        <p className="usuario-text">
          Aqui você pode gerenciar suas informações pessoais e preferências do sistema.
        </p>
      </div>
    </div>
  );
};

export default Usuario;
