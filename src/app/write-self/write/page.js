"use client";

import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import "./write.css";
import SummaryContainer from "./writeContainer";
import WriteCompleteButton from './writeCompleteButton.js';

export default function WritePage() {
    const searchParams = useSearchParams();
    const initialContent = searchParams.get('content');
    const [content, setContent] = useState(initialContent || "");

    useEffect(() => {
        setContent(initialContent);
    }, [initialContent]);

    return (
        <div className="write-sub-container">
            <h3>일기를 직접 작성해주세요.</h3>
            <p>원하는 내용으로 마음껏 채울 수 있습니다.</p>
            <SummaryContainer content={content} setContent={setContent} />
            <WriteCompleteButton content={content} />
        </div>
    );
}
