import React from 'react';
import ReactMarkdown from 'react-markdown';

// Collapsible markdown block for implementation details.
// Uses native <details>, so it works on touch devices (unlike hover tooltips).
const ExpandableDetails = ({ markdown, currentLang }) => {
  if (!markdown) return null;
  return (
    <details className="expand-details">
      <summary className="link-button">
        💬 {currentLang === 'zh' ? '詳細內容' : 'Details'}
      </summary>
      <div className="expand-details-body">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </details>
  );
};

export default ExpandableDetails;
