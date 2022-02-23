import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Calendario from './pages/Calendar';
import Error from './pages/Error';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery/" element={<Gallery />} />
        <Route exact path="/calendar/" element={<Calendario />} />
        <Route exact path="/login/" element={<Login onIsLoggedInChange={setIsLoggedIn} />} />
        <Route exact path="/profile/" element={<Profile />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>

  );
}

export default App;
