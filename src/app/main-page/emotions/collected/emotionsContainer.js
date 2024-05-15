import { FaFaceSmile, FaFaceGrinHearts, FaFaceSmileBeam, FaFaceFrownOpen, FaFaceSadTear, FaFaceAngry, FaFaceSurprise, FaFaceMeh, FaFaceGrimace, FaFaceFrown, FaFaceGrinBeamSweat } from "react-icons/fa6";

export default function EmotionsContainer() {
    const totalNum=36;
    const emotion1 = <FaFaceSmile />;
    const emotion1Name = "행복";
    const emotion1Num = 10;

    const emotion2 = <FaFaceSmile />;
    const emotion2Name = "행복";
    const emotion2Num = 10;

    return (
        <div className="collected-emotions-container">
            <div className="total-num-container">
                <p>수집한 감정 <span>{totalNum}개</span></p>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo2-container">
                {emotion2}
                <div className="emo2-sub-container">
                    <h3>{emotion2Name}</h3>
                    <p>{emotion2Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
            <div className="emo1-container">
                {emotion1}
                <div className="emo1-sub-container">
                    <h3>{emotion1Name}</h3>
                    <p>{emotion1Num}개</p>
                </div>
            </div>
        </div>
    );
}
