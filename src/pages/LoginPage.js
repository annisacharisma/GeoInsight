// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Ambil data pengguna dari localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Cari pengguna berdasarkan email dan password
        const currentUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if (currentUser) {
            // Simpan status autentikasi di localStorage
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("user", JSON.stringify(currentUser)); // Simpan data pengguna
            navigate("/");
        } else {
            alert("Invalid credentials");
        }
    };


    return (
        <div className="login-page">
            <div className="background-grid">
                {/* Example images for the background grid */}
                <img src="https://torch.id/cdn/shop/articles/Artikel_174_-_Preview.webp?v=1713644761&width=1100" alt="Background" />
                <img src="https://mmc.tirto.id/image/2022/10/11/antarafoto-malaysia_mengumumkan_pembubaran_parlemen_101022_rafi_5_ratio-16x9.jpg" alt="Background" />
                <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/03/14/kondisi-ekonomi-negara-indiajpg-20230314010121.jpg" alt="Background" />
                <img src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ges7cwbvjn8sykj95gycf2vm.jpg" alt="Background" />
                <img src="https://mmc.tirto.id/image/2022/01/11/istock-598959570_ratio-16x9.jpg" alt="Background" />
                <img src="https://pict.sindonews.net/dyn/850/pena/news/2022/06/13/45/796595/agama-warga-negara-korea-selatan-dan-persentasenya-kab.jpg" alt="Background" />
                <img src="https://mmc.tirto.id/image/2021/02/07/pagoda-myanmar-istock--2_ratio-16x9.jpg" alt="Background" />
                <img src="https://storage.googleapis.com/flip-prod-mktg-strapi/media-library/fakta_negara_thailand_5bf0834af1/fakta_negara_thailand_5bf0834af1.jpeg" alt="Background" />
                <img src="https://torch.id/cdn/shop/articles/Artikel_174_-_Preview.webp?v=1713644761&width=1100" alt="Background" />
                <img src="https://mmc.tirto.id/image/2022/10/11/antarafoto-malaysia_mengumumkan_pembubaran_parlemen_101022_rafi_5_ratio-16x9.jpg" alt="Background" />
                <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/03/14/kondisi-ekonomi-negara-indiajpg-20230314010121.jpg" alt="Background" />
                <img src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ges7cwbvjn8sykj95gycf2vm.jpg" alt="Background" />
                <img src="https://mmc.tirto.id/image/2022/01/11/istock-598959570_ratio-16x9.jpg" alt="Background" />
                <img src="https://pict.sindonews.net/dyn/850/pena/news/2022/06/13/45/796595/agama-warga-negara-korea-selatan-dan-persentasenya-kab.jpg" alt="Background" />
                <img src="https://mmc.tirto.id/image/2021/02/07/pagoda-myanmar-istock--2_ratio-16x9.jpg" alt="Background" />
                <img src="https://storage.googleapis.com/flip-prod-mktg-strapi/media-library/fakta_negara_thailand_5bf0834af1/fakta_negara_thailand_5bf0834af1.jpeg" alt="Background" />
                <img src="https://torch.id/cdn/shop/articles/Artikel_174_-_Preview.webp?v=1713644761&width=1100" alt="Background" />
                <img src="https://mmc.tirto.id/image/2022/10/11/antarafoto-malaysia_mengumumkan_pembubaran_parlemen_101022_rafi_5_ratio-16x9.jpg" alt="Background" />
                <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/03/14/kondisi-ekonomi-negara-indiajpg-20230314010121.jpg" alt="Background" />
                <img src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ges7cwbvjn8sykj95gycf2vm.jpg" alt="Background" />
                <img src="https://mmc.tirto.id/image/2022/01/11/istock-598959570_ratio-16x9.jpg" alt="Background" />
            </div>
            <div className="login-content">
                <img
                    src={require("../assets/Logo.png")}
                    alt="GeoInsight"
                    className="login-logo"
                />
                <h1>Welcome to GeoInsight</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>Log in</button>
                <button className="register-link" onClick={() => navigate("/register")}>
                    Don't have an account? Register here
                </button>
                <p className="terms-text">
                    By continuing, you agree to GeoInsight's Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
}
