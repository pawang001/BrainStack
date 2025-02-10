import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom';
import "./Score.css"

const Score = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { score, quizData, selectedOptions } = location.state || { score: 0, quizData: [], selectedOptions: [] };

  return (
    <div className="score">
      <div className="score-page">
      <h2>Your Score: {score}</h2>

      <div className="question-container">
        {quizData.map((question, index) => (
          <div key={index} className="question-review">
            <h4>Q{index + 1}: {question.questionTitle}</h4>
            <p><strong>Correct Answer:</strong> <span className="correct">{question.rightAnswer}</span></p>
            <p className={selectedOptions[index] === question.rightAnswer ? "correct" : "wrong"}>
              <strong>Your Answer:</strong> {selectedOptions[index] || "Not Answered"}
            </p>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/home")}>Go to Home</button>
    </div>
    </div>
  );
};

export default Score;
