"use client";

import React, { useEffect, useState } from "react";
import "./chatting-room.css";
import ChatbotContainer from "./chatbotContainer.js";
import MeContainer from "./meContainer.js";
import ChatInputField from "./chatInputField.js";

export default function ChattingRoomPage() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const response = await fetch("https://empathydiaryapi.com/chatrooms", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setChats(data.chats);
      } else {
        console.error("Failed to fetch chats:", response.status);
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const sendMessage = async (message) => {
    try {
      const response = await fetch("https://empathydiaryapi.com/chatrooms/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ content: message }),
      });

      if (response.ok) {
        await fetchChats(); // Fetch chats after sending the message
      } else {
        console.error("Failed to send message:", response.status);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="chatting-room-container">
      <div className="chat-contents-container">
        {chats.map((chat, index) =>
          chat.role === "assistant" ? (
            <ChatbotContainer key={index} comment={chat.content} />
          ) : (
            <MeContainer key={index} comment={chat.content} />
          )
        )}
      </div>
      <ChatInputField sendMessage={sendMessage} />
    </div>
  );
}
