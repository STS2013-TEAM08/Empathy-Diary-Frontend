import EmotionsContainer from './emotionsContainer.js';

export default function CollectedPage() {
    return (
        <div className="collected-container">
            <p>
                지금까지 수집한<br></br>감정들을 확인하세요
            </p>
            <EmotionsContainer />
        </div>
    );
}