import React from 'react';
import { getEducationData } from '../data/education';

const Education = ({ currentLang }) => {
  const data = getEducationData();
  const content = data[currentLang];

  return (
    <div className="card">
      <h2>
        <div className="section-icon">🎓</div>
        <span>{content.title}</span>
      </h2>
      {content.items.map((item, idx) => (
        <div key={idx} className="timeline-item">
          <div className="timeline-date">{item.date}</div>
          <div className="timeline-title">{item.school}</div>
          <div className="timeline-company">{item.department}</div>
          {item.gpa && <div className="timeline-description">{item.gpa}</div>}
        </div>
      ))}
    </div>
  );
};

export default Education;
