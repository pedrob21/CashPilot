import React from 'react';
import './Settings.css'; // Importa o CSS compartilhado

function Infos() {
  return (
    // 1. Card principal
    <div className="info-card">
      
      {/* 2. Cabeçalho */}
      <header className="settings-header">
        <div className="icon-wrapper">
          {/* Ícone de Usuário (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="title-wrapper">
          <h2>Informações Pessoais</h2>
          <p>Seus dados de perfil</p>
        </div>
      </header>

      {/* 3. Conteúdo (Texto Estático) */}
      <main className="settings-content">
        <div className="info-item">
          <label>Nome</label>
          <p>João Silva</p>
        </div>
        <div className="info-item">
          <label>Email</label>
          <p>joao.silva@email.com</p>
        </div>
        <div className="info-item">
          <label>Membro desde</label>
          <p>Janeiro de 2024</p>
        </div>
      </main>
    </div>
  );
}

export default Infos;