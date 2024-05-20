"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import "./summary.css";
import SummaryContainer from "./summaryContainer";

export default function SummaryPage() {
    const searchParams = useSearchParams();
    const content = searchParams.get('content');

    return (
        <div className="summary-sub-container">
            <h3>AI 챗봇이 작성한 일기입니다.</h3>
            <p>
                원하는 내용으로 수정할 수 있습니다.
            </p>
            <SummaryContainer content={content} />
        </div>
    );
}
