import React from "react";

const contacts = [
  { id: 1, name: "Alice", lastMessage: "See you soon 😊" },
  { id: 2, name: "Bob", lastMessage: "Let’s catch up!" },
  { id: 3, name: "Charlie", lastMessage: "🔥🔥🔥" },
];

export default function ContactsList() {
  return (
    <div>
      {contacts.map((c) => (
        <div
          key={c.id}
          className="p-4 border-b hover:bg-gray-100 cursor-pointer"
        >
          <h3 className="font-bold">{c.name}</h3>
          <p className="text-gray-600">{c.lastMessage}</p>
        </div>
      ))}
    </div>
  );
}
