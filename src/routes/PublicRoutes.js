import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Shows from '../views/Shows'
import Music from '../views/Music';
import Personnel from '../views/Personnel';

export default function PublicRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shows" element={<Shows />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/music" element={<Music />} />
      <Route exact path="/personnel" element={<Personnel />} />
    </Routes>
  );
}