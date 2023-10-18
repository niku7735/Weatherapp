import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

function WeatherApp() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<WeatherForm/>} />
          <Route path="/weather/:city" element={<WeatherDisplay/>} />
        </Routes>
      </Router>
    );
  }
  
  export default WeatherApp;