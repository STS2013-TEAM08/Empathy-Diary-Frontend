// MeContainer.js
"use client";

import "./chatting-room.css";

export default function MeContainer({ comment }) {
  return (
    <div className="my-container">
      <div className="my-comment">
        <p>{comment}</p>
      </div>
    </div>
  );
}
