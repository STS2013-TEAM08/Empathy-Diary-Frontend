"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import "./main.css";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch('https://empathydiaryapi.com/users/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include credentials for authentication
            });

            if (response.ok) {
                console.log('Logout successful');
                // Navigate to the signin page
                router.push('/signin');
            } else {
                console.error('Failed to logout:', response.status);
                // Handle error accordingly
            }
        } catch (error) {
            console.error('Error logging out:', error);
            // Handle error accordingly
        }
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            로그아웃
        </button>
    );
}
