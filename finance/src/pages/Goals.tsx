import React from "react";
import ProgressCard from "../components/ProgressCard";
import "./Goals.css"; 

function Goals() {
  return (
    // 1. Contêiner de página padronizado
    <div className="goals-page"> 
      
      {/* 2. Cabeçalho da página (Título à esquerda, Botão à direita) */}
      <div className="page-header">
        <div className="page-header-title">
          <h1>Metas Financeiras</h1>
          <p>Acompanhe o progresso dos seus objetivos</p>
        </div>
        <button className="btn btn-add">
          <span>+</span>
          Nova Meta
        </button>
      </div>

      {/* 3. Grid 2x2 para os cards */}
      <div className="goals-grid">
        <ProgressCard />
        <ProgressCard />
        <ProgressCard />
        <ProgressCard />
      </div>
    </div>
  );
}

export default Goals;