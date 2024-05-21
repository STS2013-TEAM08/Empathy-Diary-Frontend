import "./main.css";
import LogoutButton from './logoutButton.js';
import MyInfoButton from './myInfoButton.js';

export default function ProfileMainPage() {
    const nickname = "윤빈";
    const mailAddress = "lillycho0810@naver.com"
    const diaryNum = 10;
    const emotionNum = 20;

    return (
        <div className="profile-main-container">
            <h2 className="nickname-info"><span>{nickname}</span>님,<br></br>환영합니다!</h2>
            <p className="email-info">{mailAddress}</p>
            <div className="diary-emotion-info">
                <div className="info-box">
                    <h3>작성한 일기</h3>
                    <p>{diaryNum}개</p>
                </div>
                <div className="info-box">
                    <h3>수집한 감정</h3>
                    <p>{emotionNum}개</p>
                </div>
            </div>
            <div className="profile-buttons">
                <LogoutButton />
                <MyInfoButton />
            </div>
        </div>
    );
}