import './write-with-ai.css';
import BeforeButton from './beforeButton.js';
import DiaryWriteButton from './diaryWriteButton.js';

export default function WriteWithAILayout({ children }) {
    return (
    <div>
        <div className="wwa-top-container">
            <BeforeButton />
            <h1>AI 챗봇과 작성</h1>
            <DiaryWriteButton />
        </div>
        {children}
    </div>
  );
}

