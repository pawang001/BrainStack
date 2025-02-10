import React, { useEffect, useState } from "react";
import "./Quizzes.css";
import Navbar from "../../components/Navbar/Navbar";
import os from "../../assets/os.png";
import dbms from "../../assets/dbms.png";
import cn from "../../assets/cn.png";
import dsa from "../../assets/dsa.png";
import java from "../../assets/java.png";
import cpp from "../../assets/cpp.png";
import { useNavigate } from "react-router-dom";
import QuizService from "../../services/QuizService";

const Quizzes = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState(null);

  const topics = [
    { id: 1, name: "Data Structure and Algorithms", category: "DSA", img: dsa },
    { id: 2, name: "Database Management System", category: "DBMS", img: dbms },
    { id: 3, name: "Computer Networks", category: "CN", img: cn },
    { id: 4, name: "Operating Systems", category: "OS", img: os },
    { id: 5, name: "Java", category: "Java", img: java },
    { id: 6, name: "C++", category: "Cpp", img: cpp },
  ];

  const questions = [
    { id: 1, count: 10 },
    { id: 2, count: 15 },
    { id: 3, count: 20 },
  ];

  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);

  const handleStartQuiz = async () => {
    if (!selectedTopic || !selectedQuestions) {
      alert("Please select a topic and number of questions!");
      return;
    }
  
    setLoading(true);
    try {
      const response = await QuizService.getQuiz(
        selectedTopic.category, 
        selectedQuestions.count
      );
  
      if (!response.data || response.data.length === 0) {
        alert("No quiz available for this selection.");
        setLoading(false);
        return;
      }
  
      setQuiz(response.data);
      navigate("/quiz", { state: { quiz: response.data } });
    } catch (error) {
      alert("Failed to load quiz. Please try again.");
    }
    setLoading(false);
  };
  

  return (
    <div className="quizzes">
      <div className="quizzes-container">
        <div className="topic-container">
          <h2>Choose a topic</h2>
          <ul>
            {topics.map((topic) => (
              <li
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={selectedTopic?.id === topic.id ? "selected" : ""}
              >
                {topic.name}
                <img src={topic.img} alt={topic.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="number-of-questions">
          <h2>Select number of Questions</h2>
          <ul>
            {questions.map((q) => (
              <li
                key={q.id}
                onClick={() => setSelectedQuestions(q)}
                className={selectedQuestions?.id === q.id ? "selected" : ""}
              >
                {q.count}
              </li>
            ))}
          </ul>
          <div className="start-button">
            <button onClick={handleStartQuiz}>Start Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
