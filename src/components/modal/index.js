// src/components/modal/index.js
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Modal({ isShow, data, onCancel }) {
    if (!isShow || !data) return null;

    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onCancel}>✕</button>
                <div className="modal-content-wrapper">
                    <img src={data.flags.svg} alt={`Flag of ${data.name.common}`} className="modal-image" />
                    <div className="modal-details">
                        <h2>{data.name.common}</h2>
                        <p><strong>Region:</strong> {data.region}</p>
                        <p><strong>Subregion:</strong> {data.subregion}</p>
                        <p><strong>Population:</strong> {data.population}</p>
                        <p><strong>Language:</strong> {Object.values(data.languages || {}).join(", ")}</p>
                        <Link to={`/country/${data.name.common}`}>
                            <button className="modal-see-more">See More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
