"use client";

import Link from 'next/link';

export default function DiaryListNavBar() {
    return (
        <div className="second-nav-bar">
            <Link href="/main-page/diary-list/daily" className="daily">날짜선택</Link>
            <Link href="/main-page/diary-list/gathering" className="gathering">모아보기</Link>
        </div>
    );
}
