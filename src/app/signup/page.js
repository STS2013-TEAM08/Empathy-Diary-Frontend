"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import "./signup.css";

export default function Signup() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const nickname = event.target.nickname.value;
        const userId = event.target.id.value;
        const password = event.target.password.value;
        const passwordCheck = event.target['password-check'].value;
        const email = event.target.email.value;

        if (password !== passwordCheck) {
            setErrorMessage("비밀번호와 확인 비밀번호가 일치하지 않습니다.");
            return;
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, email, nickname, password, confirmPassword: passwordCheck })
        };

        try {
            const response = await fetch('http://43.201.47.70/users', options);
            const resultText = await response.text();

            if (response.ok) {
                router.push('/signup-success');
            } else {
                switch (response.status) {
                    case 400:
                        setErrorMessage("비밀번호가 일치하지 않습니다.");
                        break;
                    case 409:
                        setErrorMessage("이미 존재하는 ID입니다.");
                        break;
                    default:
                        setErrorMessage("회원 가입에 실패했습니다.");
                        break;
                }
            }
        } catch (error) {
            console.error('회원 가입 에러:', error);
            setErrorMessage("서버 오류로 인해 회원 가입에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-main-container">
            <div className="signup-form">
                <input type="text" name="nickname" placeholder="닉네임" required />
                <input type="text" name="id" placeholder="아이디" required />
                <input type="password" name="password" placeholder="비밀번호" required />
                <input type="password" name="password-check" placeholder="비밀번호 확인" required />
                <input type="text" name="email" placeholder="이메일 주소" required />
                <p className="retry-inst">{errorMessage}</p>
                <button type="submit">회원가입</button>
            </div>
            <div className="to-signin">
                <p>이미 계정이 있으신가요?</p>
                <Link href="/signin">로그인</Link>
            </div>
        </form>
    );
}
