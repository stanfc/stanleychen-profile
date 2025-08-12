import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import LanguageToggle from './components/LanguageToggle';
import StarsBackground from './components/StarsBackground';
import Header from './components/Header';
import Pet from './components/Pet';
import Profile from './components/Profile';
import Transcript from './components/Transcript';
// import Navigation from './components/Navigation'; // Removed old Navigation
import Drawer from './components/Drawer'; // New Drawer component
import HamburgerButton from './components/HamburgerButton'; // New HamburgerButton component

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setCurrentLang(savedLang);
    document.title = currentLang === 'zh' ? '陳璿修 - 個人履歷' : 'Stanley Chen - Resume';
  }, [currentLang]);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('lang', lang);
    document.title = lang === 'zh' ? '陳璿修 - 個人履歷' : 'Stanley Chen - Resume';
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router basename="/stanleychen-profile">
      <div className="App">
        <StarsBackground />
        <Pet currentLang={currentLang} />
        <LanguageToggle 
          currentLang={currentLang} 
          onLanguageChange={handleLanguageChange} 
        />
        
        <HamburgerButton isOpen={drawerOpen} onClick={toggleDrawer} /> {/* Hamburger button */}
        <Drawer isOpen={drawerOpen} onClose={toggleDrawer} currentLang={currentLang} /> {/* Drawer component */}

        <div className="container">
          <Header currentLang={currentLang} />
          {/* <Navigation currentLang={currentLang} /> */}
          
          <Routes>
            <Route path="/" element={<Profile currentLang={currentLang} />} />
            <Route path="/transcript" element={<Transcript currentLang={currentLang} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
