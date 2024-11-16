// src/pages/CountryDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CountryDetailPage.css';

const CountryDetailPage = () => {
    const { countryName } = useParams();
    const [countryData, setCountryData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountryData = (name) => {
            fetch(`https://restcountries.com/v3.1/name/${name}`)
                .then(response => response.json())
                .then(data => setCountryData(data[0]))
                .catch(error => console.error("Error fetching country data:", error));
        };

        if (!countryName) {
            navigate('/country/Indonesia', { replace: true });
        } else {
            fetchCountryData(countryName);
        }
    }, [countryName, navigate]);

    const handleSearchEnter = (e) => {
        if (e.key === 'Enter' && searchTerm) {
            navigate(`/country/${searchTerm}`);
        }
    };

    if (!countryData) return <p>Loading...</p>;

    return (
        <div className="country-detail-container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search country by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearchEnter} // Trigger search on Enter key
                />
            </div>

            <div className="country-card">
                <h1>{countryData.name.common}</h1>
                <img
                    src={countryData.flags.svg}
                    alt={`${countryData.name.common} flag`}
                    className="country-flag"
                />
                <div className="country-details">
                    <p><strong>Region:</strong> {countryData.region}</p>
                    <p><strong>Subregion:</strong> {countryData.subregion}</p>
                    <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
                    <p><strong>Language:</strong> {Object.values(countryData.languages).join(', ')}</p>
                    <p><strong>Capital:</strong> {countryData.capital}</p>
                    <p><strong>Area:</strong> {countryData.area.toLocaleString()} km²</p>
                    <p><strong>Currency:</strong> {Object.values(countryData.currencies).map(currency => currency.name).join(', ')}</p>
                    <p><strong>Timezone:</strong> {countryData.timezones.join(', ')}</p>
                    <p><strong>Calling Code:</strong> {countryData.idd.root}{countryData.idd.suffixes[0]}</p>
                    <p><strong>Border Countries:</strong> {countryData.borders ? countryData.borders.join(', ') : 'None'}</p>
                    <p><strong>Top-Level Domain:</strong> {countryData.tld.join(', ')}</p>
                </div>
                <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
};

export default CountryDetailPage;
