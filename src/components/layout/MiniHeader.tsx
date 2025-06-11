"use client";

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function MiniHeader() {
  const [language, setLanguage] = useState("TH");

  return (
    <div className="bg-gray-100 text-gray-700 text-xs md:text-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Contact Info - ซ่อนบนมือถือ */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="flex items-center">
            <span className="mr-1">📧</span>
            support@example.com
          </span>
          <span className="flex items-center">
            <span className="mr-1">📞</span>
            +66 1234 5678
          </span>
        </div>

        {/* Mobile: แสดงเฉพาะเบอร์โทร */}
        <div className="md:hidden flex items-center">
          <span className="flex items-center text-xs">
            <span className="mr-1">📞</span>
            +66 1234 5678
          </span>
        </div>

        {/* Social Media & Language */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Social Media - ปรับขนาดบนมือถือ */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-1" aria-label="Facebook">
              <FaFacebookF className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-1" aria-label="Twitter">
              <FaTwitter className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-1" aria-label="Instagram">
              <FaInstagram className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>

          {/* Language Selector */}
          <select
            aria-label="เลือกภาษา"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded px-1 py-0.5 md:px-2 md:py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary text-xs md:text-sm"
          >
            <option value="TH">ไทย</option>
            <option value="EN">English</option>
            <option value="JP">日本語</option>
          </select>
        </div>
      </div>
    </div>
  );
}
