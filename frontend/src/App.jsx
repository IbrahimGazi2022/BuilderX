import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login, Register, ProtectedRoute, PublicRoute } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
        />

        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
        />
        {/* PROTECTED ROUTES */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <h1>Dashboard</h1>
          </ProtectedRoute>
        }
        />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>

    </Router>
  );
};

export default App;

