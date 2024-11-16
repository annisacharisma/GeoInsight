// src/pages/ProfilePage.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!isAuthenticated) {
            navigate("/login");
        } else {
            setUser(storedUser);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
        navigate("/login");
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div className="profile-page">
            <div className="profile-card">
                <h2>User Profile</h2>
                <img
                    src={user.profile} // Gunakan URL dari data user
                    alt="Profile"
                    className="profile-image"
                />
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
