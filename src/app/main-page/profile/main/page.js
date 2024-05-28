"use client";

import React, { useEffect, useState } from 'react';
import LogoutButton from './logoutButton.js';
import MyInfoButton from './myInfoButton.js';
import "./main.css";

export default function ProfileMainPage() {
    const [nickname, setNickname] = useState("");
    const [mailAddress, setMailAddress] = useState("");
    const [diaryNum, setDiaryNum] = useState(0);
    const [emotionNum, setEmotionNum] = useState(0);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('https://empathydiaryapi.com/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setNickname(data.nickname);
                    setMailAddress(data.email);
                } else {
                    console.error('Failed to fetch user info:', response.status);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        const fetchDiaryCount = async () => {
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
                    setDiaryNum(data.diaries.length);
                } else {
                    console.error('Failed to fetch diaries:', response.status);
                }
            } catch (error) {
                console.error('Error fetching diaries:', error);
            }
        };

        const fetchEmotionCount = async () => {
            try {
                const response = await fetch('https://empathydiaryapi.com/emotions', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    const totalEmotions = data.emotions.reduce((sum, emotion) => {
                        return sum + Object.values(emotion)[0];
                    }, 0);
                    setEmotionNum(totalEmotions);
                } else {
                    console.error('Failed to fetch emotions:', response.status);
                }
            } catch (error) {
                console.error('Error fetching emotions:', error);
            }
        };

        fetchUserInfo();
        fetchDiaryCount();
        fetchEmotionCount();
    }, []);

    return (
        <div className="profile-main-container">
            <h2 className="nickname-info"><span>{nickname}</span>님,<br></br>환영합니다!</h2>
            <p className="email-info">{mailAddress}</p>
            <div className="diary-emotion-info">
                <div className="info-box">
                    <h3>작성한 일기</h3>
                    <p>{diaryNum}개</p>
                </div>
                <div className="info-box">
                    <h3>수집한<br></br>감정</h3>
                    <p>{emotionNum}개</p>
                </div>
            </div>
            <div className="profile-buttons">
                <LogoutButton />
                <MyInfoButton />
            </div>
        </div>
    );
}
