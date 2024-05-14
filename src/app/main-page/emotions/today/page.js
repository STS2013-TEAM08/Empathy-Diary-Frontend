import Calendar from './Datepicker.js';
import AdviceBox from './adviceBox.js';
import AdviceTextBox from './adviceTextBox.js'
import { FaFaceLaugh } from "react-icons/fa6";

export default function TodayPage() {
    const emotion="행복";
    const p_score = 50;
    const n_score = 50;
    const pplNum = 40;
    
    return (
        <div className="today-container">
            <div className="today-scroll-container">
                <div className="calendar-container">
                    <Calendar />
                </div>
                
                {/* <div className="today-no-diary">
                    <p>이 날 작성된 일기가 없습니다.</p>
                </div> */}
           
                <div className="emotion-content">
                    <FaFaceLaugh className="face"/>
                    <p className="inst1">이 날 당신의 감정은</p>
                    <p className = "emotion">{emotion}</p>
                    <div className="pn-score">
                        <p>긍정 점수 <span>{p_score}</span>/100</p>
                        <p>부정 점수 <span>{n_score}</span>/100</p>
                    </div>
                    <p className="people">이 날 당신과 같은 감정을 느낀 사람은 <span>{pplNum}명</span>입니다.</p>
                </div>
                <div className="advice-container">
                    <p className="inst2">
                        같은 감정을 느낀 사람들의<br></br>조언을 살펴보세요
                    </p>
                    <AdviceBox />
                    <AdviceBox />
                    <AdviceBox />
                    <AdviceBox />
                    <AdviceBox />
                    <AdviceBox />
                </div>
            </div>
            <AdviceTextBox />
        </div>
    );
}