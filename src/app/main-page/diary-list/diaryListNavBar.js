"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DiaryListNavBar() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("/main-page/diary-list/daily");

    useEffect(() => {
        if (pathname.startsWith("/main-page/diary-list/daily")) {
            setActiveTab("/main-page/diary-list/daily");
        } else if (pathname.startsWith("/main-page/diary-list/gathering")) {
            setActiveTab("/main-page/diary-list/gathering");
        }
    }, [pathname]);

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
