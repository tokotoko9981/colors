// src/app/question/page.js
"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import questions from "../../data/questions.json";
import Question from "../../components/Question";
import NumberPad from "../../components/NumberPad";
import { useRouter } from "next/navigation";

const QuestionPage = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [maxVisited, setMaxVisited] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  // 入力（NumberPad）
  const handleInput = (num) => {
    if (error) {
      // エラー状態なら入力をリセットしてから数字を入れる
      setInput(String(num));
      setError(false);
    } else {
      if (input.length < 10) {
        setInput((prev) => prev + num);
      }
    }
  };

  // クリアボタン
  const handleClear = () => {
    setInput("");
    setError(false);
  };

  // 送信（回答チェック）
  const handleSubmit = () => {
    if (input === questions[currentQuestion].answer) {
      // 正解
      if (currentQuestion + 1 < questions.length) {
        const next = currentQuestion + 1;
        setCurrentQuestion(next);
        // 新たに到達した問題があれば maxVisited を更新
        if (next > maxVisited) {
          setMaxVisited(next);
        }
        setInput("");
        setError(false);
      } else {
        // 最終問題を解いたらクリア画面へ
        router.push("/clear");
      }
    } else {
      // 不正解 → エラー表示
      setError(true);
    }
  };

  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center min-h-screen text-center p-4",
        // 現在解いている問題の背景色
        questions[currentQuestion].bgColor
      )}
    >
      <Question image={questions[currentQuestion].image} />

      {/* 入力欄 */}
      <div className="mb-6">
        <label htmlFor="default-input" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white" />
        <input
          type="text"
          id="default-input"
          value={input}
          readOnly
          maxLength="10"
          className={twMerge(
            "bg-gray-50 border text-lg rounded-lg focus:ring-white focus:border-white block w-[300px] p-2.5 text-center",
            error ? "border-red-500 text-red-500" : "border-gray-300 text-white",
            "dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-white dark:focus:border-white"
          )}
        />
      </div>

      <NumberPad onInput={handleInput} onSubmit={handleSubmit} onClear={handleClear} />

      {/* 問題ナビゲーションボタン */}
      <div className="mt-8 flex flex-wrap justify-center">
        {questions.map((question, index) => {
          // 到達済みかどうか
          const isAccessible = index <= maxVisited;

          // ボタン色は「ボタンが指す問題」の buttonColor を使用
          // 未到達は灰色で表示
          const buttonClass = isAccessible
            ? twMerge(
                "text-white font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2",
                questions[index].buttonColor,
                "hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-white"
              )
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
                  setError(false);
                  // もし未到達の問題を初めてクリックしたなら maxVisited を更新
                  if (index > maxVisited) {
                    setMaxVisited(index);
                  }
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
