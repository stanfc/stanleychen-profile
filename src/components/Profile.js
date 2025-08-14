import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education';
import WorkExperience from './WorkExperience';
import TechnicalSkills from './TechnicalSkills';
import Experience from './Experience';

const Profile = ({ currentLang }) => {
  return (
    <div className="main-content">
      <AboutMe currentLang={currentLang} />
      <TechnicalSkills currentLang={currentLang} />
      <Education currentLang={currentLang} />
      <WorkExperience currentLang={currentLang} />
      <Experience currentLang={currentLang} />
    </div>
  );
};

export default Profile;
