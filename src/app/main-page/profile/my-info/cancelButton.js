import Link from 'next/link'; // Import the Link component from Next.js
import "./my-info.css";

export default function CancelButton() {
    return (
        <Link href="/main-page/profile/main">
            <button className="my-info-cancel-button">
                취소
            </button>
        </Link>
    );
}
