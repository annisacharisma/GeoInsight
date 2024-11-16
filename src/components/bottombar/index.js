import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineCompass, AiOutlineUser, AiOutlineGlobal } from "react-icons/ai";
import "./index.css";

export default function BottomBar() {
    const location = useLocation();

    return (
        <div className="bottom-bar">
            <Link to="/" className={`bottom-bar-item ${location.pathname === "/" ? "active" : ""}`}>
                <AiOutlineHome size={24} />
                <span>Home</span>
            </Link>
            <Link to="/continents" className={`bottom-bar-item ${location.pathname === "/continents" ? "active" : ""}`}>
                <AiOutlineCompass size={24} />
                <span>Continents</span>
            </Link>
            <Link to="/country/Indonesia" className={`bottom-bar-item ${location.pathname.startsWith("/country/") ? "active" : ""}`}>
                <AiOutlineGlobal size={24} />
                <span>Country</span>
            </Link>
            <Link to="/profile" className={`bottom-bar-item ${location.pathname === "/profile" ? "active" : ""}`}>
                <AiOutlineUser size={24} />
                <span>Profile</span>
            </Link>
        </div>
    );
}
