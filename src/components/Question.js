// Question.js (問題表示コンポーネント)
import React from "react";

const Question = ({ image }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt="問題" className="w-80 h-80 object-contain" />
    </div>
  );
};

export default Question;
