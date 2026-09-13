import React, { useState } from 'react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75"
        aria-label="Toggle Live Chat"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col transition-all duration-300 ease-in-out transform origin-bottom-right">
          <div className="flex justify-between items-center bg-primary-600 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Live Chat</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200" aria-label="Close Chat">
              &times;
            </button>
          </div>
          <div className="flex-grow p-4 text-gray-700">How can we help you today?</div>
        </div>
      )}
    </>
  );
};

export default LiveChat;