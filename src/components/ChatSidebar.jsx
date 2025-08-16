import React, { useState } from "react";

const ChatSidebar = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Welcome! Ask me anything about your data." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Mock AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: `AI Response to: "${input}"` },
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xl font-bold mb-4">AI Chat</h3>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${
              msg.sender === "ai"
                ? "bg-blue-100 self-start"
                : "bg-green-100 self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask about your data..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
