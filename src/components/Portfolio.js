import React, { useMemo, useState } from 'react';

// Local, theme-aligned minimal UI using existing site styles
// No external UI libs; keeps look consistent with cards/buttons already used

export const getItems = (lang) => [
  {
    id: 'vfx',
    title: lang === 'zh' ? '視覺特效（VFX）' : 'VFX',
    subtitle: lang === 'zh' ? 'Blender · HDR · 圖像融合' : 'Blender · HDR · Image Fusion',
    type: 'video',
    description: lang === 'zh' ? '課程作品：實作 HDR、圖像配對與融合，並以 Blender 製作動畫。' : 'Course projects: HDR, matching/fusion, and Blender animations.',
    thumbnail: `${process.env.PUBLIC_URL}/vfx.png`,
    tags: ['VFX', 'Blender', 'Python', 'Computer Vision', 'Team Project'],
    links: {
      github: 'https://github.com/leolinpotato/ntu-vfx-2024',
      video: 'https://www.youtube.com/watch?v=e7_iIwEm398',
      video2: 'https://youtu.be/KqNNqOy3fpY?si=4KVSvJS_8_uxlPGE',
    },
    date: '2024-06-01',
  },
  {
    id: 'caged',
    title: lang === 'zh' ? 'CAGED 遊戲' : 'CAGED Game',
    subtitle: 'Game · QA · VFX',
    type: 'web',
    description: lang === 'zh' ? '參與小組開發，負責品質修復及特效。' : 'Team project; QA and VFX.',
    thumbnail: `${process.env.PUBLIC_URL}/caged.png`,
    tags: ['Game', 'VFX', 'C#', 'Unity', 'Team Project'],
    links: {
      demo: 'https://fhvirus.itch.io/caged?fbclid=IwZXh0bgNhZW0CMTAAAR3sYiRt9_hX8UyU68FCerY5O92KcjUp45jFvAippdTQ-LYH3yQsvf7chzQ_aem__vxlOau9PK69ds_E1oiPTQ',
    },
    date: '2024-10-01',
  },
  {
    id: 'yt-emotion',
    title: lang === 'zh' ? 'YouTube 評論情緒分析' : 'YouTube Comment Emotion Tool',
    subtitle: 'ML · Python',
    type: 'github',
    description: lang === 'zh' ? '文字雲與模型訓練腳本，支援自訂語料。' : 'Word cloud and training scripts; custom datasets supported.',
    thumbnail: `${process.env.PUBLIC_URL}/side_project.png`,
    tags: ['ML', 'NLP', 'Python', 'Personal Project'],
    links: {
      github: 'https://github.com/stanfc/Youtube-Comment-Emotion-Prediction-Tool',
    },
    date: '2024-09-01',
  },
  {
    id: 'special-topic',
    title: lang === 'zh' ? '專題研究：使用深度預測改善 Gaussian Splatting' : 'Special Topic: Gaussian Splatting with Depth Prediction',
    subtitle: 'Research · 3D',
    type: 'paper',
    description: lang === 'zh' ? '以深度估計降低 splatting 噪點，包含方法與結果報告。' : 'Reduce splatting noise using depth estimation; report included.',
    thumbnail: `${process.env.PUBLIC_URL}/special_topic.png`,
    tags: ['Research', 'Rendering', 'Team Project'],
    links: {
      paper: 'https://drive.google.com/file/d/1GHypUYnbrAHdEKABinBZg7Yqi7HFH1dg/view?usp=sharing',
    },
    date: '2025-01-15',
  },
  {
    id: 'pbrt-lsystem',
    title: lang === 'zh' ? 'PBRT-v4 L-System 支援' : 'L-System Support in PBRT-v4',
    subtitle: 'Rendering · C++',
    type: 'github',
    description: lang === 'zh' ? '在 PBRT-v4 中新增 L-System 支援與 3D 圖形生成。' : 'Added L-System graphics generation to PBRT-v4.',
    thumbnail: `${process.env.PUBLIC_URL}/rendering.png`,
    tags: ['Rendering', 'C++', 'PBRT', 'Personal Project'],
    links: {
      github: 'https://github.com/stanfc/pbrt-plus-v4/tree/l-system',
    },
    date: '2025-05-10',
  },
  {
    id: 'rag-agent',
    title: lang === 'zh' ? 'RAG Agent' : 'RAG Agent',
    subtitle: 'Python · LLM',
    type: 'github',
    description: lang === 'zh' ? 'LaTeX 助手：讀取 PDF、RAG 問答、工具寫檔。' : 'LaTeX helper: PDF ingest, RAG QA, file writing.',
    thumbnail: `${process.env.PUBLIC_URL}/rag.png`,
    tags: ['RAG', 'Python', 'Agent', 'LLM', 'Personal Project'],
    links: {
      github: 'https://github.com/stanfc/agent-project',
    },
    date: '2025-04-10',
  },
  {
    id: 'research-agent',
    title: lang === 'zh' ? 'Deep Research Agent' : 'Deep Research Agent',
    subtitle: 'Web · Agent',
    type: 'github',
    description: lang === 'zh' ? '可自動搜尋網路，精準檢索所需資訊。' : 'Autonomous web search; precise retrieval.',
    thumbnail: `${process.env.PUBLIC_URL}/deep_research.png`,
    tags: ['Agent', 'Search', 'LLM', 'Personal Project'],
    links: {
      github: 'https://github.com/stanfc/agent-project',
    },
    date: '2025-04-20',
  },
  {
    id: 'calendar-app',
    title: lang === 'zh' ? '行事曆分享與訂閱平台' : 'Calendar Sharing & Subscription',
    subtitle: 'React · Node.js',
    type: 'web',
    description: lang === 'zh' ? '前端主要負責；分享與訂閱。' : 'Frontend lead; sharing & subscription.',
    thumbnail: `${process.env.PUBLIC_URL}/calendar.png`,
    tags: ['React', 'Web', 'Node.js', 'Team Project'],
    links: {
      paper: 'https://drive.google.com/file/d/1UOdeThkxDmk1_2xY83AmGwgHIregeKoH/view?usp=sharing',
    },
    date: '2024-06-15',
  },
];

