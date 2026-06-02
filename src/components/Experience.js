import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { getExperienceData } from '../data/experience';

const Experience = ({ currentLang }) => {
  const gridRef = useRef(null);
  const data = getExperienceData();
  const content = data[currentLang];

  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.timeline-item');
      const leftColumnCount = Math.ceil(items.length / 2);
      items.forEach((item, index) => {
        item.style.gridRow = index < leftColumnCount ? index + 1 : index - leftColumnCount + 1;
        item.style.gridColumn = index < leftColumnCount ? 1 : 2;
      });
    }
  }, [currentLang, data]);

  return (
    <div className="card full-width">
      <h2>
        <div className="section-icon">🏆</div>
        <span>{content.title}</span>
      </h2>
      <div className="experience-grid" ref={gridRef}>
        {content.items.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-title tooltip-container">
              {item.title} 💬
              <div className="tooltip">
                <ReactMarkdown>{item.tooltip}</ReactMarkdown>
              </div>
            </div>
            <div className="timeline-description">
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
              {item.links && item.links.length > 0 && (
                <div className="project-link">
                  {item.links.map((link, li) => (
                    <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="link-button">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 