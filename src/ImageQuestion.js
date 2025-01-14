// src/ImageQuestion.js
import React from 'react';

const ImageQuestion = ({ imageSrc, onAnswerSubmit }) => {
  const [answer, setAnswer] = React.useState('');

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswerSubmit(answer);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <img src={imageSrc} alt="Question" className="w-full h-auto" />
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={answer} 
          onChange={handleChange} 
          className="mt-2 mb-2 p-2 border border-gray-300 rounded" 
          placeholder="Your answer"
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-500 text-white rounded"
        >
          決定
        </button>
      </form>
    </div>
  );
};

export default ImageQuestion;
