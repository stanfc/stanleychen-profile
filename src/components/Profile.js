import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education';
import Research from './Research';
import WorkExperience from './WorkExperience';
import TechnicalSkills from './TechnicalSkills';
import Experience from './Experience';

const Profile = ({ currentLang }) => {
  return (
    <div className="main-content">
      <AboutMe currentLang={currentLang} />
      <Education currentLang={currentLang} />
      <Research currentLang={currentLang} />
      <WorkExperience currentLang={currentLang} />
      <TechnicalSkills currentLang={currentLang} />
      <Experience currentLang={currentLang} />
    </div>
  );
};

export default Profile;
