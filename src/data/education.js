export const educationData = {
  zh: {
    title: "學歷",
    items: [
      {
        date: "2019-2022",
        school: "國立新竹科學園區實驗高級中等學校",
        department: "科學班",
        gpa: "",
      },
      {
        date: "2022-2023",
        school: "國立陽明交通大學",
        department: "資訊工程學系",
        gpa: "GPA: 4.3 / 4.3",
      },
      {
        date: "2023-2026",
        school: "國立臺灣大學",
        department: "資訊工程學系",
        gpa: "GPA: 4.26 / 4.3",
      },
    ],
  },
  en: {
    title: "Education",
    items: [
      {
        date: "2019-2022",
        school: "National Experimental High School",
        department: "Science Class",
        gpa: "",
      },
      {
        date: "2022-2023",
        school: "National Yang Ming Chiao Tung University",
        department: "Department of Computer Science",
        gpa: "GPA: 4.3 / 4.3",
      },
      {
        date: "2023-2026",
        school: "National Taiwan University",
        department: "Department of Computer Science and Information Engineering",
        gpa: "GPA: 4.26 / 4.3",
      },
    ],
  },
};

const STORAGE_KEY = 'admin_education';

export function getEducationData() {
  if (process.env.NODE_ENV === 'development') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
  }
  return educationData;
}

export function saveEducationData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetEducationData() {
  localStorage.removeItem(STORAGE_KEY);
}
