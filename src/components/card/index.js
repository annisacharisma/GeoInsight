// src/components/card/index.js
import React from "react";
import "./index.css";

export default function Card({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <figure>
                <img src={data.flag} alt={`Flag of ${data.name}`} />
            </figure>
            <div className="card-info">
                <h3>{data.name}</h3>
                <p>{data.region}</p>
            </div>
        </div>
    );
}