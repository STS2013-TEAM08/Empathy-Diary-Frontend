import './summary.css';

export const metadata = {
    title: "Empathy Diary",
    description: "Generated by create next app",
  };

export default function SummaryLayout({ children }) {
    return (
    <div className="summary-container">
        {children}
    </div>
  );
}
