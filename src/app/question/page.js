// src/app/question/page.js
"use client";
import React, { useState } from "react";
import questions from "../../data/questions.json";
import Question from "../../components/Question";
import NumberPad from "../../components/NumberPad";
import { useRouter } from "next/navigation";

const QuestionPage = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [input, setInput] = useState("");

  const handleInput = (num) => {
    setInput((prev) => prev + num);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleSubmit = () => {
    if (input === questions[currentQuestion].answer) {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setInput("");
      } else {
        router.push("/clear");
      }
    } else {
      alert("不正解です！");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <Question image={questions[currentQuestion].image} />
      <div className="text-2xl my-4">{input}</div>
      <NumberPad onInput={handleInput} onSubmit={handleSubmit} onClear={handleClear} />
      {currentQuestion > 0 && (
        <button
          className="mt-4 p-2 bg-gray-500 text-white rounded-lg"
          onClick={() => setCurrentQuestion((prev) => prev - 1)}
        >
          戻る
        </button>
      )}
    </div>
  );
};

export default QuestionPage;
