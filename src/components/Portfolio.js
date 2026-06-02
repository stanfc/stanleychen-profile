import React, { useMemo, useState } from 'react';
import { getPortfolioItems } from '../data/portfolio';

export const getItems = (lang) => {
  const raw = getPortfolioItems();
  return raw.map((item) => ({
    ...item,
    title: typeof item.title === 'object' ? item.title[lang] : item.title,
    subtitle: typeof item.subtitle === 'object' ? item.subtitle[lang] : item.subtitle,
    description: typeof item.description === 'object' ? item.description[lang] : item.description,
    thumbnail: item.thumbnail
      ? item.thumbnail.startsWith('http') || item.thumbnail.startsWith('/')
        ? item.thumbnail
        : `${process.env.PUBLIC_URL}/${item.thumbnail}`
      : '',
  }));
};

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


