export const portfolioItems = [
  {
    id: 'adl-final',
    title: { zh: 'ADL 期末：LLM Jailbreak 攻擊（DPO）', en: 'ADL Final: LLM Jailbreak Attack via DPO' },
    subtitle: { zh: 'Python · LLM · RLHF · DPO', en: 'Python · LLM · RLHF · DPO' },
    type: 'github',
    description: {
      zh: 'NTU 深度學習應用課程期末專案。以 DPO 訓練 LLM Rewriter，透過 safety guard 與 usefulness judge 作為 reward signal，使模型學會改寫 prompt 以繞過安全過濾器。',
      en: 'NTU ADL final project. Trains an LLM rewriter via DPO using safety guard and usefulness judge as reward signals to rewrite prompts that bypass LLM safety filters.',
    },
    thumbnail: 'adl-final.png',
    tags: ['Python', 'LLM', 'DPO', 'RLHF', 'NLP', 'Team Project'],
    links: { github: 'https://github.com/joshuachen0213/ADL-Final' },
    date: '2025-12-15',
  },
  {
    id: 'listen-up',
    title: { zh: '金曲猜歌王', en: 'Listen Up — Music Guessing Game' },
    subtitle: { zh: 'Vue.js · Express.js · TypeScript', en: 'Vue.js · Express.js · TypeScript' },
    type: 'github',
    description: {
      zh: '基於 Hitster 桌遊規則的本地多人猜歌遊戲，支援 2-8 人、代幣系統、卡牌時間線排序與挑戰機制。',
      en: 'Local multiplayer music guessing game based on Hitster rules; supports 2-8 players, token system, timeline card placement, and challenge mechanics.',
    },
    thumbnail: 'listen-up.png',
    tags: ['Vue.js', 'TypeScript', 'Node.js', 'Express', 'Game', 'Personal Project'],
    links: { github: 'https://github.com/stanfc/listen-up' },
    date: '2026-03-12',
  },
  {
    id: 'guardcircle',
    title: { zh: 'GuardCircle 家人防詐守護系統', en: 'GuardCircle — Family Anti-Scam App' },
    subtitle: { zh: 'React Native · Go · AWS Lambda', en: 'React Native · Go · AWS Lambda' },
    type: 'github',
    description: {
      zh: '一套家人防詐守護系統，支援文字、網址、電話、圖片、檔案等多模態內容偵測，並提供家庭圈事件總覽與 AI 風險評估。',
      en: 'Family anti-scam guardian system with multi-modal detection (text, URL, phone, image, file) and AI-powered risk assessment.',
    },
    thumbnail: 'guard-circle.png',
    tags: ['React Native', 'TypeScript', 'Go', 'Python', 'AWS', 'AI', 'Team Project'],
    links: { github: 'https://github.com/yenyu3/guardcircle-app' },
    date: '2025-03-27',
  },
  {
    id: 'vfx',
    title: { zh: '視覺特效（VFX）', en: 'VFX' },
    subtitle: { zh: 'Blender · HDR · 圖像融合', en: 'Blender · HDR · Image Fusion' },
    type: 'video',
    description: { zh: '課程作品：實作 HDR、圖像配對與融合，並以 Blender 製作動畫。', en: 'Course projects: HDR, matching/fusion, and Blender animations.' },
    thumbnail: 'vfx.png',
    tags: ['VFX', 'Blender', 'Python', 'Computer Vision', 'Team Project'],
    links: {
      github: 'https://github.com/leolinpotato/ntu-vfx-2024',
      video: 'https://www.youtube.com/watch?v=e7_iIwEm398',
      video2: 'https://youtu.be/KqNNqOy3fpY?si=4KVSvJS_8_uxlPGE',
    },
    date: '2024-06-01',
  },
  {
    id: 'caged',
    title: { zh: 'CAGED 遊戲', en: 'CAGED Game' },
    subtitle: { zh: 'Game · QA · VFX', en: 'Game · QA · VFX' },
    type: 'web',
    description: { zh: '參與小組開發，負責品質修復及特效。', en: 'Team project; QA and VFX.' },
    thumbnail: 'caged.png',
    tags: ['Game', 'VFX', 'C#', 'Unity', 'Team Project'],
    links: { demo: 'https://fhvirus.itch.io/caged?fbclid=IwZXh0bgNhZW0CMTAAAR3sYiRt9_hX8UyU68FCerY5O92KcjUp45jFvAippdTQ-LYH3yQsvf7chzQ_aem__vxlOau9PK69ds_E1oiPTQ' },
    date: '2024-10-01',
  },
  {
    id: 'yt-emotion',
    title: { zh: 'YouTube 評論情緒分析', en: 'YouTube Comment Emotion Tool' },
    subtitle: { zh: 'ML · Python', en: 'ML · Python' },
    type: 'github',
    description: { zh: '文字雲與模型訓練腳本，支援自訂語料。', en: 'Word cloud and training scripts; custom datasets supported.' },
    thumbnail: 'side_project.png',
    tags: ['ML', 'NLP', 'Python', 'Personal Project'],
    links: { github: 'https://github.com/stanfc/Youtube-Comment-Emotion-Prediction-Tool' },
    date: '2024-09-01',
  },
  {
    id: 'special-topic',
    title: { zh: '專題研究：使用深度預測改善 Gaussian Splatting', en: 'Special Topic: Gaussian Splatting with Depth Prediction' },
    subtitle: { zh: 'Research · 3D', en: 'Research · 3D' },
    type: 'paper',
    description: { zh: '以深度估計降低 splatting 噪點，包含方法與結果報告。', en: 'Reduce splatting noise using depth estimation; report included.' },
    thumbnail: 'special_topic.png',
    tags: ['Research', 'Rendering', 'Team Project'],
    links: { paper: 'https://drive.google.com/file/d/15socf0mkWe1OrEC5ysWpTwXxJ1jAjuEh/view?usp=sharing' },
    date: '2025-01-15',
  },
  {
    id: 'pbrt-lsystem',
    title: { zh: 'PBRT-v4 L-System 支援', en: 'L-System Support in PBRT-v4' },
    subtitle: { zh: 'Rendering · C++', en: 'Rendering · C++' },
    type: 'github',
    description: { zh: '在 PBRT-v4 中新增 L-System 支援與 3D 圖形生成。', en: 'Added L-System graphics generation to PBRT-v4.' },
    thumbnail: 'rendering.png',
    tags: ['Rendering', 'C++', 'PBRT', 'Personal Project'],
    links: { github: 'https://github.com/stanfc/pbrt-plus-v4/tree/l-system' },
    date: '2025-05-10',
  },
  {
    id: 'rag-agent',
    title: { zh: 'RAG Agent', en: 'RAG Agent' },
    subtitle: { zh: 'Python · LLM', en: 'Python · LLM' },
    type: 'github',
    description: { zh: 'LaTeX 助手：讀取 PDF、RAG 問答、工具寫檔。', en: 'LaTeX helper: PDF ingest, RAG QA, file writing.' },
    thumbnail: 'rag.png',
    tags: ['RAG', 'Python', 'Agent', 'LLM', 'Personal Project'],
    links: { github: 'https://github.com/stanfc/agent-project' },
    date: '2025-04-10',
  },
  {
    id: 'research-agent',
    title: { zh: 'Deep Research Agent', en: 'Deep Research Agent' },
    subtitle: { zh: 'Web · Agent', en: 'Web · Agent' },
    type: 'github',
    description: { zh: '可自動搜尋網路，精準檢索所需資訊。', en: 'Autonomous web search; precise retrieval.' },
    thumbnail: 'deep_research.png',
    tags: ['Agent', 'Search', 'LLM', 'Personal Project'],
    links: { github: 'https://github.com/stanfc/agent-project' },
    date: '2025-04-20',
  },
  {
    id: 'calendar-app',
    title: { zh: '行事曆分享與訂閱平台', en: 'Calendar Sharing & Subscription' },
    subtitle: { zh: 'React · Node.js', en: 'React · Node.js' },
    type: 'web',
    description: { zh: '前端主要負責；分享與訂閱。', en: 'Frontend lead; sharing & subscription.' },
    thumbnail: 'calendar.png',
    tags: ['React', 'Web', 'Node.js', 'Team Project'],
    links: { paper: 'https://drive.google.com/file/d/1UOdeThkxDmk1_2xY83AmGwgHIregeKoH/view?usp=sharing' },
    date: '2024-06-15',
  },
  {
    id: 'LLM-based-pdf-reader-app',
    title: { zh: 'IspBirntg 基於 LLM 的 PDF 閱讀器', en: 'IspBirntg LLM-based PDF Reader' },
    subtitle: { zh: 'React · Django', en: 'React · Django' },
    type: 'web',
    description: { zh: '本地部屬基於 LLM 的 PDF 閱讀器，支援多模態以及 RAG', en: 'Self-hosted LLM-based PDF reader with multi-modal and RAG support' },
    thumbnail: 'ispbirntg.png',
    tags: ['React', 'Web', 'Django', 'Side Project', 'LLM', 'RAG'],
    links: { github: 'https://github.com/stanfc/IspBirntg' },
    date: '2025-09-15',
  },
];

const STORAGE_KEY = 'admin_portfolio';

export function getPortfolioItems() {
  if (process.env.NODE_ENV === 'development') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
  }
  return portfolioItems;
}

export function savePortfolioItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function resetPortfolioItems() {
  localStorage.removeItem(STORAGE_KEY);
}
