import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from '../other-files/logo.svg';
import '../css-files/App.css';
import Home from './Home';
import PreLoader from './PreLoader';

function App() {

  return (
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
