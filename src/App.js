import React from 'react';
import './App.css';
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Calendar from './pages/Calendar';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery/" element={<Gallery />} />
        <Route exact path="/calendar/" element={<Calendar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>

  );
}

export default App;
