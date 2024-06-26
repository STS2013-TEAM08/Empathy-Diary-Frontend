"use client"; 

import WriteButton from './writeButton.js';
import { useState, useEffect } from 'react';
import "./main-page.css";
import MainNavBar from './mainNavBar';
import {Faplus} from "react-icons/fa6";

export default function MainPageLayout({ children }) {
    const [nickname, setNickname] = useState("");

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('https://empathydiaryapi.com/users', {
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
      <WriteButton />
      {children}
    </div>
  );
}

