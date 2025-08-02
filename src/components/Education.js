import React from 'react';

const Education = ({ currentLang }) => {
  const content = {
    zh: {
      title: "學歷",
      scienceClass: "國立竹科實中",
      nehs: "科學班",
      csieNytu: "國立陽明交通大學",
      nycu: "資訊工程學系",
      csieNtu: "國立臺灣大學",
      ntu: "資訊工程學系",
      gpaNctu: "GPA: 4.3 / 4.3",
      gpaNtu: "GPA: 4.26 / 4.3"
    },
    en: {
      title: "Education",
      scienceClass: "Science Class",
      nehs: "National Experimental High School",
      csieNytu: "Department of Computer Science and Information Engineering",
      nycu: "National Yang Ming Chiao Tung University",
      csieNtu: "Department of Computer Science and Information Engineering",
      ntu: "National Taiwan University",
      gpaNctu: "GPA: 4.3 / 4.3",
      gpaNtu: "GPA: 4.26 / 4.3"
    }
  };

  return (
    <div className="card">
      <h2>
        <div className="section-icon">🎓</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <div className="timeline-item">
        <div className="timeline-date">2019-2022</div>
        <div className="timeline-title">{content[currentLang].scienceClass}</div>
        <div className="timeline-company">{content[currentLang].nehs}</div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2022-2023</div>
        <div className="timeline-title">{content[currentLang].csieNytu}</div>
        <div className="timeline-company">{content[currentLang].nycu}</div>
        <div className="timeline-description">{content[currentLang].gpaNctu}</div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2023-2026</div>
        <div className="timeline-title">{content[currentLang].csieNtu}</div>
        <div className="timeline-company">{content[currentLang].ntu}</div>
        <div className="timeline-description">{content[currentLang].gpaNtu}</div>
      </div>
    </div>
  );
};

export default Education; 