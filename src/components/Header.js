import React from 'react';
import profileImage from '../assets/profile_image.jpg';

const Header = ({ currentLang }) => {
  const content = {
    zh: {
      title: "後端工程師",
      location: "臺北市，臺灣"
    },
    en: {
      title: "Backend Engineer", 
      location: "Taipei, Taiwan"
    }
  };

  return (
    <header className="header">
      <img 
        src={profileImage}
        alt="Profile" 
        className="profile-img"
        loading="eager"
        decoding="async"
        onError={(e) => {
          console.error('Image failed to load:', e.target.src);
        }}
        onLoad={() => {
          console.log('Image loaded successfully');
        }}
      />
      <h1 className="name">陳璿修</h1>
      <p className="title">{content[currentLang].title}</p>
      <div className="contact-info">
        <div className="contact-item">
          <span>📧</span>
          <span>bestshaw5@gmail.com</span>
        </div>
        <div className="contact-item">
          <span>📱</span>
          <span>+886 910-353-302</span>
        </div>
        <div className="contact-item">
          <span>📍</span>
          <span>{content[currentLang].location}</span>
        </div>
        <div className="contact-item">
          <span>🔗</span>
          <span>github.com/stanfc</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 