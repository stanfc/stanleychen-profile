export const skillsData = {
  "labels": {
    "zh": {
      "title": "技能專長",
      "categories": {
        "programming": "程式語言",
        "ai": "AI / 研究",
        "backend": "後端 / 基礎架構",
        "frontend": "前端 / 其他"
      }
    },
    "en": {
      "title": "Technical Skills",
      "categories": {
        "programming": "Programming",
        "ai": "AI / Research",
        "backend": "Backend / Infrastructure",
        "frontend": "Frontend / Other"
      }
    }
  },
  "skillsByCategory": {
    "programming": ["Python", "C/C++", "Go", "TypeScript / JavaScript", "C#"],
    "ai": ["PyTorch", "CLIP", "MMSegmentation", "OpenCV", "LLM Agents", "RAG"],
    "backend": ["Django", "PostgreSQL", "Redis", "Celery", "Docker", "AWS", "Terraform", "Git", "Linux"],
    "frontend": ["React", "React Native", "Vue", "Node.js / Express", "Unity", "Blender"]
  }
};

const STORAGE_KEY = 'admin_skills';

export function getSkillsData() {
  if (process.env.NODE_ENV === 'development') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
  }
  return skillsData;
}

export function saveSkillsData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetSkillsData() {
  localStorage.removeItem(STORAGE_KEY);
}
