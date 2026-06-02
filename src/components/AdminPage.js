import React, { useState, useEffect, useCallback } from 'react';
import '../styles/admin.css';
import { aboutMeData, saveAboutMeData, resetAboutMeData, getAboutMeData } from '../data/aboutMe';
import { educationData, saveEducationData, resetEducationData, getEducationData } from '../data/education';
import { workExperienceData, saveWorkExperienceData, resetWorkExperienceData, getWorkExperienceData } from '../data/workExperience';
import { skillsData, saveSkillsData, resetSkillsData, getSkillsData } from '../data/skills';
import { portfolioItems, savePortfolioItems, resetPortfolioItems, getPortfolioItems } from '../data/portfolio';
import { experienceData, saveExperienceData, resetExperienceData, getExperienceData } from '../data/experience';

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ msg, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div className="admin-toast">{msg}</div>;
}

// ─── Tags editor ──────────────────────────────────────────────────────────────
function TagsEditor({ tags, onChange }) {
  const [draft, setDraft] = useState('');

  const add = () => {
    const v = draft.trim();
    if (v && !tags.includes(v)) onChange([...tags, v]);
    setDraft('');
  };

  return (
    <div className="admin-tags-editor">
      {tags.map((t) => (
        <span key={t} className="admin-tag-chip">
          #{t}
          <button className="admin-tag-remove" onClick={() => onChange(tags.filter((x) => x !== t))}>×</button>
        </span>
      ))}
      <input
        className="admin-tag-input"
        placeholder="+ 新增 tag"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); add(); } }}
        onBlur={add}
      />
    </div>
  );
}

// ─── AboutMe tab ─────────────────────────────────────────────────────────────
function AboutMeTab({ onSave }) {
  const [data, setData] = useState(() => getAboutMeData());

  const set = (lang, field, val) =>
    setData((d) => ({ ...d, [lang]: { ...d[lang], [field]: val } }));

  const save = () => { saveAboutMeData(data); onSave('關於我已儲存'); };
  const reset = () => { resetAboutMeData(); setData(aboutMeData); onSave('已還原預設'); };

  return (
    <div className="admin-section">
      {['zh', 'en'].map((lang) => (
        <div key={lang} className="admin-card">
          <div className="admin-card-header">
            <h3>{lang === 'zh' ? '🇹🇼 中文' : '🇺🇸 English'}</h3>
          </div>
          <div className="admin-field">
            <label>標題</label>
            <input className="admin-input" value={data[lang].title} onChange={(e) => set(lang, 'title', e.target.value)} />
          </div>
          <div className="admin-field" style={{ marginTop: '0.75rem' }}>
            <label>內文（支援 HTML，如 &lt;br&gt;）</label>
            <textarea className="admin-textarea tall" value={data[lang].text} onChange={(e) => set(lang, 'text', e.target.value)} />
          </div>
        </div>
      ))}
      <div className="admin-actions">
        <button className="admin-btn admin-btn-primary" onClick={save}>儲存</button>
        <button className="admin-btn admin-btn-danger" onClick={reset}>還原預設</button>
      </div>
    </div>
  );
}

