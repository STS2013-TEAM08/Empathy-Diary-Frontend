"use client";

import { useState, useEffect } from 'react';
import DiaryBar from './diaryBar.js';
import "./gathering.css"; 

export default function GatheringPage() {
    const [diaries, setDiaries] = useState([]);

    useEffect(() => {
        const fetchDiaries = async () => {
            try {
                const response = await fetch('https://empathydiaryapi.com/posts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    // 일기를 최신순으로 정렬
                    const sortedDiaries = data.diaries.sort((a, b) => new Date(b.writeDate) - new Date(a.writeDate));
                    setDiaries(sortedDiaries);
                } else {
                    console.error('Failed to fetch diaries:', response.status);
                }
            } catch (error) {
                console.error('Error fetching diaries:', error);
            }
        };

        fetchDiaries();
    }, []);

    return (
        <div className="diary-list">
            {diaries.map((diary) => (
                <DiaryBar key={diary.id} diary={diary} />
            ))}
        </div>
    );
}
