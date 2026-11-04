import React from 'react';
import profileImage from '../assets/profile_image.jpg';

const Header = ({ currentLang }) => {
  const content = {
    zh: {
      name: "陳璿修",
      title: "台大資工碩士生 | 電腦視覺研究者 | 生成式 AI 工程師",
      location: "臺北市，臺灣"
    },
    en: {
      name: "陳璿修 Shuan-Shaw Chen",
      title: "NTU CS M.S. Student | Computer Vision Researcher | Generative AI Engineer",
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
      <h1 className="name">{content[currentLang].name}</h1>
      <p className="title">{content[currentLang].title}</p>
      <div className="contact-info">
        <div className="contact-item">
          <span>📧</span>
          <a 
            href="mailto:bestshaw5@gmail.com" 
            className="email-link"
          >
            bestshaw5@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <span>📱</span>
          <a 
            href="tel:+886910353302" 
            className="phone-link"
          >
            +886 910-353-302
          </a>
        </div>
        <div className="contact-item">
          <span>📍</span>
          <span>{content[currentLang].location}</span>
        </div>
        <div className="contact-item">
          <span>🔗</span>
          <a 
            href="https://github.com/stanfc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            github.com/stanfc
          </a>
        </div>
        <div className="contact-item">
          <span>💼</span>
          <a 
            href="https://www.linkedin.com/in/shuanshaw-chen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            linkedin.com/in/shuanshaw-chen
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 