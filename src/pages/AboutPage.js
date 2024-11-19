// src/pages/AboutPage.js
import React from "react";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1>About GeoInsight</h1>
                <p>
                    <strong>GeoInsight</strong> is a platform designed to help users explore and learn about countries around the world. 
                    It provides insights geography, making it perfect for travelers, students, and knowledge seekers.
                </p>
                <ul>
                    <li>Discover cultural and geographic facts about countries.</li>
                    <li>Access curated data for education or travel planning.</li>
                    <li>Learn and explore the diversity of our planet.</li>
                </ul>

                <hr />

                <h2>About the Developer</h2>
                <div className="developer-profile">
                    <img
                        src={require("../assets/Profile.JPG")}
                        alt="Developer Profile"
                        className="developer-photo"
                    />
                    <div className="developer-info">
                        <p>
                            Hi, my name is <strong>Annisa Charisma Wijayanti</strong>. I am the creator of GeoInsight and a passionate developer 
                            who loves combining technology with global knowledge to build meaningful applications. I am currently a fifth semester student majoring in Computer Engineering at Diponegoro University.
                        </p>
                        <p>
                            Connect with me:
                        </p>
                        <ul>
                            <li>Email: <a href="mailto:annisacharisma5@gmail.com">annisacharisma5@gmail.com</a></li>
                            <li>GitHub: <a href="https://github.com/annisacharisma" target="_blank" rel="noopener noreferrer">github.com/annisacharisma</a></li>
                            <li>LinkedIn: <a href="https://linkedin.com/in/annisa-charisma-wijayanti-394386265" target="_blank" rel="noopener noreferrer">linkedin.com/in/annisacharisma</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
