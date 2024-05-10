import Link from 'next/link';
import "./signup-success.css";
import LoginButton from './LoginButton.js'; 

export default function SignupSuccess() {
    return (
        <div className="main-container">
            <img src="/check.png" className="checkImg" />
            <div className="inst">
                <p className="welcome">환영합니다!</p>
                <p className="signin-inst">회원가입이 완료되었습니다. 로그인 해주세요.</p>
            </div>
            <LoginButton />  
        </div>
    );
}
