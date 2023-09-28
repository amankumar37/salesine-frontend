import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './Navbar'
import FrontPage from './FrontPage';
import Dashboard from './dashboard';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<FrontPage />} />
      <Route path = "/dashboard" element = {<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
