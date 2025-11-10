import React from "react";
import ProgressBar from "./ProgressBar";
// ATENÇÃO: O nome do arquivo aqui está "ProgessCard.css" (um 's' só)
// Verifique se o nome do seu arquivo CSS está igual.
import "./ProgessCard.css"; 

function ProgressCard(){
    return(
        // Correção 1: classe "progress-card" (minúscula)
        <div className="progress-card"> 
            
            {/* Correção 2: Adicionada a classe no H2 */}
            <h2 className="progress-card-title">Title</h2>
            
            <ProgressBar label="Progresso" value={65} />
            
            {/* Correção 3: Adicionada a div "pai" que faltava */}
            <div className="progress-card-stats">
                <div className="stat-item">
                    <label>Atual</label>
                    <p>Valor</p>
                </div>
                <div className="stat-item align-right">
                    <label>Meta</label>
                    <p>Valor</p>
                </div>
            </div>
            
        </div>
    );
}

export default ProgressCard;