import React from "react";

export default function StoriesScreen() {
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4">Stories</h2>
      <div className="flex gap-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
          📷 Poll
        </div>
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
          🎶 Music
        </div>
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
          🔴 Live
        </div>
      </div>
    </div>
  );
}