// ─── Education tab ────────────────────────────────────────────────────────────
function EducationTab({ onSave }) {
  const [data, setData] = useState(() => getEducationData());

  const setItem = (lang, idx, field, val) =>
    setData((d) => {
      const items = d[lang].items.map((it, i) => i === idx ? { ...it, [field]: val } : it);
      return { ...d, [lang]: { ...d[lang], items } };
    });

  const addItem = (lang) =>
    setData((d) => ({
      ...d,
      [lang]: { ...d[lang], items: [...d[lang].items, { date: '', school: '', department: '', gpa: '' }] },
    }));

  const removeItem = (lang, idx) =>
    setData((d) => ({
      ...d,
      [lang]: { ...d[lang], items: d[lang].items.filter((_, i) => i !== idx) },
    }));

  const save = () => { saveEducationData(data); onSave('學歷已儲存'); };
  const reset = () => { resetEducationData(); setData(educationData); onSave('已還原預設'); };

  return (
    <div className="admin-section">
      {['zh', 'en'].map((lang) => (
        <div key={lang} className="admin-card">
          <div className="admin-card-header">
            <h3>{lang === 'zh' ? '🇹🇼 中文' : '🇺🇸 English'}</h3>
            <button className="admin-btn admin-btn-secondary" style={{ fontSize: '0.8rem', padding: '0.3rem 0.7rem' }} onClick={() => addItem(lang)}>+ 新增</button>
          </div>
          <div className="admin-field" style={{ marginBottom: '1rem' }}>
            <label>標題</label>
            <input className="admin-input" value={data[lang].title} onChange={(e) => setData((d) => ({ ...d, [lang]: { ...d[lang], title: e.target.value } }))} />
          </div>
          {data[lang].items.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>第 {idx + 1} 筆</span>
                <button className="admin-btn admin-btn-danger" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={() => removeItem(lang, idx)}>刪除</button>
              </div>
              <div className="admin-row">
                <div className="admin-field">
                  <label>期間</label>
                  <input className="admin-input" value={item.date} onChange={(e) => setItem(lang, idx, 'date', e.target.value)} placeholder="2023-2026" />
                </div>
                <div className="admin-field">
                  <label>GPA</label>
                  <input className="admin-input" value={item.gpa} onChange={(e) => setItem(lang, idx, 'gpa', e.target.value)} placeholder="GPA: 4.26 / 4.3" />
                </div>
              </div>
              <div className="admin-row" style={{ marginTop: '0.5rem' }}>
                <div className="admin-field">
                  <label>學校</label>
                  <input className="admin-input" value={item.school} onChange={(e) => setItem(lang, idx, 'school', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label>系所</label>
                  <input className="admin-input" value={item.department} onChange={(e) => setItem(lang, idx, 'department', e.target.value)} />
                </div>
              </div>
              {idx < data[lang].items.length - 1 && <hr className="admin-divider" />}
            </div>
          ))}
        </div>
      ))}
      <div className="admin-actions">
        <button className="admin-btn admin-btn-primary" onClick={save}>儲存</button>
        <button className="admin-btn admin-btn-danger" onClick={reset}>還原預設</button>
      </div>
    </div>
  );
}

