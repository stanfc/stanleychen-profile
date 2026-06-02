export const aboutMeData = {
  "zh": {
    "title": "關於我",
    "text": "我是陳璿修，就讀國立臺灣大學資訊工程學系，目前在 CV 實驗室從事電腦視覺與生成式 AI 相關研究，聚焦於模型在真實場景下的泛化與適應能力。\n<br><br>\n在學術背景上，我修習過深度學習、多模態人工智慧、生成式 AI 安全與機器學習等課程，並具備 Rendering 與 VFX 的跨域知識，對視覺生成任務有較完整的理解。技術上熟悉 Python、C/C++、PyTorch，以及 Git 版本控制與 Unity 開發環境。\n<br><br>\n我曾於思邁智能擔任實習生，負責產品新功能開發與細節優化，具備將研究成果落地的實務經驗。\n<br><br>\n個性上我樂於與人交流想法，喜歡在討論中碰撞出新的思路，在研究之外也保持對新事物的好奇心，習慣主動學習並快速將想法付諸實踐。"
  },
  "en": {
    "title": "About Me",
    "text": "I am Shuan-Shaw Chen, currently pursuing a degree in Computer Science and Information Engineering at National Taiwan University. I am conducting research in a computer vision lab, focusing on generative AI and the generalization and adaptation of models in real-world scenarios.\n<br><br>\nMy academic background includes courses in deep learning, multimodal AI, generative AI safety, and machine learning. I also have cross-domain knowledge in rendering and VFX, giving me a well-rounded understanding of visual generation tasks. On the technical side, I am proficient in Python, C/C++, and PyTorch, with experience in Git version control and Unity development.\n<br><br>\nI previously interned at MaiAgent, where I worked on developing new product features and refining existing functionality, gaining hands-on experience in bringing research ideas into practical applications.\n<br><br>\nAs for my personality, I enjoy exchanging ideas with others and thrive when new perspectives emerge through discussion. Beyond research, I maintain a strong curiosity for new things, and I am in the habit of learning proactively and turning ideas into practice quickly."
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
