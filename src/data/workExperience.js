export const workExperienceData = {
  zh: {
    title: "工作經歷",
    items: [
      {
        date: "2025.6 - 至今",
        position: "生成式AI工程師實習生",
        company: "思邁智能股份有限公司",
        description: `- 開發 Agent 工具鏈：browser tool、code interpreter、grep/glob/read/write、RAG 工具等<br>
                  - 開發 Agent Teams 多 agent 協作架構（圖結構）與 Agent Skills 系統<br>
                  - RAG / Text-to-SQL：Database 模組獨立重構、多資料庫支援、Agentic Text-to-SQL<br>
                  - 整合 DeepEval 評估系統，自動化測試資料生成與 Agent 回覆品質評估<br>
                  - 開發 MaiGPT 共用聊天機器人平台<br>
                  - 基礎建設：health check API、completions view async 效能優化等<br>`,
      },
    ],
  },
  en: {
    title: "Work Experience",
    items: [
      {
        date: "2025.6 - Present",
        position: "Generative AI Engineer Intern",
        company: "MaiAgent Co., Ltd.",
        description: `- Built agent toolchain: browser tool, code interpreter, grep/glob/read/write, RAG tools, and more<br>
                  - Developed Agent Teams multi-agent collaboration (graph structure) and Agent Skills system<br>
                  - RAG / Text-to-SQL: database module refactor, multi-DB support, agentic text-to-SQL service<br>
                  - Integrated DeepEval evaluation system for automated test data synthesis and response quality assessment<br>
                  - Developed MaiGPT shared chatbot platform<br>
                  - Infrastructure: health check API, async serializer performance optimization, and more<br>`,
      },
    ],
  },
};

const STORAGE_KEY = 'admin_workExperience';

export function getWorkExperienceData() {
  if (process.env.NODE_ENV === 'development') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
  }
  return workExperienceData;
}

export function saveWorkExperienceData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetWorkExperienceData() {
  localStorage.removeItem(STORAGE_KEY);
}
