"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function EmotionsNavBar() {
    const [activeTab, setActiveTab] = useState("/main-page/emotions/today");

    const handleLinkClick = (path) => {
        setActiveTab(path);
    };
    
    const getLinkClassName = (path) => {
        return activeTab === path ? "tab-emotions-active" : "tab-emotions";
    };

    return (
        <div className="emotions-nav-bar">
            <Link href="/main-page/emotions/today" className={getLinkClassName("/main-page/emotions/today")}
                   onClick={() => handleLinkClick("/main-page/emotions/today")}>오늘 감정</Link>
            <Link href="/main-page/emotions/this-week" className={getLinkClassName("/main-page/emotions/this-week")}
                   onClick={() => handleLinkClick("/main-page/emotions/selected")}>이번주 감정</Link>
            <Link href="/main-page/emotions/selected" className={getLinkClassName("/main-page/emotions/selected")}
                   onClick={() => handleLinkClick("/main-page/emotions/selected")}>기간별 감정</Link>
            <Link href="/main-page/emotions/collected" className={getLinkClassName("/main-page/emotions/collected")}
                   onClick={() => handleLinkClick("/main-page/emotions/collected")}>수집한 감정</Link>
        </div>
    );
}
