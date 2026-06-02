import React from 'react';
import { getAboutMeData } from '../data/aboutMe';

const AboutMe = ({ currentLang }) => {
  const content = getAboutMeData();

  return (
    <div className="card full-width">
      <h2>
        <div className="section-icon">👨‍💻</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <p 
        className="about-text" 
        dangerouslySetInnerHTML={{ __html: content[currentLang].text }}
      />
    </div>
  );
};

export default AboutMe; 