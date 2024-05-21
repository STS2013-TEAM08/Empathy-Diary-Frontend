"use client";

import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import "./summary.css";
import SummaryContainer from "./summaryContainer";
import WriteCompleteButton from './writeCompleteButton.js';

export default function SummaryPage() {
    const searchParams = useSearchParams();
    const initialContent = searchParams.get('content');
    const [content, setContent] = useState(initialContent || "");

    useEffect(() => {
        setContent(initialContent);
    }, [initialContent]);

    return (
        <div className="summary-sub-container">
            <h3>AI 챗봇이 작성한 일기입니다.</h3>
            <p>원하는 내용으로 수정할 수 있습니다.</p>
            <SummaryContainer content={content} setContent={setContent} />
            <WriteCompleteButton content={content} />
        </div>
    );
}
