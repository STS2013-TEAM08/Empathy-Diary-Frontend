// ChatbotContainer.js
"use client";

import "./chatting-room.css";
import { FaRobot } from "react-icons/fa6";

export default function ChatbotContainer({ comment }) {
  return (
    <div className="chatbot-container">
      <div className="chatbot-profile">
        <FaRobot className="chatbot-icon" />
      </div>
      <div className="chatbot-comment">
        <p>{comment}</p>
      </div>
    </div>
  );
}
