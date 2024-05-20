"use client";

import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import "./writeButton.css";

export default function WriteButton() {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const handleButtonClick = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    return (
        <div className="main-page">
            {isOverlayVisible && <div className="overlay" />}
            <div className="floating-button-container">
                {isOverlayVisible && (
                    <div className="additional-buttons">
                        <button className="additional-button-1">직접 작성</button>
                        <button className="additional-button-2">AI 챗봇과 작성</button>
                    </div>
                )}
                <button className="floating-button" onClick={handleButtonClick}>
                    <FaPlus />
                </button>
            </div>
        </div>
    );
}
