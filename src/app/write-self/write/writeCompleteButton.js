"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import "./write.css";

export default function WriteCompleteButton({ content }) {
    const router = useRouter();

    const handleCompleteClick = async () => {
        try {
            const response = await fetch('https://empathydiaryapi.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies for authentication
                body: JSON.stringify({ content: content }), // Use the content prop
            });

            if (response.ok) {
                const data = await response.json();
                const diaryId = data.postId;

                // Fetch the diary content using the diaryId
                const diaryResponse = await fetch(`https://empathydiaryapi.com/posts/${diaryId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include', // Include cookies for authentication
                });

                if (diaryResponse.ok) {
                    const diaryData = await diaryResponse.json();

                    // Save the diary content and emotions to localStorage
                    localStorage.setItem('diaryContent', diaryData.diary.content);
                    localStorage.setItem('diaryEmotion', diaryData.diary.emotions[0] || "기쁨"); // Store the first emotion or default
                    localStorage.setItem('positiveScore', diaryData.diary.positiveScore || 0); // Default to 0 if undefined
                    localStorage.setItem('negativeScore', diaryData.diary.negativeScore || 0); // Default to 0 if undefined

                    // Navigate to the complete page
                    router.push('/write-self/complete'); // Adjust this path to match your actual folder structure
                } else {
                    console.error('Failed to fetch diary content:', diaryResponse.status);
                    // Handle error accordingly
                }
            } else {
                console.error('Failed to submit diary:', response.status);
                // Handle error accordingly
            }
        } catch (error) {
            console.error('Error submitting diary:', error);
            // Handle error accordingly
        }
    };

    return (
        <button className="write-complete-button" onClick={handleCompleteClick}>
            작성 완료
        </button>
    );
}
