// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ContinentsPage from "./pages/ContinentsPage";
import CountryDetailPage from './pages/CountryDetailPage';
import BottomBar from "./components/bottombar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Halaman Login tanpa BottomBar */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Halaman dengan BottomBar */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LandingPage />
                <BottomBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
                <BottomBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutPage />
                <BottomBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/continents"
            element={
              <ProtectedRoute>
                <ContinentsPage />
                <BottomBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/country/:countryName"
            element={
              <ProtectedRoute>
                <CountryDetailPage />
                <BottomBar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
