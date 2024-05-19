import React from 'react';
import './this-week.css';
import GraphThisWeek from './graph.js';

export default function ThisWeekGraph() {
    const today = new Date();
    const endYear = today.getFullYear();
    const endMonth = today.getMonth() + 1;
    const endDay = today.getDate();

    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 6);

    const startYear = lastWeek.getFullYear();
    const startMonth = lastWeek.getMonth() + 1;
    const startDay = lastWeek.getDate();

    return (
        <div className="this-week-graph-main-container">
            <div className="this-week-date-container">
                <h2>{startYear}.{startMonth}.{startDay} ~ {endYear}.{endMonth}.{endDay}</h2>
            </div>
            <div className="this-week-graph-container">
                <GraphThisWeek />
            </div>
        </div>
    );
}

