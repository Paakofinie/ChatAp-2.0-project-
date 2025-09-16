import React, { useState } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Alice", text: "Hey there! 👋", reactions: [] },
    { id: 2, sender: "You", text: "Hello! How’s it going?", reactions: [] },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { id: Date.now(), sender: "You", text: input, reactions: [] }]);
    setInput("");
  };

  const addReaction = (id, emoji) => {
    setMessages(messages.map(m => 
      m.id === id ? { ...m, reactions: [...m.reactions, emoji] } : m
    ));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(m => (
          <div key={m.id} className="mb-3">
            <span className="font-bold">{m.sender}: </span>
            {m.text}
            <div className="flex gap-2 mt-1">
              {["👍", "❤️", "😂"].map(emoji => (
                <button
                  key={emoji}
                  onClick={() => addReaction(m.id, emoji)}
                  className="text-sm"
                >
                  {emoji}
                </button>
              ))}
            </div>
            <div>{m.reactions.join(" ")}</div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex">
        <input
          className="flex-1 border rounded p-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-green-600 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
