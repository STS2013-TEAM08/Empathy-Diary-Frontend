"use client";

import React from 'react';
import "./summary.css";

export default function SummaryContainer({ content, setContent }) {
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <div className="summary-sub-container">
            <textarea value={content} onChange={handleContentChange} />
        </div>
    );
}
