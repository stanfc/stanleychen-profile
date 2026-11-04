export const experienceData = {
  "zh": {
    "title": "精選專案與課程",
    "items": [
      {
        "date": "2026.8",
        "title": "AI City Commander 智慧城市事件指揮平台",
        "content": "- 黑客松專案：結合 SOP 規則推理與 LLM 決策輔助的城市交通與人流事件應變平台<br>\n- 自動產生決策建議、公開告警與事後報告，部署於 AWS 無伺服器架構<br>",
        "tooltip": "### **我的貢獻：**\n\n- **AI 流程設計**：設計 LLM 決策與推理流程，將 SOP 規則與即時城市狀態轉為可解釋的行動建議\n- **降低延遲**：將彼此獨立的 LLM 決策呼叫平行化，縮短重新規劃（replanning）的等待時間\n- **測試與整合**：負責 AI 流程的測試，並與後端服務整合\n\n### **技術：**\n- Python · React · AWS · Amazon Bedrock · Terraform",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/yenyu3/ai-city-commander"
          }
        ]
      },
      {
        "date": "2026.3",
        "title": "GuardCircle 家人防詐守護系統",
        "content": "- 黑客松專案：家人防詐 App，多模態風險分析：文字、網址、電話號碼、圖片、檔案、音訊與影片<br>\n- 家庭圈事件總覽與通知，提供具可解釋原因的 AI 風險評估<br>",
        "tooltip": "### **我的貢獻：**\n\n- **AI 流程設計與測試**：設計並測試多模態內容分析流程\n- **AWS Bedrock 整合**：以 Go 開發 analysis service，串接 Bedrock 進行多模態風險推理\n- **後端 / 無伺服器整合**：在 user-event 與 families-scan-event 兩個 Lambda 服務實作 S3 presigned URL 回傳，並以 Terraform 調整 Lambda 相關設定\n\n### **技術：**\n- Go · React Native · AWS Lambda · AWS Bedrock · Terraform",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/yenyu3/guardcircle-app"
          }
        ]
      },
      {
        "date": "2026",
        "title": "金曲猜歌王 Listen Up",
        "content": "- 個人獨立開發，以 Hitster 桌遊規則為基礎的本地多人猜歌遊戲，支援 2–20 人<br>\n- 爬蟲建置的華語歌曲庫，共 3,645 首<br>\n- 以 Docker 部署至 Fly.io，並透過 GitHub Actions 自動部署<br>",
        "tooltip": "### **個人獨立開發：**\n\n- **全端架構**：Vue 3 + TypeScript 前端、Express 後端\n- **遊戲機制**：代幣、時間線排序、挑戰與平手延長賽等有狀態的遊戲邏輯\n- **房號續玩**：遊戲狀態保存於伺服器，可透過房號恢復進行中的遊戲\n- **歌曲庫**：以爬蟲工具蒐集並驗證 3,645 首華語歌曲\n- **CI/CD**：多階段 Docker 建置，push 後由 GitHub Actions 自動部署到 Fly.io",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/stanfc/listen-up"
          },
          {
            "label": "🎮 玩遊戲",
            "url": "https://listen-up-purple-pond-1943.fly.dev/"
          }
        ]
      },
      {
        "date": "2025 Fall",
        "title": "ADL 期末專案：以 DPO 進行 LLM Jailbreak 攻擊",
        "content": "- 以 DPO 訓練 LLM 改寫模型，使用 safety guard 與 usefulness judge 作為 reward signal<br>\n- 讓模型學會改寫 prompt 以繞過 LLM 安全過濾機制<br>",
        "tooltip": "### **我的貢獻：**\n\n- **run_inference_progress.py**：實作具 tqdm 進度條、可中斷續跑的推論腳本\n- **run_eval_progress.py**：實作可即時顯示 Safety / Relevance / Acc 的評估腳本，支援續跑與加權分數計算\n\n### **我學到的事：**\n- **實驗工程**：如何設計可中斷、可恢復的大規模 LLM 評估流程\n- **指標設計**：cost-weighted accuracy 的計算方式與意義",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/joshuachen0213/ADL-Final"
          }
        ]
      },
      {
        "date": "2025",
        "title": "在 pbrt-v4 中加入 L-System 支援",
        "content": "- 在 pbrt-v4 中新增 L-System 圖形生成功能<br>\n- 實作 3D 版本的 L-System 圖形生成<br>",
        "tooltip": "### **專案特色：**\n\n- **L-System 圖形生成**：實作 L-System 圖形生成演算法\n- **PBRT-v4 擴充**：讓使用者能以 L-System 語法在 pbrt-v4 中產生複雜形體",
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
        "content": "- LaTeX 助手：讀取 LaTeX 使用手冊 PDF 回答問題，並將結果寫入檔案<br>",
        "tooltip": "### **專案特色：**\n\n- **RAG**：以兩份 LaTeX 使用手冊作為知識來源，檢索正確資訊回答問題\n- **LLM 串接**：設計提示詞，確保回答正確\n- **工具串接**：讓 Agent 能將產生的語法寫入 .tex 檔",
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
        "content": "- 可自行搜尋網路的 Agent，精準檢索使用者所需資訊<br>",
        "tooltip": "### **專案特色：**\n\n- **自主搜尋**：Agent 可自行規劃並執行網路搜尋\n- **精準檢索**：以即時搜尋結果回答，避免模型知識過時造成的錯誤",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/stanfc/agent-project"
          }
        ]
      },
      {
        "date": "2024 Fall",
        "title": "遊戲程式設計",
        "content": "- 參與 CAGED 遊戲團隊開發，負責品質修正與視覺特效<br>",
        "tooltip": "### **我在團隊中的角色：**\n- **品質保證**：修正遊戲中品質不足的部分\n- **VFX**：製作遊戲特效、聲光效果與劇情動畫\n\n### **我學到的事：**\n\n- **團隊合作**：在小型團隊中分工與遵循開發流程\n- **Git 協作**：使用 Git 與 GitHub 進行團隊版本控制",
        "links": [
          {
            "label": "🎮 玩遊戲",
            "url": "https://fhvirus.itch.io/caged?fbclid=IwZXh0bgNhZW0CMTAAAR3sYiRt9_hX8UyU68FCerY5O92KcjUp45jFvAippdTQ-LYH3yQsvf7chzQ_aem__vxlOau9PK69ds_E1oiPTQ"
          }
        ]
      },
      {
        "date": "2024 Fall",
        "title": "機器學習",
        "content": "- 實作多種機器學習演算法<br>\n- 參與 MLB 賽果預測 Kaggle 競賽<br>",
        "tooltip": "### **我在團隊中的貢獻：**\n\n- **Kaggle 競賽**：嘗試 CatBoost 與 Random Forest 模型\n\n### **我學到的事：**\n\n- **特徵與模型設計**：結合領域知識設計特徵，往往能帶來意想不到的效果",
        "links": []
      },
      {
        "date": "2024",
        "title": "YouTube 評論情緒分析工具",
        "content": "- 以機器學習分類 YouTube 評論的正負面情緒，並產生文字雲<br>",
        "tooltip": "### **專案特色：**\n\n- **自行訓練**：可使用自訂資料集執行腳本訓練模型，支援不同語言\n- **簡單易用**：輸入 YouTube 網址即可產生正負面文字雲",
        "links": [
          {
            "label": "🔗 查看專案",
            "url": "https://github.com/stanfc/Youtube-Comment-Emotion-Prediction-Tool"
          }
        ]
      },
      {
        "date": "2024 Spring",
        "title": "視覺特效",
        "content": "- 實作 HDR 與影像拼接演算法<br>\n- 使用 Blender 製作特效影片<br>",
        "tooltip": "### **我在團隊中的貢獻：**\n\n- **HDR**：實作影像對齊與 Mitsunaga and Nayar 演算法\n- **影像拼接**：實作圓柱投影、特徵配對與影像融合\n- **Blender**：3D 動畫製作\n\n### **我學到的事：**\n\n- **Python 效能優化**：以多執行緒與迴圈優化提升大量運算的速度",
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
      }
    ]
  },
  "en": {
    "title": "Selected Projects & Coursework",
    "items": [
      {
        "date": "Aug 2026",
        "title": "AI City Commander — Urban Incident Response",
        "content": "- Hackathon project: AI-assisted incident-response platform for city traffic and crowd events<br>\n- SOP-aware LLM decision support, automated reporting, and AWS serverless infrastructure<br>",
        "tooltip": "### **My Contributions:**\n\n- **AI pipeline design**: Designed the LLM decision and reasoning pipeline that turns SOP rules and live city state into explainable recommendations\n- **Latency**: Parallelized independent LLM decision calls to reduce replanning latency\n- **Testing & integration**: Tested the AI pipeline and integrated it with the backend services\n\n### **Tech:**\n- Python · React · AWS · Amazon Bedrock · Terraform",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/yenyu3/ai-city-commander"
          }
        ]
      },
      {
        "date": "Mar 2026",
        "title": "GuardCircle — Family Anti-Scam App",
        "content": "- Hackathon project: family anti-scam app with multimodal risk analysis of text, URLs, phone numbers, images, files, audio, and video<br>\n- Family circles, event overview, and notifications with explainable AI risk assessments<br>",
        "tooltip": "### **My Contributions:**\n\n- **AI pipeline design & testing**: Designed and tested the multimodal analysis pipeline\n- **AWS Bedrock integration**: Built the Go analysis service that calls Bedrock for multimodal risk reasoning\n- **Backend / serverless**: Implemented S3 presigned URL responses in the user-event and families-scan-event Lambda services, and adjusted Lambda infrastructure in Terraform\n\n### **Tech:**\n- Go · React Native · AWS Lambda · AWS Bedrock · Terraform",
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
        "content": "- Solo-built local multiplayer music guessing game based on Hitster rules, supporting 2–20 players<br>\n- Crawler-backed library of 3,645 Chinese-language songs<br>\n- Deployed with Docker on Fly.io via GitHub Actions<br>",
        "tooltip": "### **Solo Project:**\n\n- **Full stack**: Vue 3 + TypeScript frontend, Express backend\n- **Game mechanics**: Stateful logic for tokens, timeline placement, challenges, and tiebreakers\n- **Room recovery**: Game state is persisted on the server so in-progress games can be resumed by room code\n- **Song library**: Crawler tooling that collects and validates 3,645 Chinese-language songs\n- **CI/CD**: Multi-stage Docker build, deployed to Fly.io by GitHub Actions on every push",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/listen-up"
          },
          {
            "label": "🎮 Play Game",
            "url": "https://listen-up-purple-pond-1943.fly.dev/"
          }
        ]
      },
      {
        "date": "Fall 2025",
        "title": "ADL Final: LLM Jailbreak Attack via DPO",
        "content": "- Trained an LLM prompt rewriter with DPO, using a safety guard and a usefulness judge as reward signals<br>\n- The rewriter learns to reformulate prompts that bypass LLM safety filters<br>",
        "tooltip": "### **My Contributions:**\n\n- **run_inference_progress.py**: Inference script with a tqdm progress bar and resume-after-interrupt support\n- **run_eval_progress.py**: Evaluation script with live Safety / Relevance / Acc display, resume support, and cost-weighted scoring\n\n### **What I Learned:**\n- **Experiment engineering**: Designing large-scale LLM evaluation pipelines that can be interrupted and resumed\n- **Metric design**: How cost-weighted accuracy is computed and what it captures",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/joshuachen0213/ADL-Final"
          }
        ]
      },
      {
        "date": "2025",
        "title": "L-System Support in pbrt-v4",
        "content": "- Added L-system geometry generation to pbrt-v4<br>\n- Implemented 3D L-system generation<br>",
        "tooltip": "### **Project Features:**\n\n- **L-system generation**: Implemented the L-system geometry generation algorithm\n- **pbrt-v4 extension**: Lets users build complex shapes in pbrt-v4 using L-system syntax",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/pbrt-plus-v4/tree/l-system"
          }
        ]
      },
      {
        "date": "Spring 2025",
        "title": "RAG Agent",
        "content": "- LaTeX assistant that answers questions from LaTeX manuals (PDF) and writes the results to files<br>",
        "tooltip": "### **Project Features:**\n\n- **RAG**: Retrieves answers from two LaTeX user manuals\n- **LLM integration**: Prompt design for accurate answers\n- **Tool use**: The agent writes generated LaTeX into .tex files",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/agent-project"
          }
        ]
      },
      {
        "date": "Spring 2025",
        "title": "Deep Research Agent",
        "content": "- Agent that searches the web on its own to retrieve the information a user needs<br>",
        "tooltip": "### **Project Features:**\n\n- **Autonomous search**: The agent plans and runs its own web searches\n- **Up-to-date answers**: Grounds responses in live search results instead of the model's outdated knowledge",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/agent-project"
          }
        ]
      },
      {
        "date": "Fall 2024",
        "title": "Game Programming",
        "content": "- Contributed QA and visual effects to CAGED, a team-developed game<br>",
        "tooltip": "### **My Role:**\n- **Quality assurance**: Fixed areas where the game's polish fell short\n- **VFX**: Built in-game effects, audio-visual feedback, and story animations\n\n### **What I Learned:**\n\n- **Teamwork**: Dividing work and following a development process in a small team\n- **Git**: Version control with Git and GitHub in a team setting",
        "links": [
          {
            "label": "🎮 Play Game",
            "url": "https://fhvirus.itch.io/caged?fbclid=IwZXh0bgNhZW0CMTAAAR3sYiRt9_hX8UyU68FCerY5O92KcjUp45jFvAippdTQ-LYH3yQsvf7chzQ_aem__vxlOau9PK69ds_E1oiPTQ"
          }
        ]
      },
      {
        "date": "Fall 2024",
        "title": "Machine Learning",
        "content": "- Implemented core machine learning algorithms<br>\n- Built MLB game-outcome prediction models for a Kaggle competition<br>",
        "tooltip": "### **My Contributions:**\n\n- **Kaggle competition**: Experimented with CatBoost and Random Forest models\n\n### **What I Learned:**\n\n- **Feature and model design**: Combining domain knowledge with modeling choices often pays off in unexpected ways",
        "links": []
      },
      {
        "date": "2024",
        "title": "YouTube Comment Sentiment Tool",
        "content": "- Classifies YouTube comments as positive or negative and turns them into word clouds<br>",
        "tooltip": "### **Project Features:**\n\n- **Custom training**: Train the model on your own dataset with the included scripts (works for different languages)\n- **Easy to use**: Paste a YouTube URL to generate positive/negative word clouds",
        "links": [
          {
            "label": "🔗 View Project",
            "url": "https://github.com/stanfc/Youtube-Comment-Emotion-Prediction-Tool"
          }
        ]
      },
      {
        "date": "Spring 2024",
        "title": "Visual Effects (VFX)",
        "content": "- Implemented HDR imaging and image stitching algorithms<br>\n- Produced effects videos in Blender<br>",
        "tooltip": "### **My Contributions:**\n\n- **HDR**: Implemented image alignment and the Mitsunaga and Nayar method\n- **Image stitching**: Implemented cylindrical projection, feature matching, and blending\n- **Blender**: 3D animation\n\n### **What I Learned:**\n\n- **Python performance**: Speeding up heavy loops with multithreading and loop optimization",
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
