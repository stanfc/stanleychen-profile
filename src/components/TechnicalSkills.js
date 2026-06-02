import React from 'react';
import { getSkillsData } from '../data/skills';

const TechnicalSkills = ({ currentLang }) => {
  const data = getSkillsData();
  const { labels, skillsByCategory } = data;
  const content = labels[currentLang];

  return (
    <div className="card full-width">
      <h2>
        <div className="section-icon">🛠️</div>
        <span>{content.title}</span>
      </h2>
      <div className="skills-categories">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{content.categories[category]}</h3>
            <div className="skills-row">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item-small">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
