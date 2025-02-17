// clear.js (クリア画面の実装)
import React from "react";
import { useNavigate } from "react-router-dom";

const Clear = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">🎉 クリア！ 🎉</h1>
      <button className="mt-4 p-2 bg-blue-500 text-white rounded-lg" onClick={() => navigate("/")}>
        ホームへ戻る
      </button>
    </div>
  );
};

export default Clear;
