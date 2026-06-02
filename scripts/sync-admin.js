#!/usr/bin/env node
/**
 * 用法：
 *   node scripts/sync-admin.js export.json
 *   cat export.json | node scripts/sync-admin.js
 *
 * 將 admin 匯出的 JSON 同步回 src/data/ 各檔案。
 * 只會更新 JSON 裡有的 key，沒有的 key 不動。
 */

const fs = require('fs');
const path = require('path');

// ── 讀取 JSON 輸入 ─────────────────────────────────────────────────────────────
let raw = '';
const inputFile = process.argv[2];

if (inputFile) {
  raw = fs.readFileSync(path.resolve(inputFile), 'utf-8');
} else {
  raw = fs.readFileSync('/dev/stdin', 'utf-8');
}

let input;
try {
  input = JSON.parse(raw);
} catch (e) {
  console.error('❌ JSON 解析失敗：', e.message);
  process.exit(1);
}

const dataDir = path.join(__dirname, '../src/data');

// ── 各 key 對應的寫入邏輯 ──────────────────────────────────────────────────────
const handlers = {
  admin_aboutMe(data) {
    const file = path.join(dataDir, 'aboutMe.js');
    const content = fs.readFileSync(file, 'utf-8');
    const updated = replaceExport(content, 'aboutMeData', data);
    fs.writeFileSync(file, updated);
    console.log('✅ aboutMe.js');
  },

  admin_education(data) {
    const file = path.join(dataDir, 'education.js');
    const content = fs.readFileSync(file, 'utf-8');
    const updated = replaceExport(content, 'educationData', data);
    fs.writeFileSync(file, updated);
    console.log('✅ education.js');
  },

  admin_workExperience(data) {
    const file = path.join(dataDir, 'workExperience.js');
    const content = fs.readFileSync(file, 'utf-8');
    const updated = replaceExport(content, 'workExperienceData', data);
    fs.writeFileSync(file, updated);
    console.log('✅ workExperience.js');
  },

  admin_skills(data) {
    const file = path.join(dataDir, 'skills.js');
    const content = fs.readFileSync(file, 'utf-8');
    const updated = replaceExport(content, 'skillsData', data);
    fs.writeFileSync(file, updated);
    console.log('✅ skills.js');
  },

  admin_experience(data) {
    const file = path.join(dataDir, 'experience.js');
    const content = fs.readFileSync(file, 'utf-8');
    const updated = replaceExport(content, 'experienceData', data);
    fs.writeFileSync(file, updated);
    console.log('✅ experience.js');
  },

  admin_portfolio(data) {
    const file = path.join(dataDir, 'portfolio.js');
    const content = fs.readFileSync(file, 'utf-8');
    const updated = replaceExport(content, 'portfolioItems', data);
    fs.writeFileSync(file, updated);
    console.log('✅ portfolio.js');
  },

  admin_transcript(data) {
    const file = path.join(dataDir, 'transcript.js');
    const content = fs.readFileSync(file, 'utf-8');
    const updated = replaceExport(content, 'transcriptData', data);
    fs.writeFileSync(file, updated);
    console.log('✅ transcript.js');
  },
};

// ── 核心：替換 JS 檔中 export const <name> = ... 的值 ─────────────────────────
function replaceExport(fileContent, exportName, newValue) {
  const json = JSON.stringify(newValue, null, 2);
  // 找到 `export const <name> =` 開頭，一直到下一個 `export` 或檔案結束前的分號
  const regex = new RegExp(
    `(export const ${exportName}\\s*=\\s*)([\\s\\S]*?)(;\\s*\\n(?:export|const|function|$))`,
    'm'
  );

  if (regex.test(fileContent)) {
    return fileContent.replace(regex, (_, prefix, _oldVal, suffix) => {
      return `${prefix}${json}${suffix}`;
    });
  }

  // fallback：找到第一個 export const <name> = 後整段取代到分號
  const start = fileContent.indexOf(`export const ${exportName}`);
  if (start === -1) {
    console.warn(`⚠️  找不到 export const ${exportName}，跳過`);
    return fileContent;
  }

  const eqIdx = fileContent.indexOf('=', start);
  // 找到對應的結束分號（跳過 object/array 內的分號）
  let depth = 0;
  let end = eqIdx + 1;
  let inString = false;
  let strChar = '';

  while (end < fileContent.length) {
    const ch = fileContent[end];

    if (inString) {
      if (ch === strChar && fileContent[end - 1] !== '\\') inString = false;
    } else {
      if (ch === '"' || ch === "'" || ch === '`') { inString = true; strChar = ch; }
      else if (ch === '{' || ch === '[') depth++;
      else if (ch === '}' || ch === ']') depth--;
      else if (ch === ';' && depth === 0) break;
    }
    end++;
  }

  return fileContent.slice(0, eqIdx + 1) + '\n' + json + fileContent.slice(end);
}

// ── 執行 ───────────────────────────────────────────────────────────────────────
let updated = 0;
for (const [key, handler] of Object.entries(handlers)) {
  if (key in input) {
    handler(input[key]);
    updated++;
  }
}

if (updated === 0) {
  console.warn('⚠️  JSON 中沒有任何已知的 admin_* key，沒有更新任何檔案。');
  console.warn('   已知的 key：', Object.keys(handlers).join(', '));
} else {
  console.log(`\n✨ 完成，共更新 ${updated} 個檔案。`);
}
