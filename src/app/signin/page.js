"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import "./signin.css";

export default function Signin() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userId = event.target.id.value;
        const password = event.target.password.value;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, password })
        };

        try {
            const response = await fetch('http://43.201.47.70/users/login', options);
            if (response.ok) {
                router.push('/signin-good');
            } else {
                setErrorMessage('아이디 혹은 비밀번호가 잘못되었습니다.');
            }
        } catch (error) {
            console.error('로그인 에러:', error);
            setErrorMessage('로그인 중 문제가 발생했습니다.'); 
            router.push('/signin-bad');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <img src="/logo.png" className="logo" />
            <div className="login-form">
                <input type="text" name="id" placeholder="아이디" required />
                <input type="password" name="password" placeholder="비밀번호" required />
                <p className="retry-inst">{errorMessage}</p> {/* 에러 메시지 출력 */}
                <button type="submit">로그인</button>
            </div>
            <div className="to-signup">
                <p><span>공감 다이어리</span>가 처음이신가요?</p>
                <Link href="/signup">회원가입</Link>
            </div>
        </form>
    );
}
