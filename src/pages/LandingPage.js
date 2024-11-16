// src/pages/LandingPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LandingPage.css";

import Card from "../components/card";
import Modal from "../components/modal";

export default function LandingPage() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");

    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/all`);
                setData(response.data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleClick = (item) => {
        setModalShow(true);
        setModalItem(item);
    };

    return (
        <main>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search country by name"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="card-container">
                {data && !isLoading ? (
                    data
                        .filter((country) =>
                            country.name.common.toLowerCase().includes(query.toLowerCase())
                        )
                        .map((country, index) => (
                            <Card
                                data={{
                                    name: country.name.common,
                                    flag: country.flags.svg,
                                    region: country.region,
                                }}
                                key={index}
                                onClick={() => handleClick(country)}
                            />
                        ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Modal
                data={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
            />
        </main>
    );
}
