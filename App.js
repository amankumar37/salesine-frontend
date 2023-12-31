import './App.css';
import React, { useState } from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"

function App() {
       

  return (
    <div className="App">
          <BrowserRouter>
              <Routes>
              <Route path="/login"  element={<Login />} /> 
              <Route path="/register"  element={<Register />} /> 
              <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
