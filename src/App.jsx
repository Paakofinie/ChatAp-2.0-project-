import React, { useState } from "react";
import ContactsList from "./components/ContactsList";
import ChatWindow from "./components/ChatWindow";
import StoriesScreen from "./components/StoriesScreen";
import Communities from "./components/Communities";
import MiniAppsBar from "./components/MiniAppsBar";
import SettingsPrivacy from "./components/SettingsPrivacy";
import CallsScreen from "./components/CallsScreen";
import WalletScreen from "./components/WalletScreen";
import LoginScreen from "./components/LoginScreen";
import AIAssistant from "./components/AIAssistant";

export default function App() {
  const [activeTab, setActiveTab] = useState("chats");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div className="flex flex-col h-screen">
      {/* Top Nav */}
      <div className="flex justify-around bg-green-600 text-white py-3">
        <button onClick={() => setActiveTab("chats")}>Chats</button>
        <button onClick={() => setActiveTab("stories")}>Stories</button>
        <button onClick={() => setActiveTab("communities")}>Communities</button>
        <button onClick={() => setActiveTab("calls")}>Calls</button>
        <button onClick={() => setActiveTab("wallet")}>Wallet</button>
        <button onClick={() => setActiveTab("settings")}>Settings</button>
      </div>

      {/* Main View */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/3 border-r overflow-y-auto">
          <ContactsList />
        </div>
        <div className="flex-1 overflow-y-auto">
          {activeTab === "chats" && <ChatWindow />}
          {activeTab === "stories" && <StoriesScreen />}
          {activeTab === "communities" && <Communities />}
          {activeTab === "calls" && <CallsScreen />}
          {activeTab === "wallet" && <WalletScreen />}
          {activeTab === "settings" && <SettingsPrivacy />}
        </div>
        <MiniAppsBar />
      </div>

      {/* AI Assistant Floating */}
      <AIAssistant />
    </div>
  );
}
