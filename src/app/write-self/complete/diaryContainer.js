"use client";

import React, { useEffect, useState } from 'react';
import "./complete.css";

export default function DiaryContainer() {
    const [diaryContent, setDiaryContent] = useState("");

    useEffect(() => {
        // Retrieve the diary content from localStorage
        const content = localStorage.getItem('diaryContent');
        if (content) {
            setDiaryContent(content);
        }
    }, []);

    return (
        <div className="wwa-diary-complete-content-container">
            <p>{diaryContent}</p>
        </div>
    );
}
