"use client";

import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale'; // 한국어 로케일 임포트
import { FaAngleLeft, FaAngleRight, FaCalendarDays, FaChevronDown, FaChevronUp } from 'react-icons/fa6'; // React Icons 임포트
import 'react-datepicker/dist/react-datepicker.css';
import "./calendar.css"; // 스타일링 파일을 임포트

const Calendar = ({ onDateChange = () => {} }) => { // 기본 함수를 설정
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateChange({ start, end }); // 상위 컴포넌트로 선택된 날짜를 전달

    if (end) { // 종료 날짜가 설정되면
      setIsCalendarOpen(false); // 달력 탭을 닫음
    }
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
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

  const formatDate = (date) => {
    if (!date) return "";
    return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-bar" onClick={toggleCalendar}>
        <FaCalendarDays className="calendar-icon" />
        <span>
          {startDate && endDate
            ? `${formatDate(startDate)} ~ ${formatDate(endDate)}`
            : "날짜를 선택하세요"}
        </span>
        {isCalendarOpen ? <FaChevronUp className="toggle-icon" /> : <FaChevronDown className="toggle-icon" />}
      </div>
      {isCalendarOpen && (
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat="yyyy-MM-dd"
          inline // 인라인 모드로 설정하여 클릭 없이 달력을 표시
          calendarClassName="custom-calendar" // 커스텀 클래스를 추가
          renderCustomHeader={renderCustomHeader} // 커스텀 헤더 렌더링
          locale={ko} // 한글 요일 사용
          maxDate={new Date()} // 현재 날짜까지 선택 가능
          dayClassName={(date) => {
            if (startDate && endDate && date >= startDate && date <= endDate) {
              if (date.getTime() === startDate.getTime()) {
                return "react-datepicker__day--selected-start";
              }
              if (date.getTime() === endDate.getTime()) {
                return "react-datepicker__day--selected-end";
              }
              return "react-datepicker__day--in-range";
            }
            return undefined;
          }} // 날짜에 따라 커스텀 클래스 적용
        />
      )}
    </div>
  );
};

export default Calendar;
