// src/App.js
import React from 'react';
import ImageQuestion from './ImageQuestion';

const App = () => {
  const questions = [
    { imageSrc: 'path/to/image1.jpg' },
    { imageSrc: 'path/to/image2.jpg' },
  ];

  const handleAnswerSubmit = (answer) => {
    console.log('回答:', answer);
  };

  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <ImageQuestion 
          key={index} 
          imageSrc={q.imageSrc} 
          onAnswerSubmit={handleAnswerSubmit} 
        />
      ))}
    </div>
  );
};

export default App;
