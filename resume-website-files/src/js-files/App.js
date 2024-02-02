import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from '../other-files/logo.svg';
import moonFavicon from '../other-files/transparent_moon.png';
import '../css-files/App.css';
import Home from './Home';
import PreLoader from './PreLoader';

function App() {

  setFavicon(moonFavicon);

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

function setFavicon(url) {
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = url;
  } else {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.href = url;
    document.head.appendChild(newLink);
  }
}


export default App;
