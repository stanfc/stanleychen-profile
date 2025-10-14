import React from 'react';

const AboutMe = ({ currentLang }) => {
  const content = {
    zh: {
      title: "關於我",
      text: `我是陳璿修哈哈，來自國立臺灣大學資訊工程學系，我曾經修習過機器學習、視覺特效（VFX）、Rendering及遊戲設計等課程，目前在思邁智能擔任實習生，致力於為產品提供全新功能以及細節優化。我熟悉使用 C/C++、Python、Git、Unity 等開發工具，以及 Django、React.js、Node.js 等框架工具。此外，也曾自學前端與後端程式開發以及網頁爬蟲相關主題，並實作了一份相關專案。
      <br><br>
      我是一個學習能力快的人，我習慣透過網路資源持續學習新知，並實際應用在程式開發上。而在個性方面，我是個很活潑的人，同時也在工作時能保持積極學習的態度。也因為過去在系學會與學生社團的經驗，使我善於溝通與人際互動，在工作上是我的一大優勢。`
    },
    en: {
      title: "About Me",
      text: `I am ShuanShaw Chen from the Department of Computer Science and Information Engineering at National Taiwan University. I have studied courses such as machine learning, visual effects (VFX), Rendering, and game design, and have also worked as an intern at Maiagent Co., Ltd., dedicated to providing new features and detail optimization for products.I am familiar with using development tools like C/C++, Python, Git, Unity, and others, as well as framework tools like Django, React.js, Node.js, and others.Additionally, I have also self-taught frontend and backend programming as well as web scraping topics, and have implemented a related project.
      <br><br>
      I am a fast learner. I am accustomed to continuously learning new knowledge through internet resources and applying them to programming development. In terms of personality, I am a very easygoing person, and I can keep a positive attitude when working. Due to my past experiences in departmental associations and student clubs, I have gained a deep understanding of effective communication and interpersonal relationships, which will be a great advantage in my work.`
    }
  };

  return (
    <div className="card full-width">
      <h2>
        <div className="section-icon">👨‍💻</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <p 
        className="about-text" 
        dangerouslySetInnerHTML={{ __html: content[currentLang].text }}
      />
    </div>
  );
};

export default AboutMe; 