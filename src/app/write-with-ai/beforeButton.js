"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./write-with-ai.css";
import { FaChevronLeft } from "react-icons/fa6";

export default function BeforeButton() {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <button className="wwa-before-button" onClick={handleBackClick}>
            <FaChevronLeft className="wwa-before-button-icon"/>
        </button>
    );
}
