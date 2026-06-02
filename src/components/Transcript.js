import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../styles/transcript.css';
import { getTranscriptData } from '../data/transcript';

const Transcript = ({ currentLang }) => {
  const [data, setData] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const localData = getTranscriptData(currentLang === 'zh' ? 'zh' : 'en');
    if (localData && localData.length > 0) {
      setData(localData);
      return;
    }

    const fetchData = async () => {
      try {
        const csvFileName = currentLang === 'zh' ? 'transcript_chinese.csv' : 'transcript.csv';
        const response = await fetch(`${process.env.PUBLIC_URL || ''}/${csvFileName}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const csv = await response.text();
        Papa.parse(csv, {
          header: true,
          delimiter: ',',
          skipEmptyLines: true,
          transformHeader: (header) => {
            const cleaned = header.replace(/^﻿/, '').trim();
            const headerMapping = { '課程': 'Course', '成績': 'Grade', '學分': 'Credits' };
            return headerMapping[cleaned] || cleaned;
          },
          complete: (results) => setData(results.data),
          error: (err) => console.error('Papa Parse Error:', err),
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    };

    fetchData();
  }, [currentLang]);

  const handleDownload = async () => {
    if (isDownloading) return;
    try {
      setIsDownloading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const pdfUrl = `${process.env.PUBLIC_URL || ''}/Transcript.pdf`;
      const response = await fetch(pdfUrl, { cache: 'no-store' });
      if (!response.ok) throw new Error('Failed to fetch PDF');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'Transcript.pdf';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
      setIsDownloading(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 1500);
    } catch (e) {
      setIsDownloading(false);
      setIsSuccess(false);
      console.error(e);
    }
  };

  return (
    <div className="transcript-container">
      <h2>{currentLang === 'zh' ? '成績單' : 'Transcript'}</h2>
      <table className="transcript-table">
        <thead>
          <tr>
            <th>{currentLang === 'zh' ? '課程' : 'Course'}</th>
            <th>{currentLang === 'zh' ? '成績' : 'Grade'}</th>
            <th>{currentLang === 'zh' ? '學分' : 'Credits'}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Course}</td>
              <td>{row.Grade}</td>
              <td>{row.Credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="download-section">
        <button
          type="button"
          className={`download-btn${isDownloading ? ' downloading' : ''}${isSuccess ? ' success' : ''}`}
          onClick={handleDownload}
        >
          <span className="download-icon" aria-hidden>
            {isSuccess ? '✅' : isDownloading ? '⏳' : '📥'}
          </span>
          <span className="download-text">
            {isSuccess
              ? currentLang === 'zh' ? '已下載' : 'Downloaded'
              : isDownloading
                ? currentLang === 'zh' ? '下載中...' : 'Downloading...'
                : currentLang === 'zh' ? '下載完整成績單' : 'Download Full Transcript'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Transcript;
