export const aboutMeData = {
  "zh": {
    "title": "關於我",
    "text": "我是陳璿修，目前就讀國立臺灣大學資訊工程學系碩士班，在羅紹元教授指導下於 NTU TRAI Lab 進行研究。研究方向為開放詞彙語意分割（Open-Vocabulary Semantic Segmentation）與持續適應（Continual Adaptation），關注視覺語言模型在資料分布轉移、類別詞彙持續變動時，如何維持穩健的表現。\n<br><br>\n我以共同第一作者身分完成論文 <a href=\"https://openreview.net/forum?id=pHhBlg59AU\" target=\"_blank\" rel=\"noopener noreferrer\"><em>Preventing Collapse in Long-Horizon Continual Test-Time Adaptation for Open-Vocabulary Semantic Segmentation</em></a>，目前投稿 ICLR 2027，審查中。\n<br><br>\n2025 年 6 月至 2026 年 6 月，我在思邁智能（MaiAgent）擔任生成式 AI 工程師實習生，參與正式上線的生成式 AI 與 Agent 平台開發，交付 5 項以上客戶需求的主要功能，範圍涵蓋多 Agent 協作、LLM 自動化評估、文字生成圖片、RAG、Text-to-SQL、Agent 工具與後端開發。"
  },
  "en": {
    "title": "About Me",
    "text": "I am Shuan-Shaw Chen, an M.S. student in Computer Science and Information Engineering at National Taiwan University, advised by Prof. Shao-Yuan Lo in the NTU TRAI Lab. My research focuses on open-vocabulary semantic segmentation and continual adaptation — keeping vision-language models robust as data distributions shift and class vocabularies evolve.\n<br><br>\nI am co-first author of <a href=\"https://openreview.net/forum?id=pHhBlg59AU\" target=\"_blank\" rel=\"noopener noreferrer\"><em>Preventing Collapse in Long-Horizon Continual Test-Time Adaptation for Open-Vocabulary Semantic Segmentation</em></a>, currently under review at ICLR 2027.\n<br><br>\nFrom Jun 2025 to Jun 2026, I was a Generative AI Engineer Intern at MaiAgent, where I shipped 5+ major customer-requested features on a production GenAI agent platform, spanning multi-agent systems, automated LLM evaluation, text-to-image generation, RAG, Text-to-SQL, agent tooling, and backend engineering."
  }
};

const STORAGE_KEY = 'admin_aboutMe';

export function getAboutMeData() {
  if (process.env.NODE_ENV === 'development') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
  }
  return aboutMeData;
}

export function saveAboutMeData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetAboutMeData() {
  localStorage.removeItem(STORAGE_KEY);
}
