// src/app/page.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-500">
      <Image src="images/logo.svg" alt="Game Logo" width={600} height={600} className="mb-6" />
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => router.push("/question")}
      >
        →
      </button>
    </div>
  );
};

export default Home;
