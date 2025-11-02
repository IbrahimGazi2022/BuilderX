import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login, Register, ProtectedRoute, PublicRoute } from "./components";
import Builder from "./pages/Builder";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* HOME ROUTE */}
        <Route path="/" element={<Home />} />

        {/* PUBLICE ROUTES */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

        {/* PROTECTED ROUTES */}
        <Route path="/dashboard" element={<ProtectedRoute><h1>Dashboard</h1></ProtectedRoute>} />
        <Route path="/builder" element={<ProtectedRoute><Builder /></ProtectedRoute>} />

        {/* FALLBACK ROUTES */}
        <Route path="*" element={<Navigate to="/builder" />} />

      </Routes>
    </Router>
  );
};

export default App;
