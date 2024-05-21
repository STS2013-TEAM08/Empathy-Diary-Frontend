"use client";

import React from 'react';
import "./write.css";

export default function WriteContainer({ content, setContent }) {
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <div className="write-sub-container">
            <textarea value={content} onChange={handleContentChange} />
        </div>
    );
}