// ─── WorkExperience tab ───────────────────────────────────────────────────────
function WorkExperienceTab({ onSave }) {
  const [data, setData] = useState(() => getWorkExperienceData());

  const setItem = (lang, idx, field, val) =>
    setData((d) => {
      const items = d[lang].items.map((it, i) => i === idx ? { ...it, [field]: val } : it);
      return { ...d, [lang]: { ...d[lang], items } };
    });

  const addItem = (lang) =>
    setData((d) => ({
      ...d,
      [lang]: { ...d[lang], items: [...d[lang].items, { date: '', position: '', company: '', description: '' }] },
    }));

  const removeItem = (lang, idx) =>
    setData((d) => ({
      ...d,
      [lang]: { ...d[lang], items: d[lang].items.filter((_, i) => i !== idx) },
    }));

  const save = () => { saveWorkExperienceData(data); onSave('工作經歷已儲存'); };
  const reset = () => { resetWorkExperienceData(); setData(workExperienceData); onSave('已還原預設'); };

  return (
    <div className="admin-section">
      {['zh', 'en'].map((lang) => (
        <div key={lang} className="admin-card">
          <div className="admin-card-header">
            <h3>{lang === 'zh' ? '🇹🇼 中文' : '🇺🇸 English'}</h3>
            <button className="admin-btn admin-btn-secondary" style={{ fontSize: '0.8rem', padding: '0.3rem 0.7rem' }} onClick={() => addItem(lang)}>+ 新增</button>
          </div>
          <div className="admin-field" style={{ marginBottom: '1rem' }}>
            <label>標題</label>
            <input className="admin-input" value={data[lang].title} onChange={(e) => setData((d) => ({ ...d, [lang]: { ...d[lang], title: e.target.value } }))} />
          </div>
          {data[lang].items.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>第 {idx + 1} 筆</span>
                <button className="admin-btn admin-btn-danger" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={() => removeItem(lang, idx)}>刪除</button>
              </div>
              <div className="admin-row">
                <div className="admin-field">
                  <label>期間</label>
                  <input className="admin-input" value={item.date} onChange={(e) => setItem(lang, idx, 'date', e.target.value)} placeholder="2025.6 - 至今" />
                </div>
                <div className="admin-field">
                  <label>職位</label>
                  <input className="admin-input" value={item.position} onChange={(e) => setItem(lang, idx, 'position', e.target.value)} />
                </div>
              </div>
              <div className="admin-field" style={{ marginTop: '0.5rem' }}>
                <label>公司</label>
                <input className="admin-input" value={item.company} onChange={(e) => setItem(lang, idx, 'company', e.target.value)} />
              </div>
              <div className="admin-field" style={{ marginTop: '0.5rem' }}>
                <label>描述（支援 HTML，如 &lt;br&gt;）</label>
                <textarea className="admin-textarea tall" value={item.description} onChange={(e) => setItem(lang, idx, 'description', e.target.value)} />
              </div>
              {idx < data[lang].items.length - 1 && <hr className="admin-divider" />}
            </div>
          ))}
        </div>
      ))}
      <div className="admin-actions">
        <button className="admin-btn admin-btn-primary" onClick={save}>儲存</button>
        <button className="admin-btn admin-btn-danger" onClick={reset}>還原預設</button>
      </div>
    </div>
  );
}

// ─── Skills tab ───────────────────────────────────────────────────────────────
function SkillsTab({ onSave }) {
  const [data, setData] = useState(() => getSkillsData());
  const categories = Object.keys(data.skillsByCategory);

  const setSkills = (cat, skills) =>
    setData((d) => ({ ...d, skillsByCategory: { ...d.skillsByCategory, [cat]: skills } }));

  const setCatLabel = (lang, cat, val) =>
    setData((d) => ({
      ...d,
      labels: { ...d.labels, [lang]: { ...d.labels[lang], categories: { ...d.labels[lang].categories, [cat]: val } } },
    }));

  const save = () => { saveSkillsData(data); onSave('技能已儲存'); };
  const reset = () => { resetSkillsData(); setData(skillsData); onSave('已還原預設'); };

  return (
    <div className="admin-section">
      <div className="admin-card">
        <h3 style={{ margin: '0 0 1rem' }}>技能列表</h3>
        {categories.map((cat) => (
          <div key={cat} className="admin-skills-category">
            <div className="admin-row">
              <div className="admin-field">
                <label>中文分類名稱</label>
                <input className="admin-input" value={data.labels.zh.categories[cat] || ''} onChange={(e) => setCatLabel('zh', cat, e.target.value)} />
              </div>
              <div className="admin-field">
                <label>英文分類名稱</label>
                <input className="admin-input" value={data.labels.en.categories[cat] || ''} onChange={(e) => setCatLabel('en', cat, e.target.value)} />
              </div>
            </div>
            <div className="admin-field" style={{ marginTop: '0.4rem' }}>
              <label>技能項目</label>
              <TagsEditor tags={data.skillsByCategory[cat]} onChange={(v) => setSkills(cat, v)} />
            </div>
            <hr className="admin-divider" />
          </div>
        ))}
      </div>
      <div className="admin-actions">
        <button className="admin-btn admin-btn-primary" onClick={save}>儲存</button>
        <button className="admin-btn admin-btn-danger" onClick={reset}>還原預設</button>
      </div>
    </div>
  );
}

