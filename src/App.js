// import logo from './logo.svg';
import React from "react";
import './App.css';
import HomePage from "./pages/home";
// import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
