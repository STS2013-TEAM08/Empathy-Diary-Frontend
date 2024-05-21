import './write-self.css';
import BeforeButton from './beforeButton.js';

export default function WriteSelfLayout({ children }) {
    return (
    <div>
        <div className="ws-top-container">
            <BeforeButton />
            <h1>직접 작성하기</h1>
        </div>
        {children}
    </div>
  );
}

