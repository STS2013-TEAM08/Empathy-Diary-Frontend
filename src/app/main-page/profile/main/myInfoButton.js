import Link from 'next/link'; // Import the Link component from Next.js
import "./main.css";

export default function MyInfoButton() {
    return (
        <Link href="/main-page/profile/my-info">
            <button className="my-info-button">
                내 정보 수정
            </button>
        </Link>
    );
}
