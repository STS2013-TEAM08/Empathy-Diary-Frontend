import React from 'react';
import './this-week.css';
import ThisWeekGraph from './thisWeekGraph.js';

const ThisWeekPage = () => (
  <div className="this-week-container">
    <p className="this-week-inst">
      지난 일주일 간의 <br />감정 변화를 확인하세요
    </p>
    <ThisWeekGraph className="this-week-graph" />
  </div>
);

export default ThisWeekPage;
