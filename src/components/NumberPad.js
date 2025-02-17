// NumberPad.js (数字入力ボタンコンポーネント)
import React from "react";

const NumberPad = ({ onInput, onSubmit, onClear }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {numbers.map((num) => (
        <button
          key={num}
          className="p-4 bg-blue-500 text-white rounded-lg text-xl"
          onClick={() => onInput(num)}
        >
          {num}
        </button>
      ))}
      <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={onClear}>C</button>
      <button className="p-4 bg-green-500 text-white rounded-lg" onClick={onSubmit}>✓</button>
    </div>
  );
};

export default NumberPad;
