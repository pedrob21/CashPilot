import React from "react";
import MiniCard from "../components/MiniCard";
import CardDash from "../components/CardDash";
import "./Dashboard.css";

function Dashboard(){
    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Amazing dashboard</p>
            <div className="mini">
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </div>
            <div className="regular">
                <CardDash />
                <CardDash />
            </div>
        </div>
    )
}

export default Dashboard