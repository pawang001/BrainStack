import React, { useState } from "react";
import "./Quiz.css";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quiz = location.state?.quiz || [];

  const [loading, setLoading] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(Array(quiz.length).fill(""));
  // const [completedQuestions, setCompletedQuestions] = useState(-1);
  const [score, setScore] = useState(0);
  const totalQuestions = quiz.length;

// if (loading) return <div>Loading...</div>;
if (!quiz.length) return <div>No quiz available</div>;

const options = [
    quiz[currentQuestion].option1,
    quiz[currentQuestion].option2,
    quiz[currentQuestion].option3,
    quiz[currentQuestion].option4,
];

  const handleNext = () => {
    let updatedScore = score; 
    if(quiz[currentQuestion].rightAnswer === selectedOption[currentQuestion]) {
      updatedScore += 1;
      setScore(updatedScore);
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // setCompletedQuestions(completedQuestions + 1);
    } else {
      navigate("/score", { state: {
        score: updatedScore, 
        quizData : quiz, 
        selectedOptions : selectedOption}});
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      if(quiz[currentQuestion].rightAnswer === selectedOption[currentQuestion]) {
        setScore((prevScore) => prevScore - 1);
      }
      setCurrentQuestion(currentQuestion - 1);
      // setCompletedQuestions(completedQuestions - 1);
    }
  };

  const handleOptionSelect = (option) => {
    const updatedOptions = [...selectedOption];
    updatedOptions[currentQuestion] = option;
    setSelectedOption(updatedOptions);
  }

  const progressPercentage = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="quiz">
      <div className="quiz-container">
        <h2>{quiz[0]?.category} Quiz</h2>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <h4>
          Question {currentQuestion + 1} of {totalQuestions}
        </h4>
        <h3>{quiz[currentQuestion].questionTitle}</h3>
        <ul>
          {options.map((option, index) => (
            <li
            key={index}
            className={selectedOption[currentQuestion] === option ? "selected" : ""}
            onClick={() => handleOptionSelect(option)}>
            {option}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button onClick={handleBack} disabled={currentQuestion === 0}>
            Back
          </button>
          <button onClick={handleNext}>
            {currentQuestion === totalQuestions - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
