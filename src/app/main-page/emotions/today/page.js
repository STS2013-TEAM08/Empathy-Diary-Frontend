"use client";

import { useState, useEffect } from 'react';
import Calendar from './Datepicker.js';
import AdviceBox from './adviceBox.js';
import AdviceTextBox from './adviceTextBox.js';
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

export default function TodayPage() {
  const [diary, setDiary] = useState(null);
  const [emotion, setEmotion] = useState("행복");
  const [pScore, setPScore] = useState(50);
  const [nScore, setNScore] = useState(50);
  const [pplNum, setPplNum] = useState(40);
  const [advices, setAdvices] = useState([]);
  const today = new Date();

  const fetchDiary = async (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const startDate = `${year}-${month}-${day}`;
    const endDate = `${year}-${month}-${(date.getDate() + 1).toString().padStart(2, '0')}`;

    try {
      const response = await fetch(`https://empathydiaryapi.com/posts/period?startDate=${startDate}&endDate=${endDate}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        if (data.diaries.length > 0) {
          const diary = data.diaries[0];
          setDiary(diary);
          setEmotion(diary.emotions[0]); // 첫번째 감정을 표시
          setPScore(diary.positiveScore);
          setNScore(diary.negativeScore);
          setPplNum(diary.peopleNum);
        } else {
          setDiary(null);
        }
      } else {
        console.error('Failed to fetch diary:', response.status);
        setDiary(null);
      }
    } catch (error) {
      console.error('Error fetching diary:', error);
      setDiary(null);
    }
  };

  const fetchAdvices = async (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const startDate = `${year}-${month}-${day}`;
    const endDate = `${year}-${month}-${(date.getDate() + 1).toString().padStart(2, '0')}`;

    try {
      const response = await fetch(`https://empathydiaryapi.com/advices/today`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setAdvices(data.advices);
      } else {
        console.error('Failed to fetch advices:', response.status);
        setAdvices([]);
      }
    } catch (error) {
      console.error('Error fetching advices:', error);
      setAdvices([]);
    }
  };

  useEffect(() => {
    fetchDiary(today);
    fetchAdvices(today);
  }, []);

  const handleDateChange = (date) => {
    fetchDiary(date);
    fetchAdvices(date);
  };

  const EmotionIcon = emotionIcons[emotion] || FaFaceSmile;
  const emotionColor = emotionColors[emotion] || "#fcffb3";

  return (
    <div className="today-container">
      <div className="today-scroll-container">
        <div className="calendar-container">
          <Calendar onDateChange={handleDateChange} />
        </div>

        {diary ? (
          <div className="emotion-content">
            <EmotionIcon className="face" style={{ color: emotionColor }} />
            <p className="inst1">이 날 당신의 감정은</p>
            <p className="emotion">{emotion}</p>
            <div className="pn-score">
              <p>긍정 점수 <span>{pScore}</span>/100</p>
              <p>부정 점수 <span>{nScore}</span>/100</p>
            </div>
            {/* <p className="people">이 날 당신과 같은 감정을 느낀 사람은 <span>{pplNum}명</span>입니다.</p> */}
          </div>
        ) : (
          <div className="today-no-diary">
            <p>이 날 작성된 일기가 없습니다.</p>
          </div>
        )}

        <div className="advice-container">
          <p className="inst2">
            오늘 같은 감정을 느낀 사람들의<br></br>조언을 살펴보세요
          </p>
          {advices.map((advice, index) => (
            <AdviceBox key={index} advice={advice.content} />
          ))}
        </div>
      </div>
      <AdviceTextBox />
    </div>
  );
}
