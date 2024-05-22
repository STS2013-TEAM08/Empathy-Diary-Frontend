"use client";

import React, { useRef } from 'react';
import InputBoxContainer from './inputBoxContainer.js';
import "./my-info.css";

export default function MyInfoPage() {
    const handleSubmitRef = useRef(null);

    const handleUserInfoUpdated = (handleSubmit) => {
        handleSubmitRef.current = handleSubmit;
    };

    return (
        <div className="my-info-container">
            <p>새로운 정보로 수정해주세요</p>
            <InputBoxContainer />

        </div>
    );
}
