export const workExperienceData = {
  "zh": {
    "title": "工作經歷",
    "items": [
      {
        "date": "2025.6 – 2026.6",
        "position": "生成式 AI 工程師實習生",
        "company": "思邁智能股份有限公司（MaiAgent）",
        "description": "- 為正式上線的生成式 AI 平台交付 5 項以上客戶需求功能，包含多 Agent 協作流程、自動化評估、文字生成圖片與 Agent 工具<br>\n- 參與 Agentic RAG、Text-to-SQL、LLM 評估與後端系統等核心功能開發<br>\n- 開發 Agent 工具，包含瀏覽器工具、Code Interpreter，以及檔案與 RAG 相關整合<br>",
        "tooltip": "### **主要貢獻：**\n\n- **Agent 核心能力**：Agent Teams 多 Agent 協作架構（Team / TeamNode / TeamEdge 圖結構）、Agent Skills 系統、Browser Tool、Code Interpreter\n- **工具系統**：grep / glob / read / write（支援 streaming）、知識庫檢索工具（get-from-kb、query_files、retrieve_text_nodes）與文字生成圖片工具，並支援 MCP 自訂 header\n- **RAG / Text-to-SQL**：將 Database 模組從 chatbot 獨立出來（最大規模重構，+6866 / -424 行）、支援多資料庫連線、開發 Agentic Text-to-SQL 服務\n- **評估系統**：整合 DeepEval 評估框架，並以 synthesizer 自動產生測試資料\n- **MaiGPT**：開發 MaiGPT 共用聊天機器人、RAG 工具支援，以及批次更新組織設定的管理指令\n- **基礎建設**：health check API（/health/dependencies）、CNAME socket event 即時推播、completions view 的 async serializer 效能優化"
      }
    ]
  },
  "en": {
    "title": "Work Experience",
    "items": [
      {
        "date": "Jun 2025 – Jun 2026",
        "position": "Generative AI Engineer Intern",
        "company": "MaiAgent Co., Ltd.",
        "description": "- Shipped 5+ customer-requested features for a production GenAI platform, including multi-agent workflows, automated evaluation, text-to-image generation, and agent tooling<br>\n- Built production capabilities across agentic RAG, Text-to-SQL, LLM evaluation, and backend systems<br>\n- Developed agent tools including a browser tool, code interpreter, and file/RAG integrations<br>",
        "tooltip": "### **Key Contributions:**\n\n- **Agent core**: Agent Teams multi-agent collaboration (Team / TeamNode / TeamEdge graph), Agent Skills system, Browser Tool, Code Interpreter\n- **Tool system**: grep / glob / read / write (with streaming), knowledge-base retrieval tools (get-from-kb, query_files, retrieve_text_nodes), and a text-to-image tool; custom MCP headers\n- **RAG / Text-to-SQL**: Decoupled the Database module from the chatbot module (largest refactor, +6866 / -424 lines), added multi-database support, and built an agentic Text-to-SQL service\n- **Evaluation**: Integrated the DeepEval framework and used its synthesizer to generate test data automatically\n- **MaiGPT**: Built the MaiGPT shared chatbot, RAG tool support, and a management command for bulk organization settings\n- **Infrastructure**: Health-check API (/health/dependencies), CNAME socket events for real-time updates, and async serializer optimization for the completions view"
      }
    ]
  }
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
