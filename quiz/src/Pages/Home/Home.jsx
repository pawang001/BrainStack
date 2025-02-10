import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="welcome">
        <h1>
          Welcome to <span>BrainStack!</span>
        </h1>
        <p>
          The ultimate quiz app for Computer Science enthusiasts! Test your
          knowledge and sharpen your skills with quizzes on DBMS, Computer
          Networks, Operating Systems, Data Structures & Algorithms Quizzes
        </p>
        <p>Get ready to learn, compete, and have fun!</p>
        <div className="join">
            {/* <p>Login to play different types of Quizzes</p>
          <button onClick={() => navigate('/login')}>Login</button>
          <p>or Try it first</p> */}
          <button onClick={() => navigate("/quizzes")}>Play</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