// ─── Portfolio tab ────────────────────────────────────────────────────────────
const EMPTY_ITEM = {
  id: '',
  title: { zh: '', en: '' },
  subtitle: { zh: '', en: '' },
  type: 'github',
  description: { zh: '', en: '' },
  thumbnail: '',
  tags: [],
  links: { github: '', demo: '', video: '', video2: '', paper: '' },
  date: '',
};

function PortfolioItemEditor({ item, idx, onChange, onRemove }) {
  const set = (field, val) => onChange({ ...item, [field]: val });
  const setLang = (field, lang, val) => onChange({ ...item, [field]: { ...item[field], [lang]: val } });
  const setLink = (key, val) => onChange({ ...item, links: { ...item.links, [key]: val } });

  return (
    <div className="admin-card" style={{ marginBottom: '1rem' }}>
      <div className="admin-card-header">
        <h3 style={{ fontSize: '0.95rem' }}>#{idx + 1} {item.title.zh || item.title.en || '(未命名)'}</h3>
        <button className="admin-btn admin-btn-danger" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={onRemove}>刪除</button>
      </div>

      <div className="admin-row">
        <div className="admin-field">
          <label>ID（唯一識別）</label>
          <input className="admin-input" value={item.id} onChange={(e) => set('id', e.target.value)} placeholder="my-project" />
        </div>
        <div className="admin-field">
          <label>類型 (type)</label>
          <input className="admin-input" value={item.type} onChange={(e) => set('type', e.target.value)} placeholder="github / video / web / paper" />
        </div>
      </div>

      <div className="admin-row" style={{ marginTop: '0.75rem' }}>
        <div className="admin-field">
          <label>標題（中）</label>
          <input className="admin-input" value={item.title.zh} onChange={(e) => setLang('title', 'zh', e.target.value)} />
        </div>
        <div className="admin-field">
          <label>標題（英）</label>
          <input className="admin-input" value={item.title.en} onChange={(e) => setLang('title', 'en', e.target.value)} />
        </div>
      </div>

      <div className="admin-row" style={{ marginTop: '0.5rem' }}>
        <div className="admin-field">
          <label>副標題（中）</label>
          <input className="admin-input" value={item.subtitle.zh} onChange={(e) => setLang('subtitle', 'zh', e.target.value)} />
        </div>
        <div className="admin-field">
          <label>副標題（英）</label>
          <input className="admin-input" value={item.subtitle.en} onChange={(e) => setLang('subtitle', 'en', e.target.value)} />
        </div>
      </div>

      <div className="admin-field" style={{ marginTop: '0.5rem' }}>
        <label>描述（中）</label>
        <textarea className="admin-textarea" value={item.description.zh} onChange={(e) => setLang('description', 'zh', e.target.value)} />
      </div>
      <div className="admin-field" style={{ marginTop: '0.5rem' }}>
        <label>描述（英）</label>
        <textarea className="admin-textarea" value={item.description.en} onChange={(e) => setLang('description', 'en', e.target.value)} />
      </div>

      <div className="admin-row" style={{ marginTop: '0.5rem' }}>
        <div className="admin-field">
          <label>縮圖檔名（放在 /public/）</label>
          <input className="admin-input" value={item.thumbnail} onChange={(e) => set('thumbnail', e.target.value)} placeholder="my-project.png" />
        </div>
        <div className="admin-field">
          <label>日期</label>
          <input className="admin-input" value={item.date} onChange={(e) => set('date', e.target.value)} placeholder="2025-01-15" />
        </div>
      </div>

      <div className="admin-field" style={{ marginTop: '0.5rem' }}>
        <label>標籤 (Tags)</label>
        <TagsEditor tags={item.tags || []} onChange={(v) => set('tags', v)} />
      </div>

      <div style={{ marginTop: '0.75rem' }}>
        <h2>連結</h2>
        <div className="admin-row">
          <div className="admin-field">
            <label>GitHub URL</label>
            <input className="admin-input" value={item.links?.github || ''} onChange={(e) => setLink('github', e.target.value)} />
          </div>
          <div className="admin-field">
            <label>Demo URL</label>
            <input className="admin-input" value={item.links?.demo || ''} onChange={(e) => setLink('demo', e.target.value)} />
          </div>
        </div>
        <div className="admin-row" style={{ marginTop: '0.5rem' }}>
          <div className="admin-field">
            <label>Video URL</label>
            <input className="admin-input" value={item.links?.video || ''} onChange={(e) => setLink('video', e.target.value)} />
          </div>
          <div className="admin-field">
            <label>Video 2 URL</label>
            <input className="admin-input" value={item.links?.video2 || ''} onChange={(e) => setLink('video2', e.target.value)} />
          </div>
        </div>
        <div className="admin-field" style={{ marginTop: '0.5rem' }}>
          <label>Paper / PDF URL</label>
          <input className="admin-input" value={item.links?.paper || ''} onChange={(e) => setLink('paper', e.target.value)} />
        </div>
      </div>
    </div>
  );
}

