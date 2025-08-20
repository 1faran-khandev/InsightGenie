import React, { useState, useRef, useEffect } from "react";
import { mockAIResponse } from "../utils/mockAIResponse";

// Reusable message bubble
const MessageBubble = ({ sender, text }) => {
  const isAI = sender === "ai";
  return (
    <div
      className={`p-3 rounded-2xl max-w-xs text-sm shadow-sm ${
        isAI
          ? "bg-blue-100 text-blue-900 self-start"
          : "bg-green-100 text-green-900 self-end"
      }`}
    >
      {text}
    </div>
  );
};

const ChatSidebar = ({ data }) => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Welcome! Ask me anything about your data." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Simulate AI typing
    setIsTyping(true);
    const userInput = input;
    setInput("");

    setTimeout(() => {
      // Generate AI response based on dataset
      const aiText = mockAIResponse(userInput, data);
      setMessages((prev) => [...prev, { sender: "ai", text: aiText }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xl font-bold mb-4">AI Chat</h3>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2"
        role="log"
        aria-live="polite"
      >
        {messages.map((msg, index) => (
          <MessageBubble key={index} sender={msg.sender} text={msg.text} />
        ))}

        {isTyping && (
          <div className="text-gray-500 text-sm italic self-start">
            AI is typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask about your data..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          aria-label="Chat input"
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
