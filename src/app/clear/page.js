// src/app/clear/page.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Clear = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-rainbow">
      <h1 className="text-clear-title">🎉</h1>
      <button type="button" className="btn-clear" onClick={() => router.push("/")}>
        ←
      </button>
    </div>
  );
};

export default Clear;
