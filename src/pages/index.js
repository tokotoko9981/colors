// index.js (ホーム画面)
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">謎解きゲーム</h1>
      <button className="mt-4 p-4 bg-blue-500 text-white rounded-lg" onClick={() => navigate("/question/1")}>
        スタート
      </button>
    </div>
  );
};

export default Home;
