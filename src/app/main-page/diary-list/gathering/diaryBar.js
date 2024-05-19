"use client"

import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaFaceLaugh } from "react-icons/fa6";

export default function DiaryBar({ diary }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`diary-bar-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <div className="diary-component">
                <div className="diary-title">
                    <FaFaceLaugh className="diary-emotion" />
                    <h2>{new Date(diary.writeDate).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</h2>
                </div>
                {isOpen ? <FaChevronUp className="up-icon" /> : <FaChevronDown className="down-icon" />}
            </div>
            {isOpen && <div className="diary-content-gathering">{diary.content}</div>}
        </div>
    );
}
