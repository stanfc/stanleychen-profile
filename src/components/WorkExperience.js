import React from 'react';
import { getWorkExperienceData } from '../data/workExperience';

const WorkExperience = ({ currentLang }) => {
  const data = getWorkExperienceData();
  const content = data[currentLang];

  return (
    <div className="card">
      <h2>
        <div className="section-icon">💼</div>
        <span>{content.title}</span>
      </h2>
      {content.items.map((item, idx) => (
        <div key={idx} className="timeline-item">
          <div className="timeline-date">{item.date}</div>
          <div className="timeline-title">{item.position}</div>
          <div className="timeline-company">{item.company}</div>
          <div
            className="timeline-description"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
