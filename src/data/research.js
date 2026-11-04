export const researchData = {
  "zh": {
    "title": "研究與論文",
    "publicationsTitle": "論文發表",
    "projectsTitle": "研究經歷",
    "publications": [
      {
        "title": "Preventing Collapse in Long-Horizon Continual Test-Time Adaptation for Open-Vocabulary Semantic Segmentation",
        "url": "https://openreview.net/forum?id=pHhBlg59AU",
        "authors": "<strong>Shuan-Shaw Chen*</strong>, Te-Kai Yen*, Tai-I Chen, Shao-Yuan Lo",
        "venue": "ICLR 2027（審查中）",
        "note": "* 共同第一作者（同等貢獻）"
      }
    ],
    "items": [
      {
        "date": "2026.9 – 至今",
        "title": "NTU TRAI Lab",
        "role": "碩士生 · 指導教授：羅紹元教授",
        "description": "研究方向：<br>\n- 開放詞彙語意分割（Open-Vocabulary Semantic Segmentation）<br>\n- 持續適應（Continual Adaptation）<br>\n- 視覺語言模型的穩健性與適應<br>\n- 動態演變的類別詞彙<br>",
        "tooltip": "",
        "links": []
      },
      {
        "date": "2024 – 2025",
        "title": "使用深度估計提升 Gaussian Splatting 模型的穩健性",
        "role": "大學部專題研究",
        "description": "利用深度估計找出並修正不一致的 Gaussian，以減少渲染瑕疵並提升模型穩健性。",
        "tooltip": "### **研究方法：**\n\n- **初始化影響分析**：比較以不同數量照片產生的初始點雲，在相同訓練資料下對最終 splatting 品質的影響\n- **修正錯位的 Gaussian**：以 Diffusion Model 的深度估計為參考，透過渲染找出位置錯誤的 Gaussian 並移回正確位置\n- **訓練流程設計**：在訓練迭代之間插入修正步驟，減少噪點與漂浮物",
        "links": [
          {
            "label": "📃 查看報告",
            "url": "https://drive.google.com/file/d/15socf0mkWe1OrEC5ysWpTwXxJ1jAjuEh/view?usp=sharing"
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Research & Publications",
    "publicationsTitle": "Publications",
    "projectsTitle": "Research Experience",
    "publications": [
      {
        "title": "Preventing Collapse in Long-Horizon Continual Test-Time Adaptation for Open-Vocabulary Semantic Segmentation",
        "url": "https://openreview.net/forum?id=pHhBlg59AU",
        "authors": "<strong>Shuan-Shaw Chen*</strong>, Te-Kai Yen*, Tai-I Chen, Shao-Yuan Lo",
        "venue": "ICLR 2027 — Under Review",
        "note": "* Equal contribution"
      }
    ],
    "items": [
      {
        "date": "Sep 2026 – Present",
        "title": "NTU TRAI Lab",
        "role": "M.S. Student · Advisor: Prof. Shao-Yuan Lo",
        "description": "Research interests:<br>\n- Open-vocabulary semantic segmentation<br>\n- Continual adaptation<br>\n- Robustness and adaptation of vision-language models<br>\n- Dynamic, evolving class vocabularies<br>",
        "tooltip": "",
        "links": []
      },
      {
        "date": "2024 – 2025",
        "title": "Using Depth Estimation to Improve Robustness of Gaussian Splatting Models",
        "role": "Undergraduate Research Project",
        "description": "Used depth estimation to identify and refine inconsistent Gaussians, with the goal of reducing rendering artifacts and improving robustness.",
        "tooltip": "### **Approach:**\n\n- **Initialization study**: Compared how initial point clouds built from different numbers of photos affect final splatting quality when trained on the same images\n- **Correcting misplaced Gaussians**: Used diffusion-based depth estimation as a reference to locate misplaced Gaussians through rendering and move them to consistent positions\n- **Training pipeline**: Inserted correction steps between training iterations to reduce noise and floaters",
        "links": [
          {
            "label": "📃 View Report",
            "url": "https://drive.google.com/file/d/15socf0mkWe1OrEC5ysWpTwXxJ1jAjuEh/view?usp=sharing"
          }
        ]
      }
    ]
  }
};

const STORAGE_KEY = 'admin_research';

export function getResearchData() {
  if (process.env.NODE_ENV === 'development') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
  }
  return researchData;
}

export function saveResearchData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetResearchData() {
  localStorage.removeItem(STORAGE_KEY);
}
