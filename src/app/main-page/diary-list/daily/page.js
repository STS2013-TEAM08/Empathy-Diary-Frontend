"use client";

import { useState, useEffect } from 'react';
import Calendar from './Datepicker.js';
import './daily.css';

export default function DailyPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [diaryContent, setDiaryContent] = useState("");
    const [isDiaryAvailable, setIsDiaryAvailable] = useState(true);

    useEffect(() => {
        const fetchDiary = async (date) => {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const startDate = `${year}-${month}-${day}`;
            const endDate = `${year}-${month}-${day}`; // 종료 날짜를 시작 날짜와 동일하게 설정
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            };

            try {
                const response = await fetch(`https://empathydiaryapi.com/posts/period?startDate=${startDate}&endDate=${endDate}`, options);
                if (response.ok) {
                    const data = await response.json();
                    if (data.diaries.length > 0) {
                        setDiaryContent(data.diaries[0].content);
                        setIsDiaryAvailable(true);
                    } else {
                        setIsDiaryAvailable(false);
                    }
                } else {
                    console.error('Failed to fetch diary:', response.status);
                    setIsDiaryAvailable(false);
                }
            } catch (error) {
                console.error('Error fetching diary:', error);
                setIsDiaryAvailable(false);
            }
        };

        fetchDiary(selectedDate);
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <div className="calendar-container">
                <Calendar onDateChange={handleDateChange} />
            </div>
            {isDiaryAvailable ? (
                <div className="diary-content">
                    <h1>{selectedDate.getFullYear()}.{selectedDate.getMonth() + 1}.{selectedDate.getDate()}</h1>
                    <p>{diaryContent}</p>
                </div>
            ) : (
                <div className="no-diary">
                    <p>이 날 작성된 일기가 없습니다.</p>
                </div>
            )}
        </div>
    );
}
