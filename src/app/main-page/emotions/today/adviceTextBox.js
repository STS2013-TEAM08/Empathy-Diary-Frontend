"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import './today.css';

export default function AdviceTextBox() {
    const [advice, setAdvice] = useState("");

    const handleChange = (e) => {
        setAdvice(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://empathydiaryapi.com/advices', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies for authentication
                body: JSON.stringify({ content: advice }), // Send the advice content
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Advice created:', data);

                // Show the alert
                alert("조언이 등록되었습니다!");

                // Clear the input field
                setAdvice("");
            } else {
                console.error('Failed to submit advice:', response.status);
                // Handle error accordingly
            }
        } catch (error) {
            console.error('Error submitting advice:', error);
            // Handle error accordingly
        }
    };

    return (
        <form className="advice-send-box" onSubmit={handleSubmit}>
            <input
                type="text"
                name="advice"
                placeholder="다른 사람들에게 조언의 메세지를 남겨보세요."
                value={advice}
                onChange={handleChange}
            />
            <button type="submit"><FaPaperPlane className="send-icon" /></button>
        </form>
    );
}
