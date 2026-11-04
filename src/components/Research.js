import React from 'react';
import { getResearchData } from '../data/research';
import ExpandableDetails from './ExpandableDetails';

const Research = ({ currentLang }) => {
  const data = getResearchData();
  const content = data[currentLang];
  const publications = content.publications || [];
  const items = content.items || [];

  return (
    <div className="card">
      <h2>
        <div className="section-icon">🔬</div>
        <span>{content.title}</span>
      </h2>

      {publications.length > 0 && (
        <>
          <h3 className="research-subtitle">{content.publicationsTitle}</h3>
          {publications.map((pub, idx) => (
            <div key={idx} className="timeline-item publication-item">
              <div className="timeline-date">{pub.venue}</div>
              <div className="publication-title">
                {pub.url ? (
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                ) : (
                  pub.title
                )}
              </div>
              <div
                className="publication-authors"
                dangerouslySetInnerHTML={{ __html: pub.authors }}
              />
              {pub.note && <div className="publication-note">{pub.note}</div>}
            </div>
          ))}
        </>
      )}

      {items.length > 0 && (
        <>
          <h3 className="research-subtitle">{content.projectsTitle}</h3>
          {items.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-title">{item.title}</div>
              {item.role && <div className="timeline-company">{item.role}</div>}
              <div className="timeline-description">
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
                <ExpandableDetails markdown={item.tooltip} currentLang={currentLang} />
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
        </>
      )}
    </div>
  );
};

export default Research;
