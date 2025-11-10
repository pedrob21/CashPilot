import React from 'react';
import './Settings.css'; // Importa o MESMO CSS compartilhado

function Currency() {
  return (
    // 1. Card principal
    <div className="prefs-card">
      
      {/* 2. Cabeçalho */}
      <header className="settings-header">
        <div className="icon-wrapper">
          {/* Ícone de Globo (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>
        <div className="title-wrapper">
          <h2>Preferências</h2>
          <p>Personalize sua experiência</p>
        </div>
      </header>

      {/* 3. Conteúdo (Formulário) */}
      <main className="settings-content">
        <div className="info-item">
          <label>Idioma</label>
          <select>
            <option>Português</option>
            <option>Inglês</option>
          </select>
        </div>
        <div className="info-item">
          <label>Moeda</label>
          <select>
            <option>Real (R$)</option>
            <option>Dólar ($)</option>
            <option>Euro (€)</option>
          </select>
        </div>
      </main>
    </div>
  );
}

export default Currency;