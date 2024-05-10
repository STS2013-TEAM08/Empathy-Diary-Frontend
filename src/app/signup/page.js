"use client"

import Link from 'next/link'
import "./signup.css";

export default function Signin() {
    return(
        <form className="main-container">
            <div className="signup-form">
                <input type="text" name="nickname" placeholder="닉네임" required />
                <input type="text" name="id" placeholder="아이디" required />
                <input type="password" name="password" placeholder="비밀번호" required />
                <input type="password" name="password-check" placeholder="비밀번호 확인" required />
                <input type="text" name="email" placeholder="이메일 주소" required />
                <p className="retry-inst"></p>
                <button type="submit">회원가입</button>
            </div>
            <div className="to-signin">
                <p>이미 계정이 있으신가요?</p>
                <Link href="/signin">로그인</Link>
            </div>
        </form>
    )
}
