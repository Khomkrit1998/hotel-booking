import React from "react";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="flex flex-col items-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center animate-pulse-scale">
            <span className="text-white font-bold text-2xl">H</span>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-30 animate-spin-slow"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">HotelBook</h2>
          <p className="text-gray-600 animate-fade-in-delayed">กำลังโหลด...</p>
        </div>

        {/* Loading Bars */}
        <div className="flex space-x-2">
          <div className="w-2 h-8 bg-blue-400 rounded-full animate-loading-bar-1"></div>
          <div className="w-2 h-8 bg-blue-500 rounded-full animate-loading-bar-2"></div>
          <div className="w-2 h-8 bg-cyan-400 rounded-full animate-loading-bar-3"></div>
          <div className="w-2 h-8 bg-cyan-500 rounded-full animate-loading-bar-4"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-blue-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
