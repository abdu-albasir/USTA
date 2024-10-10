import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Добавьте BrowserRouter
import Header from '../features/header/ui/Header';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import Footer from '../features/footer/ui/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Другие маршруты */}
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;

