export const experienceData = {
  "zh": {
    "title": "經驗",
    "items": [
      {
        "date": "2024 Spring",
        "title": "視覺特效",
        "content": "- 實作 HDR 演算法<br>\n                  - 實作圖像融合演算法<br>\n                  - 使用 Blender 製作影片<br>",
        "tooltip": "### **我在團隊中的貢獻：**\n\n- **HDR演算法**：實作照片對齊及 Mitsuaga and Nayar's method 演算法\n- **圖像融合**：實作圓柱投影與圖像配對與融合演算法\n- **Blender**：3d 動畫製作\n\n### 我學到的事：\n\n- **python 實作優化：**我學會如何讓 python 有效運用資源，尤其在多迴圈時，用多線程、迴圈優化等方式來提升速度",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/leolinpotato/ntu-vfx-2024"
          },
          {
            "label": "🎥 Blender 特效製作",
            "url": "https://www.youtube.com/watch?v=e7_iIwEm398"
          },
          {
            "label": "🎥 期末專案",
            "url": "https://youtu.be/KqNNqOy3fpY?si=4KVSvJS_8_uxlPGE"
          }
        ]
      },
      {
        "date": "2024 Fall",
        "title": "機器學習",
        "content": "- 實作多種機器學習演算法<br>\n                  - 參與 MLB 賽果預測專案 (kaggle 競賽)<br>",
        "tooltip": "### **我在團隊中的貢獻：**\n\n- **Kaggle 競賽**：嘗試 CATboost 模型以及 Random Forest 模型\n\n### 我學到的事：\n\n- **創意發想**：機器學習專案需要結合自己的創意和知識，往往會有意想不到的效果\n- **興趣發覺**:我發現自己很享受需要結合創造力的工作",
        "links": []
      },
      {
        "date": "2024 Fall",
        "title": "遊戲程式設計",
        "content": "- 參與 CAGED 遊戲開發<br>",
        "tooltip": "### **我在團隊中的角色：**\n- **品質保證**：專門將遊戲品質不夠好的地方修復\n- **VFX**：製作遊戲特效、聲光效果及劇情動畫\n\n### 我學到的事：\n\n- **團隊合作**：首次在小團體中工作，學到如何有效分工以及正確的開發流程\n- **git 使用**：學會如何使用 git 以及 github 在團體中進行版本控制",
        "links": [
          {
            "label": "🎮 玩遊戲",
            "url": "https://fhvirus.itch.io/caged?fbclid=IwZXh0bgNhZW0CMTAAAR3sYiRt9_hX8UyU68FCerY5O92KcjUp45jFvAippdTQ-LYH3yQsvf7chzQ_aem__vxlOau9PK69ds_E1oiPTQ"
          }
        ]
      },
      {
        "date": "2024",
        "title": "ML 自主專題",
        "content": "- 使用機器學習分類 YouTube 評論的正負面情緒並轉化為文字雲<br>",
        "tooltip": "### **自主專案特色：**\n\n- **自行訓練**：可以使用自己的資料集跑 script 訓練模型 (適應不同語言)\n- **簡易使用**：輸入 youtube 的 url 就可以生成正負面文字雲\n\n### **我學到的事：**\n- **獨立創作**：培養獨立學習新知及解決問題的能力",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/stanfc/Youtube-Comment-Emotion-Prediction-Tool"
          }
        ]
      },
      {
        "date": "2024 - 2025",
        "title": "專題研究",
        "content": "- 使用 Diffusion Model 的深度估計來消除 gaussian splatting model 中的噪聲<br>",
        "tooltip": "### **研究方法：**\n\n- **初始值對於最終 splatting 的影響**：使用不同數量照片生成的初始值對相通照片及進行 train 並比較最終效果\n- **移動差異過大的 gaussian**：以深度估計為參考，並運用 rendering 的方式找到錯誤的 gaussian 並移動到正確位置\n- **流程設計**：在 tranning 之間插入新的移動步驟減少噪點",
        "links": [
          {
            "label": "📃 查看報告",
            "url": "https://drive.google.com/file/d/15socf0mkWe1OrEC5ysWpTwXxJ1jAjuEh/view?usp=sharing"
          }
        ]
      },
      {
        "date": "2025",
        "title": "在 pbrt-v4 中添加 l-system 圖形支援",
        "content": "- 在 pbrt-v4 中新增 l-system 支援<br>\n                  - 實作 3d 版本 l-system 圖形生成<br>\n                  - 新增額外功能",
        "tooltip": "### **專案特色：**\n\n- **L-System 圖形生成**：實作 L-System 圖形生成演算法\n- **PBRT-v4 擴充**：在 PBRT-v4 中添加 L-System 圖形生成功能",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/stanfc/pbrt-plus-v4/tree/l-system"
          }
        ]
      },
      {
        "date": "2025 Spring",
        "title": "RAG Agent 自主專案",
        "content": "- LaTeX 助手<br>\n                  - 讀取 latex tool book 的 pdf 來回答問題，並寫入 file<br>",
        "tooltip": "### **專案特色：**\n\n- **RAG 能力**：放入兩份 LaTeX 使用手冊，可以找到正確的資訊並用以回答問題\n- **LLM 串接**：給予正確提示詞使其正確回答問題\n- **工具串接**：讓 Agent 可以將回應的語法寫入 .tex 檔",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/stanfc/agent-project"
          }
        ]
      },
      {
        "date": "2025 Spring",
        "title": "Deep Research 自主專案",
        "content": "- 可以自行搜尋網路的 agent<br>\n                  - 精準搜尋使用者需要的資訊<br>",
        "tooltip": "### **專案特色：**\n\n- **自主搜尋**：可以自行搜尋網路的智能代理\n- **精準檢索**：精準搜尋使用者需要的資訊，不會因模型老舊對於新知識失真",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/stanfc/agent-project"
          }
        ]
      },
      {
        "date": "2025 Fall",
        "title": "ADL 期末：LLM Jailbreak 攻擊（DPO）",
        "content": "- 以 DPO 訓練 LLM Rewriter，透過 safety guard 與 usefulness judge 作為 reward signal<br>\n                  - 使模型學會改寫 prompt 以繞過 LLM 安全過濾器<br>",
        "tooltip": "### **我的貢獻：**\n\n- **run_inference_progress.py**：實作帶 tqdm 進度條的 inference 腳本，支援中斷續跑（resume）\n- **run_eval_progress.py**：實作帶即時 Safety/Relevance/Acc 顯示的 evaluation 腳本，支援 resume 與 weighted score 計算\n\n### **我學到的事：**\n- **實驗工程**：如何設計可中斷、可復原的大規模 LLM 評估流程\n- **指標設計**：cost-weighted accuracy 的計算與意義",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/joshuachen0213/ADL-Final"
          }
        ]
      },
      {
        "date": "2026.3",
        "title": "GuardCircle 家人防詐守護系統",
        "content": "- 多模態內容偵測：文字、網址、電話、圖片、檔案<br>\n                  - 家庭圈邀請、事件總覽與通知<br>\n                  - AI 風險評估與可解釋原因<br>",
        "tooltip": "### **我的貢獻：**\n\n- **多媒體偵測（Go）**：開發 analysis service，整合 AWS Bedrock 進行多媒體內容偵測\n- **S3 Presigned URL**：實作 user-event 與 families-scan-event 兩個 Lambda 服務的 S3 presigned URL 回傳，讓前端可直接存取檔案\n- **Terraform 部署**：調整 Lambda 相關 infra 設定\n\n### **我學到的事：**\n- **Go 後端**：Lambda function 開發與 AWS SDK 使用\n- **無伺服器架構**：Terraform 管理 AWS 資源的實務經驗",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/yenyu3/guardcircle-app"
          }
        ]
      },
      {
        "date": "2026",
        "title": "金曲猜歌王",
        "content": "- 基於 Hitster 桌遊規則的本地多人猜歌遊戲<br>\n                  - 支援 2-8 人、代幣系統、卡牌時間線排序<br>\n                  - 挑戰機制與即時遊戲狀態管理<br>",
        "tooltip": "### **我的貢獻：**\n\n- **專案建立**：初始化整個專案架構（Vue.js 前端 + Express.js 後端）\n- **遊戲規則實作**：持續新增規則、修復 bug、擴充音樂曲庫\n\n### **我學到的事：**\n- **Vue.js + Pinia**：學會 Vue 3 Composition API 與狀態管理\n- **遊戲系統設計**：複雜規則的狀態機設計與實作",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/stanfc/listen-up"
          }
        ]
      },
      {
        "date": "2025.6 - 2026.6",
        "title": "Maiagent 生成式AI工程師實習",
        "content": "- Agent 工具鏈開發：browser tool、code interpreter、grep/glob/read/write、RAG 工具等<br>\n                  - RAG / Text-to-SQL：Database 模組獨立重構、多資料庫支援、Agentic Text-to-SQL<br>\n                  - DeepEval 評估系統整合：自動化測試資料生成與 Agent 回覆品質評估<br>\n                  - MaiGPT 共用聊天機器人平台開發<br>\n                  - Agent Teams 多 agent 協作架構（圖結構）<br>",
        "tooltip": "### **主要貢獻：**\n\n- **Agent 核心能力**：開發 Agent Teams 多 agent 協作（Team/TeamNode/TeamEdge 圖結構）、Agent Skills 系統、Code Interpreter、Browser Tool\n- **Tool 系統**：實作 grep / glob / read / write（含 streaming）/ get-from-kb / query_files / retrieve_text_nodes / text-to-image 等工具，並支援 MCP 自訂 header\n- **RAG / Text-to-SQL**：將 Database 模組從 chatbot 獨立（最大規模重構，+6866/-424）、支援多資料庫連線、開發 Agentic Text-to-SQL 服務、Agent metadata 選取與重構\n- **DeepEval 評估系統**：整合 DeepEval 評估框架、API 調整、synthesizer 自動生成測試資料\n- **MaiGPT 平台**：MaiGPT chatbot 功能、RAG tool 支援、批次更新組織設定的管理指令\n- **基礎建設**：health check API（/health/dependencies）、CNAME socket event 即時推播、completions view async serializer 效能優化\n\n### **我學到的事：**\n- **大型系統設計**：如何在既有複雜系統中做大規模模組解耦與重構\n- **Agent 架構**：tool use、multi-agent 協作、streaming 等 LLM agent 核心技術的實務開發\n- **工程品質**：pre-commit hook、async 效能優化、評估系統建立等工程最佳實踐",
        "links": []
      }
    ]
  },
  "en": {
    "title": "EXPERIENCE",
    "items": [
      {
        "date": "2024 Spring",
        "title": "VFX",
        "content": "- Implement HDR algorithm<br>\n                  - Implement image fusion algorithm<br>\n                  - Use Blender to create videos<br>",
        "tooltip": "### **My Contributions:**\n\n- **HDR Algorithm**: Implemented photo alignment and Mitsuaga and Nayar's method algorithm\n- **Image Fusion**: Implemented cylindrical projection and image matching and fusion algorithms\n- **Blender**: 3D animation production\n\n### What Have I Learned:\n\n- **Python Implementation Optimization**: I learned how to make Python efficiently use resources, especially in multiple loops, using multi-threading, loop optimization, and other methods to improve speed",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/leolinpotato/ntu-vfx-2024"
          },
          {
            "label": "🎥 Blender VFX",
            "url": "https://www.youtube.com/watch?v=e7_iIwEm398"
          },
          {
            "label": "🎥 Final Project",
            "url": "https://youtu.be/KqNNqOy3fpY?si=4KVSvJS_8_uxlPGE"
          }
        ]
      },
      {
        "date": "2024 Fall",
        "title": "Machine Learning",
        "content": "- Implement multiple machine learning algorithms<br>\n                  - Participate in MLB result forecasting project (Kaggle competition)<br>",
        "tooltip": "### **My Contributions:**\n\n- **Kaggle Competition**: Tried CATboost and Random Forest models\n\n### What Have I Learned:\n\n- **Creative Thinking**: Machine learning projects require combining your own creativity and knowledge, often leading to unexpected results\n- **Interest Discovery**: I discovered that I really enjoy work that requires creativity",
        "links": []
      },
      {
        "date": "2024 Fall",
        "title": "Game Programming",
        "content": "- Participate in CAGED game development<br>",
        "tooltip": "### **My Role in Team:**\n- **Quality Assurance**: Specialized in fixing areas where game quality was insufficient\n- **VFX**: Creating game effects, audio-visual effects, and story animations\n\n### What Have I Learned:\n\n- **Team Collaboration**: First time working in a small group, learned how to effectively divide work and proper development processes\n- **Git Usage**: Learned how to use git and GitHub for version control in teams",
        "links": [
          {
            "label": "🎮 Play Game",
            "url": "https://fhvirus.itch.io/caged?fbclid=IwZXh0bgNhZW0CMTAAAR3sYiRt9_hX8UyU68FCerY5O92KcjUp45jFvAippdTQ-LYH3yQsvf7chzQ_aem__vxlOau9PK69ds_E1oiPTQ"
          }
        ]
      },
      {
        "date": "2024",
        "title": "ML Independent Project",
        "content": "- Use machine learning to classify positive/negative YouTube comments and convert them into word clouds<br>",
        "tooltip": "### **Independent Project Features:**\n\n- **Self-training**: Can use own dataset to run scripts and train models (adaptable to different languages)\n- **Easy to Use**: Input YouTube URL to generate positive/negative word clouds\n\n### **What Have I Learned:**\n- **Independent Creation**: Cultivated ability to independently learn new knowledge and solve problems",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/Youtube-Comment-Emotion-Prediction-Tool"
          }
        ]
      },
      {
        "date": "2024 - 2025",
        "title": "Special Topic Research",
        "content": "- Using Diffusion Model depth estimation to eliminate noise in Gaussian Splatting Models<br>",
        "tooltip": "### **Research Methods:**\n\n- **Impact of Initial Values on Final Splatting**: Using different numbers of photos to generate initial values, training on the same photos and comparing final results\n- **Moving Gaussians with Large Differences**: Using depth estimation as reference and applying rendering methods to find incorrect Gaussians and move them to correct positions\n- **Process Design**: Inserting new movement steps between training to reduce noise",
        "links": [
          {
            "label": "📃 View Report",
            "url": "https://drive.google.com/file/d/15socf0mkWe1OrEC5ysWpTwXxJ1jAjuEh/view?usp=sharing"
          }
        ]
      },
      {
        "date": "2025",
        "title": "L-system support in pbrt-v4",
        "content": "- Add L-system support in pbrt-v4<br>\n                  - Implement 3D version of L-system graphics generation<br>\n                  - Add extra features",
        "tooltip": "### **Project Features:**\n\n- **L-System Graphics Generation**: Implement L-System graphics generation algorithm\n- **PBRT-v4 Extension**: Add L-System graphics generation feature in PBRT-v4 so that users can generate complex shapes using L-System syntax",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/pbrt-plus-v4/tree/l-system"
          }
        ]
      },
      {
        "date": "2025 Spring",
        "title": "RAG Agent Independent Project",
        "content": "- LaTeX Helper<br>\n                  - Read LaTeX tool book PDF to answer questions and write to files<br>",
        "tooltip": "### **Project Features:**\n\n- **RAG Capability**: Can input two LaTeX user manuals and find correct information to answer questions\n- **LLM Integration**: Provide correct prompts to ensure accurate question answering\n- **Tool Integration**: Allow Agent to write response syntax to .tex files",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/agent-project"
          }
        ]
      },
      {
        "date": "2025 Spring",
        "title": "Deep Research Independent Project",
        "content": "- Agent that can search the web independently<br>\n                  - Precisely search for information the user needs<br>",
        "tooltip": "### **Project Features:**\n\n- **Autonomous Search**: Intelligent agent that can search the web independently\n- **Precise Retrieval**: Precisely search for information the user needs, won't lose accuracy for new knowledge due to outdated models",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/agent-project"
          }
        ]
      },
      {
        "date": "2025 Fall",
        "title": "ADL Final: LLM Jailbreak Attack via DPO",
        "content": "- Trained LLM rewriter via DPO using safety guard and usefulness judge as reward signals<br>\n                  - Model learns to rewrite prompts to bypass LLM safety filters<br>",
        "tooltip": "### **My Contributions:**\n\n- **run_inference_progress.py**: Built inference script with tqdm progress bar and resume-from-interrupt support\n- **run_eval_progress.py**: Built evaluation script with real-time Safety/Relevance/Acc display, resume support, and cost-weighted score calculation\n\n### **What Have I Learned:**\n- **Experiment Engineering**: Designing large-scale LLM evaluation pipelines that are interruptible and resumable\n- **Metric Design**: Cost-weighted accuracy calculation and its practical significance",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/joshuachen0213/ADL-Final"
          }
        ]
      },
      {
        "date": "2026.3",
        "title": "GuardCircle — Family Anti-Scam App",
        "content": "- Multi-modal scam detection: text, URL, phone, image, file<br>\n                  - Family circle invitation, event overview and notifications<br>\n                  - AI-powered risk assessment with explainable reasons<br>",
        "tooltip": "### **My Contributions:**\n\n- **Multi-media Detection (Go)**: Developed analysis service integrating AWS Bedrock for multi-media content detection\n- **S3 Presigned URL**: Implemented presigned URL responses in user-event and families-scan-event Lambda services for direct frontend file access\n- **Terraform Infra**: Adjusted Lambda-related infrastructure configuration\n\n### **What Have I Learned:**\n- **Go Backend**: Lambda function development and AWS SDK usage\n- **Serverless Architecture**: Hands-on experience managing AWS resources with Terraform",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/yenyu3/guardcircle-app"
          }
        ]
      },
      {
        "date": "2026",
        "title": "Listen Up — Music Guessing Game",
        "content": "- Local multiplayer music guessing game based on Hitster rules<br>\n                  - Supports 2-8 players, token system, timeline card placement<br>\n                  - Challenge mechanics and real-time game state management<br>",
        "tooltip": "### **My Contributions:**\n\n- **Project Setup**: Initialized the entire project architecture (Vue.js frontend + Express.js backend)\n- **Game Logic**: Continuously added rules, fixed bugs, and expanded the music library\n\n### **What Have I Learned:**\n- **Vue.js + Pinia**: Vue 3 Composition API and state management\n- **Game System Design**: State machine design for complex rule sets",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/listen-up"
          }
        ]
      },
      {
        "date": "2025.6 - 2026.6",
        "title": "Maiagent Generative AI Engineer Intern",
        "content": "- Agent toolchain: browser tool, code interpreter, grep/glob/read/write, RAG tools, and more<br>\n                  - RAG / Text-to-SQL: database module refactor, multi-DB support, agentic text-to-SQL<br>\n                  - DeepEval integration: automated test data synthesis and agent response quality evaluation<br>\n                  - MaiGPT shared chatbot platform development<br>\n                  - Agent Teams multi-agent collaboration architecture (graph structure)<br>",
        "tooltip": "### **Key Contributions:**\n\n- **Agent Core**: Built Agent Teams multi-agent collaboration (Team/TeamNode/TeamEdge graph), Agent Skills system, Code Interpreter, Browser Tool\n- **Tool System**: Implemented grep / glob / read / write (streaming) / get-from-kb / query_files / retrieve_text_nodes / text-to-image tools; MCP custom header support\n- **RAG / Text-to-SQL**: Decoupled Database module from chatbot (largest refactor, +6866/-424), multi-database support, agentic text-to-SQL service, agent metadata selection & refactor\n- **DeepEval**: Integrated DeepEval evaluation framework, API adjustments, synthesizer for auto test data generation\n- **MaiGPT Platform**: MaiGPT chatbot feature, RAG tool support, bulk org settings management command\n- **Infrastructure**: Health check API (/health/dependencies), CNAME socket event real-time push, async serializer performance optimization for completions view\n\n### **What Have I Learned:**\n- **Large-scale System Design**: How to decouple and refactor modules in a complex production system\n- **Agent Architecture**: Hands-on development of tool use, multi-agent collaboration, streaming, and other core LLM agent techniques\n- **Engineering Quality**: Pre-commit hooks, async performance optimization, evaluation system design",
        "links": []
      }
    ]
  }
};

const STORAGE_KEY = 'admin_experience';

export function getExperienceData() {
  if (process.env.NODE_ENV === 'development') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
  }
  return experienceData;
}

export function saveExperienceData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetExperienceData() {
  localStorage.removeItem(STORAGE_KEY);
}
