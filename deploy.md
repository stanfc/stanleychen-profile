# 🚀 GitHub 部署指南

本指南將教你如何將 React 專案部署到 GitHub Pages。

## 📋 前置需求

- 已安裝 Node.js 和 npm
- 已安裝 Git
- 有 GitHub 帳號

## 🛠️ 步驟 1：準備專案檔案

### 1.1 確保有 package.json
如果專案中沒有 `package.json`，創建一個包含以下內容的檔案：

```json
{
  "name": "stanleychen-profile",
  "version": "1.0.0",
  "description": "Stanley Chen's personal portfolio website built with React",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "gh-pages": "^3.2.3"
  },
  "homepage": "https://stanfc.github.io/stanleychen-profile"
}
```

### 1.2 確保有 .gitignore
創建 `.gitignore` 檔案：

```gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## 📦 步驟 2：安裝依賴

```bash
npm install
```

## 🔧 步驟 3：Git 初始化和提交

### 3.1 初始化 Git（如果還沒初始化）
```bash
git init
```

### 3.2 加入所有檔案
```bash
git add .
```

### 3.3 提交第一個版本
```bash
git commit -m "Initial commit: Stanley Chen personal portfolio website"
```

## 🌐 步驟 4：在 GitHub 上創建 Repository

1. 前往 [GitHub.com](https://github.com)
2. 點擊右上角的 "+" 號，選擇 "New repository"
3. Repository 名稱輸入：`stanleychen-profile`
4. 選擇 "Public"（公開）
5. **不要**勾選 "Initialize this repository with a README"
6. 點擊 "Create repository"

## 🔗 步驟 5：連接本地專案到 GitHub

### 5.1 添加遠端 repository
```bash
git remote add origin https://github.com/stanfc/stanleychen-profile.git
```

### 5.2 推送程式碼到 GitHub
```bash
git push -u origin main
```

## 📦 步驟 6：安裝部署工具

```bash
npm install gh-pages --save-dev
```

## 🚀 步驟 7：部署到 GitHub Pages

```bash
npm run deploy
```

## ✅ 完成！

你的網站現在可以透過以下網址訪問：
**https://stanfc.github.io/stanleychen-profile**

## 🔄 後續更新流程

### 當你要更新網站時：

1. **修改程式碼**

2. **提交變更**：
   ```bash
   git add .
   git commit -m "更新描述"
   git push origin main
   ```

3. **重新部署**：
   ```bash
   npm run deploy
   ```

## 🛠️ 常用開發指令

```bash
npm start          # 啟動開發伺服器
npm run build      # 建置生產版本
npm test           # 執行測試
npm run deploy     # 部署到 GitHub Pages
```

## ⚙️ GitHub Pages 設定

確保在 GitHub repository 設定中：

1. 前往 Settings > Pages
2. Source 設為 "Deploy from a branch"
3. Branch 設為 "gh-pages"
4. 點擊 Save

## 📝 重要提醒

1. **網址更新**：如果 repository 名稱改變，記得更新 `package.json` 中的 `homepage` 欄位
2. **自動部署**：每次執行 `npm run deploy` 都會自動建置並部署最新版本
3. **部署時間**：部署後可能需要幾分鐘才能在網路上看到更新

## 🐛 常見問題

### Q: 部署後網站無法訪問？
A: 檢查 GitHub Pages 設定是否正確，確保 Source 設為 "gh-pages" branch

### Q: 本地開發正常但部署後有問題？
A: 檢查 `package.json` 中的 `homepage` 欄位是否正確

### Q: 如何更改網站網址？
A: 修改 `package.json` 中的 `homepage` 欄位，然後重新部署

---

**最後更新**：2024年12月
**版本**：1.0.0 