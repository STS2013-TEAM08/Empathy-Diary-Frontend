import Link from 'next/link'
import "./globals.css";

export const metadata = {
  title: "Empathy Diary",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <div className="container">
        {children}
      </div>
      </body>
    </html>
  );
}
