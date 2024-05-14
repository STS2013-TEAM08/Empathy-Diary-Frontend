import Calendar from './Datepicker.js';

export default function DailyPage() {
    const year = 2024;
    const month = 4;
    const day = 19;
    const diaryContent = "오늘은 정말 행복한 하루였다. 아침에 일어나자마자 밖은 맑고 화창한 날씨였다. 나는 친구들과 함께 산책을 하며 신선한 공기를 마시고, 따뜻한 햇살을 만끽했다. 우리는 함께 맛있는 아이스크림을 먹으며 이야기를 나누고, 웃음꽃을 피웠다. 그 순간 모든 걱정거리들이 사라진 것만 같았다. 저녁에는 가족과 함께 저녁을 먹으며 오늘 있었던 즐거운 일들을 공유했다. 가족들과의 따뜻한 대화는 나를 더욱 행복하게 만들었다. 오늘 하루는 진정 행복한 추억으로 남을 것 같다. 모든 순간이 소중하고 감사한 하루였다.";
    
    return (
        <div>
            <div className="calendar-container">
                <Calendar />
            </div>
            
            {/* <div className="no-diary">
                <p>이 날 작성된 일기가 없습니다.</p>
            </div> */}
           
            <div className="diary-content">
                <h1>{year}.{month}.{day}</h1>
                <p>{diaryContent}</p>
            </div>
        </div>
    );
}