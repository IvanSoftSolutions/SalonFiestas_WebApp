import React from 'react';
import './App.css';
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"

import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery/" element={<Gallery />} />

      {/* <Home />
      <Gallery /> */}
    </Routes>
  );
}

export default App;
