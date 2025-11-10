import React from 'react';
import './ProgressBar.css'; // Vamos criar este arquivo

// 1. Define as 'props' que o componente aceita
interface ProgressBarProps {
  label: string;
  value: number; // O valor da porcentagem (ex: 65)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  
  // Garante que o valor esteja sempre entre 0 e 100
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className="progress-bar-component">
      
      {/* 1. O cabeçalho (Label e Valor) */}
      <div className="progress-header">
        <span className="progress-label">{label}</span>
        <span className="progress-value">{clampedValue}%</span>
      </div>

      {/* 2. A barra */}
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          // A mágica acontece aqui:
          // A 'width' é definida dinamicamente com base na 'prop'
          style={{ width: `${clampedValue}%` }}
        >
        </div>
      </div>

    </div>
  );
};

export default ProgressBar;