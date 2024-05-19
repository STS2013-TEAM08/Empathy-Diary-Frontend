"use client";

import { useState, useEffect } from "react";
import {
    FaFaceSmile,
    FaFaceGrinHearts,
    FaFaceSmileBeam,
    FaFaceFrownOpen,
    FaFaceSadTear,
    FaFaceAngry,
    FaFaceSurprise,
    FaFaceMeh,
    FaFaceGrimace,
    FaFaceFrown,
    FaFaceGrinBeamSweat
} from "react-icons/fa6";
import "./collected.css"; // Import the CSS file

const emotionIcons = {
    "기쁨": FaFaceSmile,
    "사랑": FaFaceGrinHearts,
    "뿌듯함": FaFaceSmileBeam,
    "우울": FaFaceFrownOpen,
    "불안": FaFaceSadTear,
    "분노": FaFaceAngry,
    "놀람": FaFaceSurprise,
    "외로움": FaFaceMeh,
    "공포": FaFaceGrimace,
    "후회": FaFaceFrown,
    "부끄러움": FaFaceGrinBeamSweat
};

const emotionColors = {
    "기쁨": "#f1ff99",
    "사랑": "#ffb3de",
    "뿌듯함": "#fff0b3",
    "우울": "#b6b3ff",
    "불안": "#ffdbb3",
    "분노": "#ffc3b3",
    "놀람": "#bdffb3",
    "외로움": "#c2b8cf",
    "공포": "#c9afb4",
    "후회": "#cccccc",
    "부끄러움": "#c1dbda"
};

export default function EmotionsContainer() {
    const [emotions, setEmotions] = useState([]);
    const [totalNum, setTotalNum] = useState(0);

    useEffect(() => {
        const fetchEmotions = async () => {
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
                    const emotionData = data.emotions.reduce((acc, emotion) => {
                        const key = Object.keys(emotion)[0];
                        // Only include emotions that are predefined
                        if (emotionIcons[key]) {
                            acc.push({ name: key, count: emotion[key] });
                        }
                        return acc;
                    }, []);

                    // Sort emotions by count in descending order
                    emotionData.sort((a, b) => b.count - a.count);

                    setEmotions(emotionData);
                    setTotalNum(emotionData.reduce((acc, emotion) => acc + emotion.count, 0));
                } else {
                    console.error('Failed to fetch emotions:', response.status);
                }
            } catch (error) {
                console.error('Error fetching emotions:', error);
            }
        };

        fetchEmotions();
    }, []);

    if (emotions.length === 0) return null;

    // Get the top emotion
    const topEmotion = emotions[0];
    const otherEmotions = emotions.slice(1);

    const TopEmotionIcon = emotionIcons[topEmotion.name] || FaFaceSmile;
    const topEmotionColor = emotionColors[topEmotion.name] || "#fcffb3";

    return (
        <div className="collected-emotions-container">
            <div className="total-num-container">
                <p>수집한 감정 <span>{totalNum}개</span></p>
            </div>
            <div className="top-emotion-container">
                <TopEmotionIcon className="top-emotion-icon" style={{ color: topEmotionColor }} />
                <div className="top-emo-sub-container">
                    <h3>{topEmotion.name}</h3>
                    <p>{topEmotion.count}개</p>
                </div>
            </div>
            {otherEmotions.map((emotion, index) => {
                const EmotionIcon = emotionIcons[emotion.name];
                const emotionColor = emotionColors[emotion.name];
                return (
                    <div className="emo-container" key={index}>
                        <EmotionIcon className="emotion-icon" style={{ color: emotionColor }} />
                        <div className="emo-sub-container">
                            <h3>{emotion.name}</h3>
                            <p>{emotion.count}개</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
