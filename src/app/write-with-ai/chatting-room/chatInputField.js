"use client";

import React, { useState } from "react";
import "./chatting-room.css";
import { FaPaperPlane } from "react-icons/fa6";

export default function ChatInputField({ sendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await sendMessage(message);
      setMessage(""); // Clear the input field after sending the message
    }
  };

  return (
    <div className="chat-input-field">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="myCommentInput"
          placeholder="메세지를 입력하세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">
          <FaPaperPlane className="comment-send-icon" />
        </button>
      </form>
    </div>
  );
}
