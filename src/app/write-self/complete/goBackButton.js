"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./complete.css";

export default function GoBackButton() {
    const router = useRouter();

    const handleGoBack = () => {
        router.push('/main-page/diary-list/daily');
    };

    return (
        <button className="wwa-goback-button" onClick={handleGoBack}>
            돌아가기
        </button>
    );
}
