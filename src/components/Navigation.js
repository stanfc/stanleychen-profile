import React from 'react';
import { NavLink } from 'react-router-dom'; // Changed from Link to NavLink
import '../styles/navigation.css';

const Navigation = ({ currentLang }) => {
  return (
    <nav className="navigation">
      <NavLink to="/" end>{currentLang === 'zh' ? '個人檔案' : 'Profile'}</NavLink>
      <NavLink to="/transcript">{currentLang === 'zh' ? '成績單' : 'Transcript'}</NavLink>
    </nav>
  );
};

export default Navigation;
