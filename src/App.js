//import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages';
import HC from './pages/hc';

function App() {
  return (
      <Router>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/hc' element={<HC />} />
      </Routes>
      </Router>
  );
  }

export default App;
