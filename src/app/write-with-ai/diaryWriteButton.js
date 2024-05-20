"use client";

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import "./write-with-ai.css";

export default function DiaryWriteButton() {
    const router = useRouter();
    const pathname = usePathname(); // Get the current pathname
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('https://empathydiaryapi.com/chatrooms/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies for authentication
            });

            if (response.ok) {
                const data = await response.json();
                const encodedContent = encodeURIComponent(data.content);
                router.push(`/write-with-ai/summary?content=${encodedContent}`);
            } else {
                console.error('Failed to submit chat:', response.status);
            }
        } catch (error) {
            console.error('Error submitting chat:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Check if the current path is '/write-with-ai/chatting-room'
    if (pathname !== '/write-with-ai/chatting-room') {
        return null; // Do not render the button if not in the specified path
    }

    return (
        <button className="wwa-diary-write-button" onClick={handleSubmit} disabled={isLoading}>
            <p>{isLoading ? "제출 중..." : "일기 작성"}</p>
        </button>
    );
}
