"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function DiaryListNavBar() {
    const [activeTab, setActiveTab] = useState("/main-page/diary-list/daily");

    const handleLinkClick = (path) => {
        setActiveTab(path);
    };
    
    const getLinkClassName = (path) => {
        return activeTab === path ? "tab2-active" : "tab2";
    };

    return (
        <div className="second-nav-bar">
            <Link href="/main-page/diary-list/daily" className={getLinkClassName("/main-page/diary-list/daily")}
                   onClick={() => handleLinkClick("/main-page/diary-list/daily")}>날짜선택</Link>
            <Link href="/main-page/diary-list/gathering" className={getLinkClassName("/main-page/diary-list/gathering")}
                   onClick={() => handleLinkClick("/main-page/diary-list/gathering")}>모아보기</Link>
        </div>
    );
}
