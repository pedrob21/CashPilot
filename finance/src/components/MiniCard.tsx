import React from "react";
import "./MiniCard.css";

function MiniCard(){
    return(
        <div className="MiniCard">
            <h3>Title</h3>
            <svg>SVG</svg>
            <h2>Value</h2>
            <p>Info</p>
        </div>
    );
}

export default MiniCard;