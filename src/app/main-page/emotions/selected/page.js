"use client";

import React, { useState } from "react";
import Calendar from './Datepicker.js';
import GraphCustomRange from './graph.js';
import './selected.css'; // 스타일링 파일을 임포트

export default function SelectedPage() {
  const [selectedDates, setSelectedDates] = useState({ start: null, end: null });

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <div className="selected-container">
      <Calendar onDateChange={handleDateChange} />
      {!selectedDates.start || !selectedDates.end ? (
        <p className="no-data-message">감정을 확인하고 싶은 기간을 선택해주세요.</p>
      ) : (
        <GraphCustomRange startDate={selectedDates.start} endDate={selectedDates.end} />
      )}
    </div>
  );
}
