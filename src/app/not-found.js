"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div 
        className={`text-center max-w-2xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-[#2c4f42] mb-4 transition-transform duration-300 hover:scale-110">
          404
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 transition-all duration-300 hover:text-[#1a8862]">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto">
          Oops! Looks like you've wandered off the path. Let's get you back to KeenKeeper!
        </p>
        <Link href="/">
          <button className="btn bg-[#2c4f42] text-white hover:bg-[#234035] border-none text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
