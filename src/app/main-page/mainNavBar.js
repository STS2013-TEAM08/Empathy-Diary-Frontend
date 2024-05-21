"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import { FaBook, FaFaceSmile, FaUser } from "react-icons/fa6";
import "./main-page.css"; // Make sure you have the appropriate CSS file

export default function MainNavBar() {
    const pathname = usePathname(); // Get the current path
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        if (pathname.startsWith("/main-page/diary-list")) {
            setActiveTab("/main-page/diary-list");
        } else if (pathname.startsWith("/main-page/emotions")) {
            setActiveTab("/main-page/emotions");
        } else if (pathname.startsWith("/main-page/profile")) {
            setActiveTab("/main-page/profile");
        }
    }, [pathname]);

    const handleLinkClick = (path) => {
        setActiveTab(path);
    };

    const getLinkClassName = (path) => {
        return activeTab === path ? "tab-active" : "tab";
    };

    return (
        <div className="nav-bar">
            <Link href="/main-page/diary-list/daily" className={getLinkClassName("/main-page/diary-list")} onClick={() => handleLinkClick("/main-page/diary-list")}>
                <FaBook className="book-icon" />
            </Link>
            <Link href="/main-page/emotions/today" className={getLinkClassName("/main-page/emotions")} onClick={() => handleLinkClick("/main-page/emotions")}>
                <FaFaceSmile className="nav-emotion-icon" />
            </Link>
            <Link href="/main-page/profile/main" className={getLinkClassName("/main-page/profile")} onClick={() => handleLinkClick("/main-page/profile")}>
                <FaUser className="profile-icon" />
            </Link>
        </div>
    );
}
