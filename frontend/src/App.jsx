import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/Home/HomePage.jsx';
import AboutPage from './pages/About/AboutPage.jsx';
import ServicesPage from './pages/Services/ServicesPage.jsx';
import PortfolioPage from './pages/Portfolio/PortfolioPage.jsx';
import ContactPage from './pages/Contact/ContactPage.jsx';
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="our-work" element={<PortfolioPage />} />
            <Route path="portfolio" element={<Navigate to="/our-work" replace />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
