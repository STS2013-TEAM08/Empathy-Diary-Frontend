import React from 'react';
import "./complete.css";
import DiaryContainer from './diaryContainer.js';
import EmotionContainer from './emotionContainer.js';
import GoBackButton from './goBackButton.js';

export default function CompletePage() {
    return (
        <div className="complete-sub-container">
            <div className="wwa-complete-inst">
                <img src="/check.png" className="wwa-complete-checkImg" />
                <h3>일기 작성이 완료되었습니다!</h3>
                <p>일기 내용과 분석된 감정을 확인해보세요</p>
            </div>
            <EmotionContainer />
            <DiaryContainer />
            <GoBackButton />
        </div>
    );
}
