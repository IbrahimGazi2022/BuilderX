import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/page/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
