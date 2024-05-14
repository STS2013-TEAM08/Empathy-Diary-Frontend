"use client"

import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaFaceLaugh } from "react-icons/fa6";

export default function DiaryBar() {
    const [isOpen, setIsOpen] = useState(false);

    const year = 2024;
    const month = 4;
    const day = 19;
    const content = "오늘은 정말 행복한 하루였다. 아침에 일어나자마자 밖은 맑고 화창한 날씨였다. 나는 친구들과 함께 산책을 하며 신선한 공기를 마시고, 따뜻한 햇살을 만끽했다. 우리는 함께 맛있는 아이스크림을 먹으며 이야기를 나누고, 웃음꽃을 피웠다. 그 순간 모든 걱정거리들이 사라진 것만 같았다. 저녁에는 가족과 함께 저녁을 먹으며 오늘 있었던 즐거운 일들을 공유했다. 가족들과의 따뜻한 대화는 나를 더욱 행복하게 만들었다. 오늘 하루는 진정 행복한 추억으로 남을 것 같다. 모든 순간이 소중하고 감사한 하루였다.";

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`diary-bar-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <div className="diary-component">
                <div className="diary-title">
                    <FaFaceLaugh className="diary-emotion" />
                    <h2>{year}.{month}.{day}</h2>
                </div>
                {isOpen ? <FaChevronUp className="up-icon"/> : <FaChevronDown className="down-icon"/>}
            </div>
            {isOpen && <div className="diary-content-gathering">{content}</div>}
        </div>
    );
}