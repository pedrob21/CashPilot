import React from "react";
import BigCard from "../components/BigCard";
import MiniCard from "../components/MiniCard";
import "./Reports.css"; // Não esqueça de importar o CSS

function Reports() {
  return (
    // 1. Adicione esta classe
    <div className="reports-page"> 
      <h1>Reports</h1>
      <p>Amazing reports</p>

      {/* 2. Os BigCards ficarão aqui (um em cima do outro) */}
      <BigCard />
      <BigCard />

      {/* 3. Os MiniCards ficarão aqui (lado a lado) */}
      <div className="minis">
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
    </div>
  );
}

export default Reports;