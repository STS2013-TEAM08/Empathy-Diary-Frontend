"use client"

import { useState } from "react";
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
    FaFaceGrinBeamSweat,
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa6";

const emotionIcons = {
    "기쁨": { icon: FaFaceSmile, color: "#f1ff99" },
    "사랑": { icon: FaFaceGrinHearts, color: "#ffb3de" },
    "뿌듯함": { icon: FaFaceSmileBeam, color: "#fff0b3" },
    "우울": { icon: FaFaceFrownOpen, color: "#b6b3ff" },
    "불안": { icon: FaFaceSadTear, color: "#ffdbb3" },
    "분노": { icon: FaFaceAngry, color: "#ffc3b3" },
    "놀람": { icon: FaFaceSurprise, color: "#bdffb3" },
    "외로움": { icon: FaFaceMeh, color: "#c2b8cf" },
    "공포": { icon: FaFaceGrimace, color: "#c9afb4" },
    "후회": { icon: FaFaceFrown, color: "#cccccc" },
    "부끄러움": { icon: FaFaceGrinBeamSweat, color: "#c1dbda" }
};

export default function DiaryBar({ diary }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const mainEmotion = diary.emotions && diary.emotions.length > 0 ? diary.emotions[0] : "기쁨";
    const { icon: EmotionIcon, color: emotionColor } = emotionIcons[mainEmotion] || { icon: FaFaceSmile, color: "#fcffb3" };

    return (
        <div className={`diary-bar-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <div className="diary-component">
                <div className="diary-title">
                    <EmotionIcon className="diary-emotion" style={{ color: emotionColor }} />
                    <h2>{new Date(diary.writeDate).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</h2>
                </div>
                {isOpen ? <FaChevronUp className="up-icon" /> : <FaChevronDown className="down-icon" />}
            </div>
            {isOpen && <div className="diary-content-gathering">{diary.content}</div>}
        </div>
    );
}
