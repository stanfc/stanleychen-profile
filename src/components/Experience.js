import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

const Experience = ({ currentLang }) => {
  const gridRef = useRef(null);
  
  const content = {
    zh: {
      title: "經驗",
      vfx: "視覺特效",
      vfxContent: `- 實作 HDR 演算法<br>
                  - 實作圖像融合演算法<br>
                  - 使用 Blender 製作影片<br>`,
      vfxTooltip: `### **我在團隊中的貢獻：**

- **HDR演算法**：實作照片對齊及 Mitsuaga and Nayar's method 演算法
- **圖像融合**：實作圓柱投影與圖像配對與融合演算法  
- **Blender**：3d 動畫製作

### 我學到的事：

- **python 實作優化**：我學會如何讓 python 有效運用資源，尤其在多迴圈時，用多線程、迴圈優化等方式來提升速度`,
      machineLearning: "機器學習",
      mlContent: `- 實作多種機器學習演算法<br>
                  - 參與 MLB 賽果預測專案 (kaggle 競賽)<br>`,
      mlTooltip: `### **我在團隊中的貢獻：**

- **Kaggle 競賽**：嘗試 CATboost 模型以及 Random Forest 模型

### 我學到的事：

- **創意發想**：機器學習專案需要結合自己的創意和知識，往往會有意想不到的效果
- **興趣發覺**:我發現自己很享受需要結合創造力的工作`,
      gameProgramming: "遊戲程式設計",
      gpContent: `- 參與 CAGED 遊戲開發<br>`,
      gpTooltip: `### **我在團隊中的角色：**
- **品質保證**：專門將遊戲品質不夠好的地方修復
- **VFX**：製作遊戲特效、聲光效果及劇情動畫

### 我學到的事：

- **團隊合作**：首次在小團體中工作，學到如何有效分工以及正確的開發流程
- **git 使用**：學會如何使用 git 以及 github 在團體中進行版本控制`,
      specialTopicResearch: "專題研究",
      strContent: `- 使用 Diffusion Model 的深度估計來消除 gaussian splatting model 中的噪聲<br>`,
      strTooltip: `### **研究方法：**

- **初始值對於最終 splatting 的影響**：使用不同數量照片生成的初始值對相通照片及進行 train 並比較最終效果
- **移動差異過大的 gaussian**：以深度估計為參考，並運用 rendering 的方式找到錯誤的 gaussian 並移動到正確位置
- **流程設計**：在 tranning 之間插入新的移動步驟減少噪點`,
      sideQuest: "ML 自主專題",
      sqContent: `- 使用機器學習分類 YouTube 評論的正負面情緒並轉化為文字雲<br>`,
      sqTooltip: `### **自主專案特色：**

- **自行訓練**：可以使用自己的資料集跑 script 訓練模型 (適應不同語言)
- **簡易使用**：輸入 youtube 的 url 就可以生成正負面文字雲

### **我學到的事：**
- **獨立創作**：培養獨立學習新知及解決問題的能力`,
      calendarWebApp: "行事曆分享與訂閱平台",
      cwaContent: `- 使用 React 開發行事曆分享與訂閱平台<br>
                  - 前端主要負責人<br>`,
      cwaTooltip: `### **我的職責：**

- **前端開發**：使用 React 開發用戶界面
- **專案管理**：作為前端主要負責人，要有效分配工作
- **後端協作**：協助後端開發及 debug

### **我學到的事：**
- **React.js**：學會如何使用 React.js 開發前端
- **Node.js**：熟悉如何使用 Node.js 開發後端
- **前後端串接**：學會串接前後端的方法`,
      ragAgent: "RAG Agent 自主專案",
      rcContent: `- LaTeX 助手<br>
                  - 讀取 latex tool book 的 pdf 來回答問題，並寫入 file<br>`,
      ragTooltip: `### **專案特色：**

- **RAG 能力**：放入兩份 LaTeX 使用手冊，可以找到正確的資訊並用以回答問題
- **LLM 串接**：給予正確提示詞使其正確回答問題
- **工具串接**：讓 Agent 可以將回應的語法寫入 .tex 檔`,
      researchAgent: "Deep Research 自主專案",
      raContent: `- 可以自行搜尋網路的 agent<br>
                  - 精準搜尋使用者需要的資訊<br>`,
      researchTooltip: `### **專案特色：**

- **自主搜尋**：可以自行搜尋網路的智能代理
- **精準檢索**：精準搜尋使用者需要的資訊，不會因模型老舊對於新知識失真`,
      maiagentProductEnhance: "Maiagent 產品增強",
      maiagentContent: `- 文生圖及圖生圖支援<br>
                        - 自動化 Agent 回復品質評估與檢測流程<br>`,
      maiagentTooltip: `### **產品增強：**

- **AI 生成**：文生圖及圖生圖支援
- **品質控制**：自動化 Agent 回復品質評估，並且可以檢測回復是否符合要求`,
    },
    en: {
      title: "EXPERIENCE",
      vfx: "VFX",
      vfxContent: `- Implement HDR algorithm<br>
                  - Implement image fusion algorithm<br>
                  - Use Blender to create videos<br>`,
      vfxTooltip: `### **My Contributions:**

- **HDR Algorithm**: Implemented photo alignment and Mitsuaga and Nayar's method algorithm
- **Image Fusion**: Implemented cylindrical projection and image matching and fusion algorithms
- **Blender**: 3D animation production

### What Have I Learned:

- **Python Implementation Optimization**: I learned how to make Python efficiently use resources, especially in multiple loops, using multi-threading, loop optimization, and other methods to improve speed`,
      machineLearning: "Machine Learning",
      mlContent: `- Implement multiple machine learning algorithms<br>
                  - Participate in MLB result forecasting project (Kaggle competition)<br>`,
      mlTooltip: `### **My Contributions:**

- **Kaggle Competition**: Tried CATboost and Random Forest models

### What Have I Learned:

- **Creative Thinking**: Machine learning projects require combining your own creativity and knowledge, often leading to unexpected results
- **Interest Discovery**: I discovered that I really enjoy work that requires creativity`,
      gameProgramming: "Game Programming",
      gpContent: `- Participate in CAGED game development<br>`,
      gpTooltip: `### **My Role in Team:**
- **Quality Assurance**: Specialized in fixing areas where game quality was insufficient
- **VFX**: Creating game effects, audio-visual effects, and story animations

### What Have I Learned:

- **Team Collaboration**: First time working in a small group, learned how to effectively divide work and proper development processes
- **Git Usage**: Learned how to use git and GitHub for version control in teams`,
      specialTopicResearch: "Special Topic Research",
      strContent: `- Using Diffusion Model depth estimation to eliminate noise in Gaussian Splatting Models<br>`,
      strTooltip: `### **Research Methods:**

- **Impact of Initial Values on Final Splatting**: Using different numbers of photos to generate initial values, training on the same photos and comparing final results
- **Moving Gaussians with Large Differences**: Using depth estimation as reference and applying rendering methods to find incorrect Gaussians and move them to correct positions
- **Process Design**: Inserting new movement steps between training to reduce noise`,
      sideQuest: "ML Independent Project",
      sqContent: `- Use machine learning to classify positive/negative YouTube comments and convert them into word clouds<br>`,
      sqTooltip: `### **Independent Project Features:**

- **Self-training**: Can use own dataset to run scripts and train models (adaptable to different languages)
- **Easy to Use**: Input YouTube URL to generate positive/negative word clouds

### **What Have I Learned:**
- **Independent Creation**: Cultivated ability to independently learn new knowledge and solve problems`,
      calendarWebApp: "Calendar Sharing and Subscription Platform",
      cwaContent: `- Use React to develop a calendar sharing and subscription platform<br>
                  - Frontend main responsible engineer<br>`,
      cwaTooltip: `### **My Responsibilities:**

- **Frontend Development**: Using React to develop user interfaces
- **Project Management**: As the main frontend responsible engineer, need to effectively allocate work
- **Backend Collaboration**: Assist backend development and debugging

### **What Have I Learned:**
- **React.js**: Learned how to use React.js for frontend development
- **Node.js**: Familiar with using Node.js for backend development
- **Frontend-Backend Integration**: Learned methods to connect frontend and backend`,
      ragAgent: "RAG Agent Independent Project",
      rcContent: `- LaTeX Helper<br>
                  - Read LaTeX tool book PDF to answer questions and write to files<br>`,
      ragTooltip: `### **Project Features:**

- **RAG Capability**: Can input two LaTeX user manuals and find correct information to answer questions
- **LLM Integration**: Provide correct prompts to ensure accurate question answering
- **Tool Integration**: Allow Agent to write response syntax to .tex files`,
      researchAgent: "Deep Research Independent Project",
      raContent: `- Agent that can search the web independently<br>
                  - Precisely search for information the user needs<br>`,
      researchTooltip: `### **Project Features:**

- **Autonomous Search**: Intelligent agent that can search the web independently
- **Precise Retrieval**: Precisely search for information the user needs, won't lose accuracy for new knowledge due to outdated models`,
      maiagentProductEnhance: "Maiagent Product Enhancement",
      maiagentContent: `- Add text-to-image and image-to-image support<br>
                        - Automate agent response quality assessment and detection process<br>`,
      maiagentTooltip: `### **Product Enhancement:**

- **AI Generation**: Text-to-image and image-to-image support
- **Quality Control**: Automated agent response quality assessment and can detect if responses meet requirements`,
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
          <div className="timeline-title tooltip-container">
            {content[currentLang].vfx} 💬
            <div className="tooltip">
              <ReactMarkdown>{content[currentLang].vfxTooltip}</ReactMarkdown>
            </div>
          </div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].vfxContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2024 Fall</div>
          <div className="timeline-title tooltip-container">
            {content[currentLang].machineLearning} 💬
            <div className="tooltip">
              <ReactMarkdown>{content[currentLang].mlTooltip}</ReactMarkdown>
            </div>
          </div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].mlContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2024 Fall</div>
          <div className="timeline-title tooltip-container">
            {content[currentLang].gameProgramming} 💬
            <div className="tooltip">
              <ReactMarkdown>{content[currentLang].gpTooltip}</ReactMarkdown>
            </div>
          </div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].gpContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2024</div>
          <div className="timeline-title tooltip-container">
            {content[currentLang].sideQuest} 💬
            <div className="tooltip">
              <ReactMarkdown>{content[currentLang].sqTooltip}</ReactMarkdown>
            </div>
          </div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].sqContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2024 - 2025</div>
          <div className="timeline-title tooltip-container">
            {content[currentLang].specialTopicResearch} 💬
            <div className="tooltip">
              <ReactMarkdown>{content[currentLang].strTooltip}</ReactMarkdown>
            </div>
          </div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].strContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2025 Spring</div>
          <div className="timeline-title tooltip-container">
            {content[currentLang].ragAgent} 💬
            <div className="tooltip">
              <ReactMarkdown>{content[currentLang].ragTooltip}</ReactMarkdown>
            </div>
          </div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].rcContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2025 Spring</div>
          <div className="timeline-title tooltip-container">
            {content[currentLang].researchAgent} 💬
            <div className="tooltip">
              <ReactMarkdown>{content[currentLang].researchTooltip}</ReactMarkdown>
            </div>
          </div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].raContent }} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2025 Spring</div>
          <div className="timeline-title tooltip-container">
            {content[currentLang].maiagentProductEnhance} 💬
            <div className="tooltip">
              <ReactMarkdown>{content[currentLang].maiagentTooltip}</ReactMarkdown>
            </div>
          </div>
          <div className="timeline-description">
            <div dangerouslySetInnerHTML={{ __html: content[currentLang].maiagentContent }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience; 