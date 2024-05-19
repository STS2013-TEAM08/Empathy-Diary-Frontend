"use client";

import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale'; // 한국어 로케일 임포트
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'; // React Icons 임포트
import 'react-datepicker/dist/react-datepicker.css';
import "./calendar.css"; // 스타일링 파일을 임포트

const Calendar = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date); // 상위 컴포넌트로 선택된 날짜를 전달
  };

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth
  }) => (
    <div className="react-datepicker__header">
      <button type="button" className="react-datepicker__navigation react-datepicker__navigation--previous" onClick={decreaseMonth}>
        <FaAngleLeft className="react-datepicker__navigation-icon" />
      </button>
      <span className="react-datepicker__current-month">
        {date.getFullYear()}.{(date.getMonth() + 1).toString().padStart(2, '0')}
      </span>
      <button type="button" className="react-datepicker__navigation react-datepicker__navigation--next" onClick={increaseMonth}>
        <FaAngleRight className="react-datepicker__navigation-icon" />
      </button>
    </div>
  );

  return (
    <div className="calendar-wrapper">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        inline // 인라인 모드로 설정하여 클릭 없이 달력을 표시
        calendarClassName="custom-calendar" // 커스텀 클래스를 추가
        dayClassName={(date) => 
          date.getDate() === startDate.getDate() &&
          date.getMonth() === startDate.getMonth() &&
          date.getFullYear() === startDate.getFullYear()
            ? "selected-day"
            : undefined
        } // 선택된 날짜에 커스텀 클래스를 적용
        renderCustomHeader={renderCustomHeader} // 커스텀 헤더 렌더링
        locale={ko} // 한글 요일 사용
      />
    </div>
  );
};

export default Calendar;
