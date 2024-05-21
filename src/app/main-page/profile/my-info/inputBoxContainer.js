"use client";

import React, { useEffect, useState } from 'react';
import { FaPen, FaUser, FaLock, FaEnvelope } from "react-icons/fa6";
import Link from 'next/link';
import "./my-info.css";

export default function InputBoxContainer() {
    const [userInfo, setUserInfo] = useState({
        nickname: '',
        id: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        newConfirmPassword: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('https://empathydiaryapi.com/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserInfo({
                        nickname: data.nickname,
                        id: data.userId,
                        email: data.email,
                        currentPassword: '',
                        newPassword: '',
                        newConfirmPassword: ''
                    });
                } else {
                    console.error('Failed to fetch user info:', response.status);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://empathydiaryapi.com/users', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    newNickname: userInfo.nickname,
                    newPassword: userInfo.newPassword,
                    newConfirmPassword: userInfo.newConfirmPassword,
                    password: userInfo.currentPassword
                })
            });

            if (response.ok) {
                const data = await response.text();
                console.log('User info updated successfully:', data);
                setIsSubmitted(true);
            } else {
                console.error('Failed to update user info:', response.status);
            }
        } catch (error) {
            console.error('Error updating user info:', error);
        }
    };

    return (
        <div className="my-info-form">
            <div className="input-box">
                <FaUser className="input-icon" />
                <input
                    type="text"
                    name="nickname"
                    placeholder="닉네임"
                    value={userInfo.nickname}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-box">
                <FaPen className="input-icon" />
                <input
                    type="text"
                    name="id"
                    placeholder="아이디"
                    value={userInfo.id}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-box">
                <FaEnvelope className="input-icon" />
                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-box">
                <FaLock className="input-icon" />
                <input
                    type="password"
                    name="currentPassword"
                    placeholder="현재 비밀번호"
                    value={userInfo.currentPassword}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-box">
                <FaLock className="input-icon" />
                <input
                    type="password"
                    name="newPassword"
                    placeholder="새로운 비밀번호"
                    value={userInfo.newPassword}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-box">
                <FaLock className="input-icon" />
                <input
                    type="password"
                    name="newConfirmPassword"
                    placeholder="비밀번호 확인"
                    value={userInfo.newConfirmPassword}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="my-info-buttons">
                <button className="my-info-cancel-button">
                    취소
                </button>
                {isSubmitted ? (
                    <Link href="/main-page/profile/complete">
                        <a className="my-info-complete-button">완료</a>
                    </Link>
                ) : (
                    <button className="my-info-complete-button" onClick={handleSubmit}>
                        완료
                    </button>
                )}
            </div>
        </div>
    );
}
