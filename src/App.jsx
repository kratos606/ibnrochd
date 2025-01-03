import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'))
const GaleriePage = lazy(() => import('./pages/GaleriePage/GaleriePage'))
const SpecialitesPage = lazy(() => import('./pages/SpecialitesPage/SpecialitesPage'))
const AproposPage = lazy(() => import('./pages/AproposPage/AproposPage'))
const MobileHomePage = React.lazy(() => import('./pages/HomePage/mobile/HomePage'));
const MobileAproposPage = React.lazy(() => import('./pages/AproposPage/mobile/AproposPage'));
const MobileSpecialitesPage = React.lazy(() => import('./pages/SpecialitesPage/mobile/SpecialitesPage'));
const MobileGaleriePage = React.lazy(() => import('./pages/GaleriePage/mobile/GaleriePage'));
const MobileContactPage = React.lazy(() => import('./pages/ContactPage/mobile/ContactPage'));

// ScrollToTop component to handle scrolling on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Check the window width and update the isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1164);
    };

    // Set the initial state
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <LanguageProvider>
        <Suspense fallback={<div></div>}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={isMobile ? <MobileHomePage /> : <HomePage />} />
            <Route path="/contact" element={isMobile ? <MobileContactPage /> : <ContactPage />} />
            <Route path="/galerie" element={isMobile ? <MobileGaleriePage /> : <GaleriePage />} />
            <Route path="/specialites" element={isMobile ? <MobileSpecialitesPage /> : <SpecialitesPage />} />
            <Route path="/apropos" element={isMobile ? <MobileAproposPage /> : <AproposPage />} />
          </Routes>
        </Suspense>
      </LanguageProvider>
    </Router>
  )
}

export default App