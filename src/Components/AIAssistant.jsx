import React, { useState } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(["Hi, I’m your AI assistant 🤖"]);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-green-600 text-white rounded-full p-4 shadow-lg"
      >
        🤖
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 bg-white shadow-lg border rounded-lg w-64 p-3">
          {messages.map((m, i) => (
            <p key={i} className="mb-2">{m}</p>
          ))}
          <input
            type="text"
            placeholder="Ask me anything..."
            className="border w-full p-2 rounded"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setMessages([...messages, `You: ${e.target.value}`]);
                e.target.value = "";
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
