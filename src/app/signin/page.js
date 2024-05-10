import Link from 'next/link'
import "./signin.css";

export default function Signin() {
    return(
        <div className="main-container">
            <img src="/logo.png" className="logo"></img>
            <div className="login-form">
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <button type="submit">로그인</button>
            </div>
            <div className="to-signup">
                <p><span>공감 다이어리</span>가 처음이신가요?</p>
                <Link href="/signup">회원가입</Link>
            </div>
        </div>
    )
}
