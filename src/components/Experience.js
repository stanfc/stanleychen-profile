import React, { useEffect, useRef } from 'react';

const Experience = ({ currentLang }) => {
  const gridRef = useRef(null);
  
  const content = {
    zh: {
      title: "經驗",
      vfx: "視覺特效",
      vfxContent: `- 實作照片對齊與 HDR 演算法<br>
                  - 實作特徵匹配與圖像融合演算法<br>
                  - 使用 Blender 製作影片<br>`,
      machineLearning: "機器學習",
      mlContent: `- 實作多種機器學習演算法<br>
                  - 參與 MLB 賽果預測專案 (kaggle 競賽)<br>`,
      gameProgramming: "遊戲程式設計",
      gpContent: `- 參與 CAGED 遊戲開發<br>
                  - 我在團體中的角色：品質保證<br>`,
      specialTopicResearch: "專題研究",
      strContent: `- 使用 Diffusion Model 的深度估計來消除高斯潑濺模型中的噪聲<br>`,
      sideQuest: "自主專題",
      sqContent: `- 使用機器學習分類 YouTube 評論的正負面情緒並轉化為詞雲<br>`,
      calendarWebApp: "行事曆分享與訂閱平台",
      cwaContent: `- 使用 React 開發行事曆分享與訂閱平台<br>
                  - 前端主要負責人<br>`,
      ragAgent: "RAG Agent",
      rcContent: `- LaTeX 助手<br>
                  - 讀取 latex tool book 的 pdf 來回答問題，並寫入 file<br>`,
      researchAgent: "Deep Research",
      raContent: `- 可以自行搜尋網路的 agent<br>
                  - 精準搜尋使用者需要的資訊<br>`,
      maiagentProductEnhance: "為公司產品 Maiagent 新增功能",
      maiagentContent: `- 文生圖及圖生圖支援<br>
                        - 自動化 Agent 回復品質評估與檢測流程<br>`,
    },
    en: {
      title: "EXPERIENCE",
      vfx: "VFX",
      vfxContent: `- Implement photo alignment and HDR algorithm<br>
                  - Implement feature matching and blending algorithm<br>
                  - Use blender to make video<br>`,
      machineLearning: "Machine Learning",
      mlContent: `- Implement multiple machine learning algorithm<br>
                  - Attend in a MLB result forcasting project (kaggle competition)<br>`,
      gameProgramming: "Game Programming",
      gpContent: `- Attend in CAGED game development<br>
                  - My role in the team: Quality Assurance<br>`,
      specialTopicResearch: "Special Topic Research",
      strContent: `- Using Depth Estimation to Improve Robustness of Gaussian Splatting Models<br>
                  `,
      sideQuest: "Side Quest",
      sqContent: `- Use Machine learning to classify positive/negative YouTube comment and turn them into word clouds.<br>`,
      calendarWebApp: "Calendar Sharing and Subscription Platform",
      cwaContent: `- Use React to develop a calendar sharing and subscription platform<br>
                  - Frontend main responsible engineer<br>`,
      ragAgent: "RAG Agent",
      rcContent: `- LaTeX Helper<br>
                  - Read latex tool book pdf to answer questions and write to file<br>`,
      researchAgent: "Deep Research",
      raContent: `- Can search the web by itself<br>
                  - Precisely search for the information the user needs<br>`,
      maiagentProductEnhance: "Enhance Maiagent Product",
      maiagentContent: `- Add text-to-image and image-to-image support<br>
                        - Automate the quality assessment and detection process of agent responses<br>`,

    }
  };

  // 動態分配項目到左右兩欄
  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.timeline-item');
      const totalItems = items.length;
      const leftColumnCount = Math.ceil(totalItems / 2);
      
      items.forEach((item, index) => {
        const column = index < leftColumnCount ? 1 : 2;
        const row = index < leftColumnCount ? index + 1 : index - leftColumnCount + 1;
        
        item.style.gridRow = row;
        item.style.gridColumn = column;
      });
    }
  }, [currentLang]);

  return (
    <div className="card full-width">
      <h2>
        <div className="section-icon">🏆</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <div className="experience-grid" ref={gridRef}>
        <div className="timeline-item">
          <div className="timeline-date">2024 Spring</div>
          <div className="timeline-title">{content[currentLang].vfx}</div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].vfxContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2024 Fall</div>
          <div className="timeline-title">{content[currentLang].machineLearning}</div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].mlContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2024 Fall</div>
          <div className="timeline-title">{content[currentLang].gameProgramming}</div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].gpContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2024</div>
          <div className="timeline-title">{content[currentLang].sideQuest}</div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].sqContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2024 - 2025</div>
          <div className="timeline-title">{content[currentLang].specialTopicResearch}</div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].strContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2025 Spring</div>
          <div className="timeline-title">{content[currentLang].ragAgent}</div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].rcContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2025 Spring</div>
          <div className="timeline-title">{content[currentLang].researchAgent}</div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].raContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2025 Spring</div>
          <div className="timeline-title">{content[currentLang].maiagentProductEnhance}</div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].maiagentContent }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience; 