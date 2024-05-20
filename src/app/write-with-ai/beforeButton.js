"use client";

import "./write-with-ai.css";
import { FaChevronLeft } from "react-icons/fa6";

export default function BeforeButton() {
    return (
        <button className="wwa-before-button">
            <FaChevronLeft className="wwa-before-button-icon"/>
        </button>
    );
}
