"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 to-pink-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Subscribe Our Newsletter
          </h2>
          <p className="text-gray-700 text-lg">
            we don't send spam so don't worry
          </p>
        </div>

        {/* Email Input */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-full shadow-lg p-2 flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Your email address"
              className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none text-lg"
            />
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
