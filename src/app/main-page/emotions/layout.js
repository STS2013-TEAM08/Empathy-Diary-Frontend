import "./emotions.css";
import EmotionsNavBar from './emotionsNavBar.js';

export const metadata = {
  title: "Empathy Diary",
  description: "Generated by create next app",
};

export default function EmotionsPageLayout({ children }) {
    return (
    <div>
        <EmotionsNavBar />
        <div className="emotions-contents">
          {children}
        </div>
    </div>
  );
}