import "./complete.css";
import Link from 'next/link';

export default function ProfileCompletePage() {
    return (
        <div className="profile-complete-container">
            <img src="/check.png" className="profile-complete-checkImg" />
            <p>정보 수정이 완료되었습니다!</p>
            <button>
                <Link href="/main-page/profile/main">
                    돌아가기
                </Link>
            </button>
        </div>
    );
}