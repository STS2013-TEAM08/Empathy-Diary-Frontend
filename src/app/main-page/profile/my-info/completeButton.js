"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import "./my-info.css";

export default function CompleteButton({ handleSubmit }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleClick = async () => {
        const success = await handleSubmit();
        if (success) {
            setIsSubmitted(true);
        }
    };

    return (
        <>
            <button className="my-info-complete-button" onClick={handleClick}>
                완료
            </button>
            {isSubmitted && (
                <Link href="/main-page/profile/complete">
                    완료
                </Link>
            )}
        </>
    );
}
