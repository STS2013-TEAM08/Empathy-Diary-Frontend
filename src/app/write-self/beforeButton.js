"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./write-self.css";
import { FaChevronLeft } from "react-icons/fa6";

export default function BeforeButton() {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <button className="ws-before-button" onClick={handleBackClick}>
            <FaChevronLeft className="ws-before-button-icon"/>
        </button>
    );
}
