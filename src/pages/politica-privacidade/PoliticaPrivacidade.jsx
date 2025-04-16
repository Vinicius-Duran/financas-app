import React from 'react';
import './PoliticaPrivacidade.css';

const PoliticaPrivacidade = () => {
  return (
    <div className="politica-container">
      <h1 className="politica-title">Política de Privacidade</h1>
      
      <div className="politica-content">
        <section className="politica-section">
          <h2>1. Introdução</h2>
          <p>
            Esta Política de Privacidade descreve como suas informações pessoais são coletadas, 
            usadas e compartilhadas quando você visita ou faz uma compra em nosso site.
          </p>
        </section>

        <section className="politica-section">
          <h2>2. Informações que Coletamos</h2>
          <p>
            Quando você visita o site, coletamos automaticamente certas informações sobre seu dispositivo, 
            incluindo informações sobre seu navegador, endereço IP, fuso horário e alguns dos cookies 
            instalados em seu dispositivo.
          </p>
        </section>

        <section className="politica-section">
          <h2>3. Como Usamos Suas Informações</h2>
          <p>
            Utilizamos as informações que coletamos para:
          </p>
          <ul>
            <li>Fornecer e manter nossos serviços</li>
            <li>Notificá-lo sobre alterações em nossos serviços</li>
            <li>Permitir que você participe de recursos interativos de nossos serviços</li>
            <li>Fornecer suporte ao cliente</li>
            <li>Detectar, prevenir e resolver problemas técnicos</li>
          </ul>
        </section>

        <section className="politica-section">
          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta política.
          </p>
        </section>

        <section className="politica-section">
          <h2>5. Seus Direitos</h2>
          <p>
            Você tem o direito de acessar as informações pessoais que mantemos sobre você e de solicitar 
            que suas informações pessoais sejam corrigidas, atualizadas ou excluídas.
          </p>
        </section>

        <section className="politica-section">
          <h2>6. Alterações</h2>
          <p>
            Podemos atualizar esta política de privacidade periodicamente para refletir, por exemplo, 
            mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios.
          </p>
        </section>

        <section className="politica-section">
          <h2>7. Contato</h2>
          <p>
            Para mais informações sobre nossas práticas de privacidade, se você tiver dúvidas ou se 
            quiser fazer uma reclamação, entre em contato conosco por e-mail em contato@exemplo.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade; 