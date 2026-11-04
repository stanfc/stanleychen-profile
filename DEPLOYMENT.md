# 🚀 部署指南

網站透過 **GitHub Actions** 自動部署到 GitHub Pages：

**https://stanfc.github.io/stanleychen-profile**

## 運作方式

只要 push 到 `main`，[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 就會自動：

1. `npm ci` 安裝依賴
2. `npm run build` 建置正式版本
3. 複製 `build/index.html` 為 `build/404.html`（讓 `/portfolio`、`/transcript` 等路由重新整理時不會 404）
4. 上傳 `build/` 並部署到 GitHub Pages

部署進度可在 repository 的 **Actions** 分頁查看，通常 1–3 分鐘完成。

## 首次設定（只需做一次）

1. 進入 GitHub repository → **Settings** → **Pages**
2. **Build and deployment → Source** 選擇 **GitHub Actions**
3. 儲存後，push 一次 `main`，或到 Actions 分頁手動執行 workflow

> 如果 Source 仍是「Deploy from a branch / gh-pages」，workflow 部署的內容不會生效。

## 日常更新流程

```bash
git add -A
git commit -m "描述你的變更"
git push origin main
```

push 完成後就會自動部署，不需要再執行其他指令。

### 手動觸發部署

不想 push 新 commit 也可以重新部署：

1. 到 repository 的 **Actions** 分頁
2. 左側選擇 **Deploy to GitHub Pages**
3. 點 **Run workflow** → 選 `main` → **Run workflow**

## 本機開發

```bash
npm install        # 安裝依賴
npm start          # 開發伺服器：http://localhost:3000/stanleychen-profile
npm run build      # 建置正式版本到 build/
```

### 內容管理（Admin）

開發模式下可在 `/admin` 編輯各區塊內容，修改會存在瀏覽器的 localStorage，**不會**直接進入正式站。要套用到正式站：

1. 在 `/admin` →「匯出/匯入」→「產生 JSON」，複製後存成 `export.json`
2. 執行 `npm run sync-admin export.json`，把內容寫回 `src/data/*.js`
3. commit 並 push

## 常見問題

### Q: push 了但 Actions 沒有執行？
- 確認 push 的是 `main` 分支
- 確認 `.github/workflows/deploy.yml` 已經 commit 並 push

### Q: Actions 成功了但網站沒更新？
- 確認 Settings → Pages → Source 是 **GitHub Actions**（見「首次設定」）
- 瀏覽器強制重新整理（Cmd/Ctrl + Shift + R）清除快取

### Q: Build 步驟失敗？
- 先在本機執行 `npm run build`，確認沒有編譯錯誤
- 若是新增了套件，確認 `package-lock.json` 也有一起 commit（CI 使用 `npm ci`）

### Q: 本機正常但正式站內容不同？
- 本機 dev 模式會優先讀取 `/admin` 存在 localStorage 的資料；正式站只讀 `src/data/*.js`。請依「內容管理」步驟同步。

### Q: 圖片無法顯示？
- 圖片放在 `public/`，在資料檔中只寫檔名（例如 `"thumbnail": "listen-up.png"`），程式會自動加上 `PUBLIC_URL`。

### Q: 想改網址？
- 修改 `package.json` 的 `homepage` 欄位，以及 `src/App.js` 中 `Router` 的 `basename`。

## 舊的手動部署方式（備用）

`package.json` 仍保留 `npm run deploy`（使用 `gh-pages` 套件推送到 `gh-pages` 分支）。只有在 Pages Source 改回「Deploy from a branch → gh-pages」時才會生效；一般情況請使用上面的 GitHub Actions 流程。
