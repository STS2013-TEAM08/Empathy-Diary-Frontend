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
      <GraphCustomRange startDate={selectedDates.start} endDate={selectedDates.end} />
    </div>
  );
}
