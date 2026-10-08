import React, { useRef, useState } from "react";
import { MessageCircle, X, Send, Bot, User, BookDashed } from "lucide-react";
import BotMsg from "./BotMsg";
import UserMsg from "./UserMsg";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      message: "Hello, How may I help You?",
    },
  ]);
  const messageDiv = useRef();
  const inputRef = useRef();

  // handleSend
  const handleSend = () => {
    let bot = "";

    const message = inputRef.current.value.toLowerCase();

    if (
      message.includes("hi") ||
      message.includes("hello") ||
      message.includes("hey")
    ) {
      bot = "Hey! How may I help you? 🙏";
    } else if (message.includes("puja")) {
      bot = "Sure! Which Puja would you like to book? 🪔";
    } else if (message.includes("book")) {
      bot = "Sure! I can help you with Puja booking. 🙏";
    } else if (message.includes("price") || message.includes("cost")) {
      bot =
        "Please tell me which Puja you are interested in, and I'll help you with the pricing.";
    } else if (message.includes("pandit")) {
      bot = "We provide verified Pandits for different types of Puja. 🙏";
    } else if (message.includes("home")) {
      bot = "Yes! We provide Puja services at your home. 🏠";
    } else if (message.includes("location") || message.includes("area")) {
      bot =
        "Please share your location so I can help you find available services.";
    } else if (message.includes("thank")) {
      bot = "You're most welcome! 😊";
    } else if (message.includes("bye")) {
      bot = "Thank you for contacting Aaple Guruji. Have a blessed day! 🙏";
    } else {
      bot =
        "I'm sorry, I didn't understand that. Could you please tell me what you need help with?";
    }

    setMessages([
      ...messages,
      { role: "user", message },
      { role: "bot", message: bot },
    ]);
    inputRef.current.value = "";
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            fixed z-40 right-6 bottom-24
            w-[380px] h-[520px]
            bg-white
            rounded-2xl
            shadow-2xl
            border border-gray-200
            overflow-hidden
            flex flex-col
          "
        >
          {/* Header */}
          <div className="bg-green-500 text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={22} />
              </div>

              <div>
                <h3 className="font-semibold">Aaple Guruji</h3>
                <p className="text-xs text-green-100">
                  Online • Usually replies instantly
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={messageDiv}
            className="flex-1 bg-gray-50 p-4 overflow-y-auto space-y-4"
          >
            {/* messages */}
            {messages.map((msg, idx) => {
              if (msg.role === "user") {
                return <UserMsg msg={msg.message} key={idx} />;
              } else {
                return <BotMsg msg={msg.message} key={idx} />;
              }
            })}
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
                className="
                  flex-1
                  h-11
                  px-4
                  rounded-full
                  border border-gray-200
                  outline-none
                  text-sm
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                  text-black
                "
              />

              <button
                onClick={handleSend}
                className="
                  w-11 h-11
                  rounded-full
                  bg-green-500
                  text-white
                  flex items-center justify-center
                  hover:bg-green-600
                  transition
                "
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed z-50
          right-6 bottom-6
          w-16 h-16
          rounded-full
          bg-green-500
          text-white
          flex items-center justify-center
          shadow-xl
          hover:bg-green-600
          hover:scale-105
          transition-all duration-300
        "
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={30} />}

        {/* Online Indicator */}
        {!isOpen && (
          <span
            className="
            absolute
            top-0 right-0
            w-4 h-4
            bg-red-500
            border-2 border-white
            rounded-full
          "
          />
        )}
      </button>
    </>
  );
};

export default ChatBox;
