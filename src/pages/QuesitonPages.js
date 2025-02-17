// QuesitonPages.js (問題ページの実装)
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questions from "../data/questions.json";
import Question from "../components/Question";
import NumberPad from "../components/NumberPad";

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionIndex = parseInt(id, 10) - 1;
  const [input, setInput] = useState("");

  const handleInput = (num) => {
    setInput((prev) => prev + num);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleSubmit = () => {
    if (input === questions[questionIndex].answer) {
      const nextQuestion = questionIndex + 2;
      if (nextQuestion > questions.length) {
        navigate("/clear");
      } else {
        navigate(`/question/${nextQuestion}`);
      }
    } else {
      alert("不正解です！");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Question image={questions[questionIndex].image} />
      <div className="text-2xl my-4">{input}</div>
      <NumberPad onInput={handleInput} onSubmit={handleSubmit} onClear={handleClear} />
      {questionIndex > 0 && (
        <button className="mt-4 p-2 bg-gray-500 text-white rounded-lg" onClick={() => navigate(`/question/${questionIndex}`)}>
          戻る
        </button>
      )}
    </div>
  );
};

export default QuestionPage;
