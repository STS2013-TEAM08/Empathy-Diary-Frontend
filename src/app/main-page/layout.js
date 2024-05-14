"use client"; 

import { useState, useEffect } from 'react';
import "./main-page.css";
import MainNavBar from './mainNavBar';

export default function MainPageLayout({ children }) {
    const [nickname, setNickname] = useState("");

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('http://43.201.47.70/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setNickname(data.nickname); 
                } else {
                    console.error('Failed to fetch user info:', response.status);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo(); 
    }, []); 

    return (
    <div>
      <div className="top-container">
        <p className="welcome"><span>{nickname}</span>님,<br />좋은 하루 되세요!</p>
        <MainNavBar />
      </div>
      {children}
    </div>
  );
}

