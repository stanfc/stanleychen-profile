# Shuan-Shaw Chen - Personal Portfolio

陳璿修 (Shuan-Shaw Chen) 的個人作品集網站，使用 React 開發。

## 🌟 特色

- **中英雙語**：一鍵切換中文 / 英文
- **響應式設計**：支援桌面和手機裝置
- **作品集頁面**：依優先度與日期排序，支援搜尋與標籤篩選
- **互動元素**：星星背景、可互動的貓咪、畢業大逃殺小遊戲
- **內容管理**：開發模式下可在 `/admin` 編輯所有區塊內容

## 🚀 快速開始

```bash
npm install     # 安裝依賴
npm start       # 開發伺服器：http://localhost:3000/stanleychen-profile
npm run build   # 建置正式版本
```

## 🌐 部署

push 到 `main` 後，GitHub Actions 會自動建置並部署到 GitHub Pages：

**https://stanfc.github.io/stanleychen-profile**

詳細設定與常見問題請見 [DEPLOYMENT.md](DEPLOYMENT.md)。

## 📁 專案結構

```
src/
├── components/              # React 組件
│   ├── Header.js            # 頁首（姓名、職稱、聯絡方式）
│   ├── Profile.js           # 首頁：組合以下各區塊
│   ├── AboutMe.js           # 關於我
│   ├── Education.js         # 學歷
│   ├── Research.js          # 研究與論文
│   ├── WorkExperience.js    # 工作經歷
│   ├── TechnicalSkills.js   # 技能專長
│   ├── Experience.js        # 精選專案與課程
│   ├── ExpandableDetails.js # 可展開的詳細內容
│   ├── Portfolio.js         # 作品集頁面（/portfolio）
│   ├── Transcript.js        # 成績單頁面（/transcript）
│   ├── GalleryHeist.js      # 畢業大逃殺（/heist）
│   ├── Pet.js               # 互動貓咪
│   ├── AdminPage.js         # 內容管理（/admin，僅開發模式）
│   └── ...                  # Drawer、LanguageToggle、StarsBackground 等
├── data/                    # 網站內容（中英文）
│   ├── aboutMe.js
│   ├── education.js
│   ├── research.js
│   ├── workExperience.js
│   ├── skills.js
│   ├── experience.js
│   ├── portfolio.js
│   └── transcript.js
├── styles/                  # 樣式檔案
└── App.js                   # 路由與主要應用
public/                      # 靜態檔案（作品縮圖、Transcript.pdf 等）
scripts/sync-admin.js        # 將 /admin 匯出的 JSON 寫回 src/data/
.github/workflows/deploy.yml # 自動部署
```

## ✏️ 更新內容

網站內容都在 `src/data/*.js`，可以直接編輯，或在開發模式下使用 `/admin`：

1. `npm start` 後開啟 `/admin` 編輯並儲存
2. 到「匯出/匯入」產生 JSON，存成 `export.json`
3. `npm run sync-admin export.json` 寫回 `src/data/`
4. commit 並 push，自動部署

作品集排序：`portfolio.js` 中可設定 `priority`（數字越小越前面），未設定的項目依日期由新到舊排列。

## 🛠️ 技術棧

- **React 18** + **React Router 7**
- **react-markdown**、**PapaParse**
- **CSS3**：樣式與動畫
- **GitHub Actions** + **GitHub Pages**：自動部署

## 📄 授權

MIT License
