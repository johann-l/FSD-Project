import './css-files/App.css'; //css
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //routing
import Home from './home/Home.js'; import Calc from './calc/calc.js'; //import Calendar from './calendar/calendar.js'; //pages
import React from 'react';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calc />} />
          
        </Routes>
      </Router>
  );
}