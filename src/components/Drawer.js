import React from 'react';
import { NavLink } from 'react-router-dom';

const Drawer = ({ isOpen, onClose, currentLang }) => {
  const content = {
    zh: {
      title: "陳璿修",
      subtitle: "個人作品集",
      about: "關於我",
      transcript: "成績單",
      portfolio: "作品集",
      contact: "聯絡方式",
    },
    en: {
      title: "Stanley Chen",
      subtitle: "Personal Portfolio",
      about: "About Me",
      transcript: "Transcript",
      portfolio: "Portfolio",
      contact: "Contact",
    },
  };

  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <nav className={`drawer ${isOpen ? 'active' : ''}`} id="drawer">
        <div className="drawer-header">
          <div className="drawer-title">{content[currentLang].title}</div>
          <div className="drawer-subtitle">{content[currentLang].subtitle}</div>
        </div>
        
        <ul className="drawer-nav">
          <li className="drawer-nav-item">
            <NavLink to="/" className={({ isActive }) => "drawer-nav-link" + (isActive ? " active" : "")} onClick={onClose} end>
              <span className="drawer-nav-icon"></span>
              {content[currentLang].about}
            </NavLink>
          </li>
          <li className="drawer-nav-item">
            <NavLink to="/transcript" className={({ isActive }) => "drawer-nav-link" + (isActive ? " active" : "")} onClick={onClose}>
              <span className="drawer-nav-icon"></span>
              {content[currentLang].transcript}
            </NavLink>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </>
  );
};

export default Drawer;