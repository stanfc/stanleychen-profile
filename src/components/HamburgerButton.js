import React from 'react';

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button className={`hamburger ${isOpen ? 'active' : ''}`} id="hamburger" onClick={onClick}>
      <div className="hamburger-inner">
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </button>
  );
};

export default HamburgerButton;