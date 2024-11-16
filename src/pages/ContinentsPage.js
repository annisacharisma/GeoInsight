// src/pages/ContinentsPage.js
import React, { useState } from "react";
import axios from "axios";
import "./ContinentsPage.css";

export default function ContinentsPage() {
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [countries, setCountries] = useState([]);

    const continents = [
        { name: "Africa", image: require("../assets/Benua_Africa.jpg") },
        { name: "Americas", image: require("../assets/Benua_Americas.jpg") },
        { name: "Asia", image: require("../assets/Benua_Asia.png") },
        { name: "Europe", image: require("../assets/Benua_Europe.png") },
        { name: "Oceania", image: require("../assets/Benua_Oceania.png") },
    ];

    const fetchCountries = async (continent) => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/region/${continent}`);
            setCountries(response.data);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    const handleContinentClick = (continentName) => {
        setSelectedContinent(continentName);
        fetchCountries(continentName);
    };

    return (
        <div className="continents-page">
            <h1>Explore the Continents</h1>
            <div className="continent-list">
                {continents.map((continent) => (
                    <div
                        key={continent.name}
                        onClick={() => handleContinentClick(continent.name)}
                        className="continent-card"
                    >
                        <img src={continent.image} alt={continent.name} className="continent-image" />
                        <div className="continent-overlay">
                            <span>{continent.name}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedContinent && (
                <div className="country-list">
                    <h2>Countries in {selectedContinent}</h2>
                    <div className="country-grid">
                        {countries.map((country) => (
                            <div key={country.cca3} className="country-item">
                                <img src={country.flags.svg} alt={`${country.name.common} flag`} className="country-flag" />
                                <span>{country.name.common}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
