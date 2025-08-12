import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../styles/transcript.css';

const Transcript = ({ currentLang }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const csvFileName = currentLang === 'zh' ? 'transcript_chinese.csv' : 'transcript.csv';
        const response = await fetch(`${process.env.PUBLIC_URL || ''}/${csvFileName}`);
        console.log('Fetch Response:', response);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csv = await response.text();
        console.log('CSV Content:', csv);
        
        Papa.parse(csv, {
          header: true, // Re-enabled
          delimiter: ',', // Explicitly set delimiter
          skipEmptyLines: true, // Skip empty lines
          transformHeader: (header) => {
            const cleaned = header.replace(/^\uFEFF/, '').trim();
            const headerMapping = {
              '課程': 'Course',
              '成績': 'Grade',
              '學分': 'Credits'
            };
            return headerMapping[cleaned] || cleaned;
          },
          complete: (results) => {
            console.log('Papa Parse Results:', results);
            setData(results.data);
          },
          error: (err) => {
            console.error('Papa Parse Error:', err);
          }
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    };

    fetchData();
  }, [currentLang]);

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
    </div>
  );
};

export default Transcript;
