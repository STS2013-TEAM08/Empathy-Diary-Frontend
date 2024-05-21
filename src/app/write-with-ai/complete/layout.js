import './complete.css';

export const metadata = {
    title: "Empathy Diary",
    description: "Generated by create next app",
  };

export default function CompleteLayout({ children }) {
    return (
    <div className="complete-container">
        {children}
    </div>
  );
}

