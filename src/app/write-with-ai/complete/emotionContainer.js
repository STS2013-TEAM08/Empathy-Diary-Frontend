"use client";

import React, { useEffect, useState } from 'react';
import "./complete.css";
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

export default function EmotionContainer() {
    const [emotion, setEmotion] = useState("기쁨");
    const [p_score, setPScore] = useState(50);
    const [n_score, setNScore] = useState(50);

    useEffect(() => {
        // Retrieve the emotion and scores from localStorage
        const emotion = localStorage.getItem('diaryEmotion');
        const p_score = localStorage.getItem('positiveScore');
        const n_score = localStorage.getItem('negativeScore');

        if (emotion) setEmotion(emotion);
        if (p_score) setPScore(parseInt(p_score, 10));
        if (n_score) setNScore(parseInt(n_score, 10));
    }, []);

    const EmotionIcon = emotionIcons[emotion] || FaFaceSmile;
    const emotionColor = emotionColors[emotion] || "#f1ff99";

    return (
        <div className="wwa-emotion-container">
            <EmotionIcon style={{ color: emotionColor }} className="wwa-emotion-icon" />
            <div className="wwa-emotion-inst">
                <h3>오늘의 감정</h3>
                <p>{emotion}</p>
            </div>
            <div className="wwa-emotion-score">
                <p>긍정점수 <span>{p_score}</span>/100</p>
                <p>부정점수 <span>{n_score}</span>/100</p>
            </div>
        </div>
    );
}
