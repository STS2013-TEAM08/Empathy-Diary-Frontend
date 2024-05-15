import ThisWeekGraph from './thisWeekGraph.js';

export default function ThisWeekPage() {
    return (
        <div className="this-week-container">
            <p className="this-week-inst">
                지난 일주일 간의 <br></br>감정 변화를 확인하세요
            </p>
            <ThisWeekGraph className="this-week-graph"/>
        </div>
    );
}