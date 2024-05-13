"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBook, FaFaceSmile, FaUser } from "react-icons/fa6";

export default function MainNavBar() {
    const [activeTab, setActiveTab] = useState("/main-page/diary-list");

    const handleLinkClick = (path) => {
        setActiveTab(path);
    };
    
    const getLinkClassName = (path) => {
        return activeTab === path ? "tab-active" : "tab";
    };

    return (
        <div className="nav-bar">
            <Link href="/main-page/diary-list" className={getLinkClassName("/main-page/diary-list")}
                   onClick={() => handleLinkClick("/main-page/diary-list")}>
                    <FaBook className="book-icon" />
            </Link>
            <Link href="/main-page/emotions" className={getLinkClassName("/main-page/emotions")}
                   onClick={() => handleLinkClick("/main-page/emotions")}>
                    <FaFaceSmile className="emotion-icon" />
            </Link>
            <Link href="/main-page/profile" className={getLinkClassName("/main-page/profile")}
                   onClick={() => handleLinkClick("/main-page/profile")}>
                    <FaUser className="profile-icon" />
            </Link>
        </div>
    );
}
