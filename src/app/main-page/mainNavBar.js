"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaBook, FaFaceSmile, FaUser } from "react-icons/fa6"; 

export default function MainNavBar() {
    const router = useRouter();
    console.log(router.pathname);

    const getLinkClassName = (path) => {
        return router.pathname === path ? "tab-active" : "tab";
    };

    return (
        <div className="nav-bar">
            <Link href="/main-page/diary-list" className={getLinkClassName("/main-page/diary-list")}><FaBook className="book-icon" /></Link>
            <Link href="/main-page/emotions" className={getLinkClassName("/main-page/emotions")}><FaFaceSmile className="emotion-icon" /></Link>
            <Link href="/main-page/profile" className={getLinkClassName("/main-page/profile")}><FaUser className="profile-icon" /></Link>
        </div>
    );
}
