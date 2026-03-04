import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import EventDetailsPage from './pages/EventDetailsPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="app">
          {/* 8-Bit Starfield Background */}
          <div className="starfield">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/:eventId" element={<EventDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
