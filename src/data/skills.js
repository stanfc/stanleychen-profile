export const skillsData = {
  labels: {
    zh: {
      title: "技能專長",
      categories: {
        programming: "程式語言",
        frameworks: "框架工具",
        development: "開發領域",
        other: "其他技能",
      },
    },
    en: {
      title: "Technical Skills",
      categories: {
        programming: "Programming Languages",
        frameworks: "Frameworks & Tools",
        development: "Development Areas",
        other: "Other Skills",
      },
    },
  },
  skillsByCategory: {
    programming: ['C/C++', 'Python', 'Java', 'C#', 'JavaScript', 'HTML', 'SQL'],
    frameworks: ['Django', 'React.js', 'Node.js', 'Git', 'Docker'],
    development: ['Backend development', 'Frontend development', 'Database', 'ML', 'Gen AI', 'Computer vision', 'Rendering', 'VFX', 'Game programming'],
    other: ['Unity', 'Blender', 'Z3', 'Spin', 'LangChain', 'llama-index'],
  },
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
