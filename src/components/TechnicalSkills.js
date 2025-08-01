import React from 'react';

const TechnicalSkills = ({ currentLang }) => {
  const content = {
    zh: {
      title: "技能專長",
      categories: {
        programming: "程式語言",
        frameworks: "框架工具",
        development: "開發領域",
        creative: "創意工具"
      }
    },
    en: {
      title: "Technical Skills",
      categories: {
        programming: "Programming Languages",
        frameworks: "Frameworks & Tools",
        development: "Development Areas",
        creative: "Creative Tools"
      }
    }
  };

  const skillsByCategory = {
    programming: ['C/C++', 'Python', 'Java', 'C#', 'JavaScript', 'HTML', 'SQL'],
    frameworks: ['React.js', 'Node.js', 'Django', 'Git', 'Docker'],
    development: ['Backend development', 'Frontend development', 'Database', 'ML', 'Gen AI', 'Computer vision'],
    creative: ['Unity', 'Blender', 'Rendering', 'VFX', 'Game programming']
  };

  return (
    <div className="card full-width">
      <h2>
        <div className="section-icon">🛠️</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <div className="skills-categories">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{content[currentLang].categories[category]}</h3>
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