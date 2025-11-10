import React from "react";
import ListCard from "../components/ListCard";
import "./Transactions.css";

function Transactions(){
    return(
        <div className="transactions-page">
            <h1>Transactions</h1>
            <p>Amazing Transactions</p>
            <div className="header-actions">
            <button className="btn btn-filter">
                <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M6.66667 12.6667H9.33333V11.3333H6.66667V12.6667ZM4 8.66667H12V7.33333H4V8.66667ZM2 4.66667H14V3.33333H2V4.66667Z"
                    fill="#374151"
                />
                </svg>
                Filtrar
            </button>
            <button className="btn btn-add">
                <span>+</span>
                Adicionar Transação
            </button>
            </div>
            <div className="mini">
                <ListCard />
            </div>
        </div>
    )
}

export default Transactions