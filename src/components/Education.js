import React from 'react';

const Education = ({ currentLang }) => {
  const content = {
    zh: {
      title: "學歷",
      scienceClass: "科學班",
      nehs: "國立新竹科學園區實驗高級中等學校",
      csieNytu: "資訊工程學系",
      nycu: "國立陽明交通大學",
      csieNtu: "資訊工程學系",
      ntu: "國立臺灣大學",
      gpaNctu: "GPA: 4.3 / 4.3",
      gpaNtu: "GPA: 4.26 / 4.3"
    },
    en: {
      title: "Education",
      scienceClass: "Science Class",
      nehs: "National Experimental High School",
      csieNycu: "Department of Computer Science",
      nycu: "National Yang Ming Chiao Tung University",
      csieNtu: "Department of Computer Science and Information Engineering",
      ntu: "National Taiwan University",
      gpaNycu: "GPA: 4.3 / 4.3",
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
        <div className="timeline-title">{content[currentLang].nehs}</div>
        <div className="timeline-company">{content[currentLang].scienceClass}</div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2022-2023</div>
        <div className="timeline-title">{content[currentLang].nycu}</div>
        <div className="timeline-company">{content[currentLang].csieNycu}</div>
        <div className="timeline-description">{content[currentLang].gpaNycu}</div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2023-2026</div>
        <div className="timeline-title">{content[currentLang].ntu}</div>
        <div className="timeline-company">{content[currentLang].csieNtu}</div>
        <div className="timeline-description">{content[currentLang].gpaNtu}</div>
      </div>
    </div>
  );
};

export default Education; 