function PortfolioTab({ onSave }) {
  const [items, setItems] = useState(() => getPortfolioItems());

  const update = (idx, val) => setItems((arr) => arr.map((it, i) => i === idx ? val : it));
  const remove = (idx) => setItems((arr) => arr.filter((_, i) => i !== idx));
  const add = () => setItems((arr) => [...arr, { ...EMPTY_ITEM, id: `item-${Date.now()}` }]);

  const save = () => { savePortfolioItems(items); onSave('作品集已儲存'); };
  const reset = () => { resetPortfolioItems(); setItems(portfolioItems); onSave('已還原預設'); };

  return (
    <div className="admin-section">
      {items.map((item, idx) => (
        <PortfolioItemEditor key={item.id || idx} item={item} idx={idx} onChange={(v) => update(idx, v)} onRemove={() => remove(idx)} />
      ))}
      <button className="admin-btn admin-btn-secondary" onClick={add} style={{ alignSelf: 'flex-start' }}>+ 新增作品</button>
      <div className="admin-actions">
        <button className="admin-btn admin-btn-primary" onClick={save}>儲存全部</button>
        <button className="admin-btn admin-btn-danger" onClick={reset}>還原預設</button>
      </div>
    </div>
  );
}

// ─── Experience tab ───────────────────────────────────────────────────────────
const EMPTY_EXP_ITEM = { date: '', title: '', content: '', tooltip: '', links: [] };

