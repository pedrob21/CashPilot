import React from "react";
import "./ListCard.css";

function ListCard(){
    return(
        <div className="transaction-card">
        <header className="card-header">
            <div className="header-title">
            <h2>Todas as transações</h2>
            </div>
        </header>

        <main className="transaction-list">
            <h3>Todas as Transações</h3>

            <table>
            <thead>
                <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th className="align-right">Valor</th>
                </tr>
            </thead>
            <tbody>
                {/* LINHA DE EXEMPLO 
                Aqui você carregará seus dados dinamicamente 
                */}
                <tr>
                <td>14/06/2024</td>
                <td>Salário</td>
                <td>
                    <span className="category-pill pill-receita">Receita</span>
                </td>
                <td className="value positive align-right">+R$ 5.800</td>
                </tr>
            </tbody>
            </table>
        </main>
        </div>
    );
}

export default ListCard;