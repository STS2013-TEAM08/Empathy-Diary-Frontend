"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaBook, FaFaceSmile, FaUser } from "react-icons/fa6"; 

export default function MainNavBar() {
    const router = useRouter();

    const getLinkClassName = (path) => {
        return router.pathname === path ? "tap-active" : "tap";
    };

    return (
        <div className="nav-bar">
            <Link href="/daily-list" className={getLinkClassName("/daily-list")}><FaBook className="book-icon" /></Link>
            <Link href="/emotions" className={getLinkClassName("/emotions")}><FaFaceSmile className="emotion-icon" /></Link>
            <Link href="/profile" className={getLinkClassName("/profile")}><FaUser className="profile-icon" /></Link>
        </div>
    );
}
