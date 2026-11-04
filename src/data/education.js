export const educationData = {
  "zh": {
    "title": "學歷",
    "items": [
      {
        "date": "2026.9 – 2028.6（預計）",
        "school": "國立臺灣大學",
        "department": "資訊工程學系 碩士班",
        "gpa": "",
        "details": "指導教授：羅紹元教授<br>實驗室：NTU TRAI Lab"
      },
      {
        "date": "2023.9 – 2026.6",
        "school": "國立臺灣大學",
        "department": "資訊工程學系 學士班",
        "gpa": "GPA：4.22 / 4.30",
        "details": "系排：12 / 150（前 8%）"
      },
      {
        "date": "2022 – 2023",
        "school": "國立陽明交通大學",
        "department": "資訊工程學系",
        "gpa": "GPA：4.3 / 4.3",
        "details": ""
      },
      {
        "date": "2019 – 2022",
        "school": "國立新竹科學園區實驗高級中等學校",
        "department": "科學班",
        "gpa": "",
        "details": ""
      }
    ]
  },
  "en": {
    "title": "Education",
    "items": [
      {
        "date": "Sep 2026 – Jun 2028 (Expected)",
        "school": "National Taiwan University",
        "department": "M.S. in Computer Science and Information Engineering",
        "gpa": "",
        "details": "Advisor: Prof. Shao-Yuan Lo<br>Lab: NTU TRAI Lab"
      },
      {
        "date": "Sep 2023 – Jun 2026",
        "school": "National Taiwan University",
        "department": "B.S. in Computer Science and Information Engineering",
        "gpa": "GPA: 4.22 / 4.30",
        "details": "Rank: 12 / 150 (Top 8%)"
      },
      {
        "date": "2022 – 2023",
        "school": "National Yang Ming Chiao Tung University",
        "department": "Department of Computer Science",
        "gpa": "GPA: 4.3 / 4.3",
        "details": ""
      },
      {
        "date": "2019 – 2022",
        "school": "National Experimental High School",
        "department": "Science Program",
        "gpa": "",
        "details": ""
      }
    ]
  }
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
