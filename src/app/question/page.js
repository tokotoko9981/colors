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
  const [maxVisited, setMaxVisited] = useState(0); // ユーザーが到達した最大の問題番号（0-index）
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleInput = (num) => {
    if (error) {
      setInput(String(num));
      setError(false);
    } else {
      if (input.length < 10) {
        setInput((prev) => prev + num);
      }
    }
  };

  const handleClear = () => {
    setInput("");
    setError(false);
  };

  const handleSubmit = () => {
    if (currentQuestion + 1 > maxVisited) {
      setMaxVisited(currentQuestion + 1);
    }    
    if (input === questions[currentQuestion].answer) {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setInput("");
        setError(false);
      } else {
        router.push("/clear");
      }
    } else {
      // エラーの場合、入力欄の表示を赤くする
      setError(true);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-center p-4 ${questions[currentQuestion].bgColor}`}
    >
      <Question image={questions[currentQuestion].image} />
      {/* 入力欄 */}
      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
        </label>
        <input
          type="text"
          id="default-input"
          value={input}
          readOnly
          maxLength="10"
          className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 text-center dark:text-white${
            error ? "border-red-500 text-red-500" : "border-gray-300 text-gray-900"
          } dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      </div>

      <NumberPad onInput={handleInput} onSubmit={handleSubmit} onClear={handleClear} />
      
      {/* 問題ナビゲーションボタン */}
      <div className="mt-8 flex flex-wrap justify-center">
        {questions.map((question, index) => {
          // 到達済みかどうかの判定：index が maxVisited 以下なら到達済み
          const isAccessible = index <= maxVisited;
          const buttonClass = isAccessible
            ? `text-white ${question.buttonColor} hover:opacity-90 focus:outline-none focus:ring-4 ${question.highlightColor}-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2`
            : "text-white bg-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-not-allowed";
          return (
            <button
              key={question.id}
              type="button"
              className={buttonClass}
              onClick={() => {
                if (isAccessible) {
                  setCurrentQuestion(index);
                  setInput("");
                }
              }}
              disabled={!isAccessible}
            >
              {question.id}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionPage;
