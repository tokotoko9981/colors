// src/app/clear/page.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Clear = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">🎉</h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => router.push("/")}
      >
        ←
      </button>
    </div>
  );
};

export default Clear;
