import React from "react";

export default function WalletScreen() {
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-3">Wallet</h2>
      <p>Balance: $150</p>
      <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded">
        Send Money
      </button>
    </div>
  );
}