function ExperienceItemEditor({ item, idx, onChange, onRemove }) {
  const set = (field, val) => onChange({ ...item, [field]: val });

  const setLink = (li, field, val) =>
    onChange({ ...item, links: item.links.map((l, i) => i === li ? { ...l, [field]: val } : l) });

  const addLink = () => onChange({ ...item, links: [...(item.links || []), { label: '', url: '' }] });
  const removeLink = (li) => onChange({ ...item, links: item.links.filter((_, i) => i !== li) });

  return (
    <div className="admin-card" style={{ marginBottom: '1rem' }}>
      <div className="admin-card-header">
        <h3 style={{ fontSize: '0.95rem' }}>#{idx + 1} {item.title || '(未命名)'}</h3>
        <button className="admin-btn admin-btn-danger" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={onRemove}>刪除</button>
      </div>

      <div className="admin-row">
        <div className="admin-field">
          <label>日期／時期</label>
          <input className="admin-input" value={item.date} onChange={(e) => set('date', e.target.value)} placeholder="2025 Spring" />
        </div>
        <div className="admin-field">
          <label>標題</label>
          <input className="admin-input" value={item.title} onChange={(e) => set('title', e.target.value)} />
        </div>
      </div>

      <div className="admin-field" style={{ marginTop: '0.75rem' }}>
        <label>內文（支援 HTML，如 &lt;br&gt;）</label>
        <textarea className="admin-textarea" value={item.content} onChange={(e) => set('content', e.target.value)} />
      </div>

      <div className="admin-field" style={{ marginTop: '0.75rem' }}>
        <label>Tooltip（支援 Markdown）</label>
        <textarea className="admin-textarea tall" value={item.tooltip} onChange={(e) => set('tooltip', e.target.value)} />
      </div>

      <div style={{ marginTop: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h2>連結</h2>
          <button className="admin-btn admin-btn-secondary" style={{ fontSize: '0.78rem', padding: '0.25rem 0.6rem' }} onClick={addLink}>+ 新增連結</button>
        </div>
        {(item.links || []).map((link, li) => (
          <div key={li} className="admin-row" style={{ marginBottom: '0.5rem', alignItems: 'center' }}>
            <div className="admin-field">
              <label>顯示文字</label>
              <input className="admin-input" value={link.label} onChange={(e) => setLink(li, 'label', e.target.value)} placeholder="🔗 查看專案" />
            </div>
            <div className="admin-field">
              <label>URL</label>
              <input className="admin-input" value={link.url} onChange={(e) => setLink(li, 'url', e.target.value)} placeholder="https://..." />
            </div>
            <button className="admin-btn admin-btn-danger" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', marginTop: '1.35rem', flexShrink: 0 }} onClick={() => removeLink(li)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceTab({ onSave }) {
  const [data, setData] = useState(() => getExperienceData());

  const update = (lang, idx, val) =>
    setData((d) => ({ ...d, [lang]: { ...d[lang], items: d[lang].items.map((it, i) => i === idx ? val : it) } }));

  const remove = (lang, idx) =>
    setData((d) => ({ ...d, [lang]: { ...d[lang], items: d[lang].items.filter((_, i) => i !== idx) } }));

  const add = (lang) =>
    setData((d) => ({ ...d, [lang]: { ...d[lang], items: [...d[lang].items, { ...EMPTY_EXP_ITEM }] } }));

  const save = () => { saveExperienceData(data); onSave('經驗已儲存'); };
  const reset = () => { resetExperienceData(); setData(experienceData); onSave('已還原預設'); };

  return (
    <div className="admin-section">
      {['zh', 'en'].map((lang) => (
        <div key={lang}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <h3 style={{ margin: 0 }}>{lang === 'zh' ? '🇹🇼 中文' : '🇺🇸 English'}</h3>
            <button className="admin-btn admin-btn-secondary" style={{ fontSize: '0.8rem', padding: '0.3rem 0.7rem' }} onClick={() => add(lang)}>+ 新增條目</button>
          </div>
          <div className="admin-field" style={{ marginBottom: '1rem' }}>
            <label>區塊標題</label>
            <input className="admin-input" value={data[lang].title} onChange={(e) => setData((d) => ({ ...d, [lang]: { ...d[lang], title: e.target.value } }))} />
          </div>
          {data[lang].items.map((item, idx) => (
            <ExperienceItemEditor key={idx} item={item} idx={idx} onChange={(v) => update(lang, idx, v)} onRemove={() => remove(lang, idx)} />
          ))}
          {lang === 'zh' && <hr className="admin-divider" style={{ margin: '1.5rem 0' }} />}
        </div>
      ))}
      <div className="admin-actions">
        <button className="admin-btn admin-btn-primary" onClick={save}>儲存全部</button>
        <button className="admin-btn admin-btn-danger" onClick={reset}>還原預設</button>
      </div>
    </div>
  );
}

// ─── Export tab ───────────────────────────────────────────────────────────────
function ExportTab({ onSave }) {
  const buildExport = () => {
    const keys = ['admin_aboutMe', 'admin_education', 'admin_workExperience', 'admin_skills', 'admin_experience', 'admin_portfolio'];
    const result = {};
    keys.forEach((k) => {
      const v = localStorage.getItem(k);
      if (v) result[k] = JSON.parse(v);
    });
    return JSON.stringify(result, null, 2);
  };

  const [text, setText] = useState('');

  const generate = () => setText(buildExport());

  const copy = () => {
    navigator.clipboard.writeText(text);
    onSave('已複製到剪貼簿');
  };

  const importData = () => {
    try {
      const parsed = JSON.parse(text);
      Object.entries(parsed).forEach(([k, v]) => localStorage.setItem(k, JSON.stringify(v)));
      onSave('匯入成功，請重新整理頁面');
    } catch {
      onSave('匯入失敗：JSON 格式有誤');
    }
  };

  const clearAll = () => {
    ['admin_aboutMe', 'admin_education', 'admin_workExperience', 'admin_skills', 'admin_experience', 'admin_portfolio']
      .forEach((k) => localStorage.removeItem(k));
    setText('');
    onSave('已清除所有 localStorage 暫存');
  };

  return (
    <div className="admin-section">
      <div className="admin-card">
        <h3 style={{ margin: '0 0 0.75rem' }}>匯出目前 localStorage 暫存</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 1rem' }}>
          將目前所有已儲存的修改匯出成 JSON，可備份或分享給他人匯入。
        </p>
        <div className="admin-actions">
          <button className="admin-btn admin-btn-secondary" onClick={generate}>產生 JSON</button>
          {text && <button className="admin-btn admin-btn-primary" onClick={copy}>複製</button>}
        </div>
        {text && <pre className="admin-export-box" style={{ marginTop: '1rem' }}>{text}</pre>}
      </div>

      <div className="admin-card">
        <h3 style={{ margin: '0 0 0.75rem' }}>匯入 JSON</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 0.75rem' }}>
          貼入先前匯出的 JSON，可還原所有設定。
        </p>
        <textarea className="admin-textarea tall" value={text} onChange={(e) => setText(e.target.value)} placeholder='{"admin_aboutMe": {...}, ...}' />
        <div className="admin-actions" style={{ marginTop: '0.5rem' }}>
          <button className="admin-btn admin-btn-primary" onClick={importData}>匯入</button>
        </div>
      </div>

      <div className="admin-card">
        <h3 style={{ margin: '0 0 0.75rem' }}>清除所有暫存</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 0.75rem' }}>
          刪除所有 admin_* localStorage 項目，頁面將還原為程式碼內預設值。
        </p>
        <button className="admin-btn admin-btn-danger" onClick={clearAll}>清除全部暫存</button>
      </div>
    </div>
  );
}

// ─── Main AdminPage ───────────────────────────────────────────────────────────
const TABS = [
  { key: 'about', label: '關於我' },
  { key: 'education', label: '學歷' },
  { key: 'work', label: '工作經歷' },
  { key: 'skills', label: '技能' },
  { key: 'experience', label: '經驗' },
  { key: 'portfolio', label: '作品集' },
  { key: 'export', label: '匯出/匯入' },
];

const AdminPage = () => {
  const [tab, setTab] = useState('about');
  const [toast, setToast] = useState(null);

  const showToast = useCallback((msg) => setToast(msg), []);
  const clearToast = useCallback(() => setToast(null), []);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>內容管理</h1>
        <span className="admin-badge">DEV ONLY</span>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '-1rem 0 1.5rem' }}>
        修改後按「儲存」，資料會存在 localStorage，重新整理後在本機生效。正式部署版不包含此頁面。
      </p>

      <div className="admin-tabs">
        {TABS.map((t) => (
          <button key={t.key} className={`admin-tab${tab === t.key ? ' active' : ''}`} onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'about' && <AboutMeTab onSave={showToast} />}
      {tab === 'education' && <EducationTab onSave={showToast} />}
      {tab === 'work' && <WorkExperienceTab onSave={showToast} />}
      {tab === 'skills' && <SkillsTab onSave={showToast} />}
      {tab === 'experience' && <ExperienceTab onSave={showToast} />}
      {tab === 'portfolio' && <PortfolioTab onSave={showToast} />}
      {tab === 'export' && <ExportTab onSave={showToast} />}

      {toast && <Toast msg={toast} onDone={clearToast} />}
    </div>
  );
};

export default AdminPage;
