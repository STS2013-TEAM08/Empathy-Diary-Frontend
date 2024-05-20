"use client";

import React from 'react';
import "./summary.css";

export default function SummaryContainer({ content }) {
    return (
        <div>
            <div className="summary-content-container">
                <p>{content}</p>
            </div>
        </div>
    );
}
