"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaPlus } from "react-icons/fa6";
import "./writeButton.css";

export default function WriteButton() {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleButtonClick = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    const handleWriteWithAI = async () => {
        try {
            const response = await fetch('https://empathydiaryapi.com/chatrooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include credentials for authentication
            });

            if (response.ok) {
                const data = await response.json();
                const { roomId } = data;
                router.push(`/write-with-ai/chatting-room?roomId=${roomId}`);
            } else {
                console.error('Failed to create chatroom:', response.status);
            }
        } catch (error) {
            console.error('Error creating chatroom:', error);
        }
    };

    // Determine if the button should be visible
    const isVisible = !pathname.startsWith('/main-page/profile');

    if (!isVisible) {
        return null; // Don't render the button if the path starts with '/main-page/profile'
    }

    return (
        <div className="main-page">
            {isOverlayVisible && <div className="overlay" />}
            <div className="floating-button-container">
                {isOverlayVisible && (
                    <div className="additional-buttons">
                        <Link href="/write-self/write" passHref>
                            <button className="additional-button-1">
                                직접 작성
                            </button>
                        </Link>
                        <button className="additional-button-2" onClick={handleWriteWithAI}>
                            AI 챗봇과 작성
                        </button>
                    </div>
                )}
                <button className="floating-button" onClick={handleButtonClick}>
                    <FaPlus />
                </button>
            </div>
        </div>
    );
}