function useAllTags(items) {
  return useMemo(() => {
    const set = new Set();
    items.forEach((i) => (i.tags || []).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [items]);
}

const Portfolio = ({ currentLang }) => {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState([]);
  const [sortBy, setSortBy] = useState('az'); // default to A-Z without date

  const items = getItems(currentLang);
  const allTags = useAllTags(items);

  const filtered = useMemo(() => {
    let list = items.filter((i) =>
      (activeTags.length === 0 || activeTags.every((t) => i.tags?.includes(t))) &&
      (query.trim() === '' || `${i.title} ${i.subtitle ?? ''} ${i.description ?? ''} ${(i.tags ?? []).join(' ')}`.toLowerCase().includes(query.toLowerCase()))
    );
    list = list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [items, query, activeTags, sortBy]);

  const toggleTag = (t) =>
    setActiveTags((tags) => (tags.includes(t) ? tags.filter((x) => x !== t) : [...tags, t]));

  return (
    <div className="card full-width">
      <h2>
        <div className="section-icon">💼</div>
        <span>{currentLang === 'zh' ? '作品集' : 'Portfolio'}</span>
      </h2>

      <div className="portfolio-controls" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          className="input"
          style={{ padding: '0.6rem 0.8rem', borderRadius: 8, border: '1px solid var(--border-overlay)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={currentLang === 'zh' ? '搜尋標題、描述、標籤…' : 'Search title, description, tags…'}
        />
        <div style={{ display: 'none' }} />
      </div>

      {allTags.length > 0 && (
        <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => toggleTag(t)}
              className={activeTags.includes(t) ? 'link-button' : 'tag-button'}
              style={{ padding: '0.35rem 0.6rem', borderRadius: 999, border: '1px solid var(--border-overlay)', background: activeTags.includes(t) ? 'var(--hover-bg)' : 'transparent', color: 'var(--text-primary)' }}
            >
              #{t}
            </button>
          ))}
          {activeTags.length > 0 && (
            <button onClick={() => setActiveTags([])} className="link-button" style={{ padding: '0.35rem 0.6rem', borderRadius: 999 }}>
              {currentLang === 'zh' ? '清除標籤' : 'Clear tags'}
            </button>
          )}
        </div>
      )}

      <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1rem' }}>
        {filtered.map((item) => (
          <div key={item.id} className="card" style={{ padding: 0, overflow: 'hidden', height: '100%' }}>
            <div className="relative" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: 'var(--bg-secondary)' }}>
              {item.thumbnail ? (
                <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              ) : (
                <div style={{ width: '100%', height: '100%', background: 'var(--bg-overlay)' }} />
              )}
              <div style={{ position: 'absolute', left: 12, top: 12, display: 'flex', gap: 8 }}>
                <span className="badge" style={{ padding: '0.25rem 0.5rem', borderRadius: 999, background: 'var(--bg-secondary)' }}>{item.type}</span>
              </div>
            </div>
            <div style={{ padding: '0.9rem 1rem', display: 'flex', flexDirection: 'column', height: 'calc(100% - (100% / (16/9)))' }}>
              <div className="card-title" style={{ fontWeight: 600 }}>{item.title}</div>
              {item.subtitle && <div className="card-subtitle" style={{ opacity: 0.8, fontSize: 14, marginTop: 2 }}>{item.subtitle}</div>}
              {item.description && <div className="card-desc" style={{ marginTop: 8, color: 'var(--text-secondary)' }}>{item.description}</div>}
              {item.tags && item.tags.length > 0 && (
                <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {item.tags.map((t) => (
                    <span key={t} className="badge" style={{ padding: '0.2rem 0.5rem', borderRadius: 999, border: '1px solid var(--border-overlay)' }}>#{t}</span>
                  ))}
                </div>
              )}
              <div style={{ display: 'flex', gap: 8, marginTop: 'auto', paddingTop: 10, flexWrap: 'wrap' }}>
                {item.links?.demo && (
                  <a className="link-button" href={item.links.demo} target="_blank" rel="noreferrer">{currentLang === 'zh' ? '線上預覽' : 'Live'}</a>
                )}
                {item.links?.github && (
                  <a className="link-button" href={item.links.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {item.links?.video && (
                  <a className="link-button" href={item.links.video} target="_blank" rel="noreferrer">{currentLang === 'zh' ? '影片 1' : 'Video 1'}</a>
                )}
                {item.links?.video2 && (
                  <a className="link-button" href={item.links.video2} target="_blank" rel="noreferrer">{currentLang === 'zh' ? '影片 2' : 'Video 2'}</a>
                )}
                {item.links?.paper && (
                  <a className="link-button" href={item.links.paper} target="_blank" rel="noreferrer">{currentLang === 'zh' ? '報告/PDF' : 'Report/PDF'}</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', opacity: 0.8, padding: '2rem 0' }}>
          {currentLang === 'zh' ? '沒有符合的項目，請嘗試清除篩選或更改搜尋。' : 'No items found. Try clearing filters or changing your search.'}
        </div>
      )}
    </div>
  );
};

export default Portfolio;


