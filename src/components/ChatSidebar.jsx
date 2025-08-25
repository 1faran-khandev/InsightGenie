import React, { useState, useRef, useEffect } from "react";
import { mockAIResponse } from "../utils/mockAIResponse";
import { Bot, User, X } from "lucide-react";

const MessageBubble = ({ sender, text }) => {
  const isAI = sender === "ai";
  return (
    <div
      className={`max-w-xs p-3 rounded-2xl text-sm shadow-md transition-all animate-fadeIn ${
        isAI
          ? "bg-blue-100 text-blue-900 self-start rounded-bl-sm"
          : "bg-green-100 text-green-900 self-end rounded-br-sm"
      }`}
    >
      <div className="flex items-center gap-2">
        {isAI ? <Bot size={16} /> : <User size={16} />}
        <span>{text}</span>
      </div>
    </div>
  );
};

const TypingDots = () => (
  <div className="flex space-x-1 self-start text-blue-500 pl-2">
    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></span>
    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></span>
  </div>
);

const ChatSidebar = ({ data, onClose }) => {
  const [messages, setMessages] = useState([
    { id: Date.now(), sender: "ai", text: "👋 Welcome! Ask me anything about your data." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);
    setTimeout(() => {
      const aiFullText = mockAIResponse(userMessage.text, data);
      const aiMessage = { id: Date.now() + 1, sender: "ai", text: "" };

      setMessages((prev) => [...prev, aiMessage]);

      let i = 0;
      const interval = setInterval(() => {
        i++;
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessage.id ? { ...msg, text: aiFullText.slice(0, i) } : msg
          )
        );
        if (i >= aiFullText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 30);
    }, 600);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header with Close (X) */}
      <header className="pb-3 border-b border-gray-200 mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Bot size={18} className="text-blue-600" /> AI Chat
        </h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={18} />
        </button>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-3 space-y-3 pr-2 flex flex-col">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
        {isTyping && <TypingDots />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <footer className="flex gap-2 mt-auto pt-2 border-t border-gray-200">
        <input
          type="text"
          placeholder="Ask about your data..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 text-sm"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </footer>
    </div>
  );
};

export default ChatSidebar;
