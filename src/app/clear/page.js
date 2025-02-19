// src/app/clear/page.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Clear = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-rainbow">
      <div className="max-w-2xl text-black text-sm md:text-base leading-relaxed mb-6">
        <h2 className="text-lg font-bold">Congratulations!</h2>
        <p>おめでとうございます！</p>
        <p>あなたは全ての謎を解き明かしました！</p>
        
        <h2 className="text-lg font-bold mt-4">THANK YOU FOR PLAYING!</h2>
      </div>
    </div>
  );
};

export default Clear;
