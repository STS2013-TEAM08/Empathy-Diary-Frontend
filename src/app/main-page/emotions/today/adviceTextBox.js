import { FaPaperPlane } from "react-icons/fa6";
import './today.css';

export default function AdviceTextBox() {
    return (
        <div className="advice-send-box">
            <input type="text" name="advice" placeholder="다른 사람들에게 조언의 메세지를 남겨보세요." />
			<button type="submit"><FaPaperPlane  className="send-icon"/></button>
        </div>
    );
}
