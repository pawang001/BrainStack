import { onAuthStateChanged } from "firebase/auth";
import Login from "./Pages/Login/Login"
import Quiz from "./Pages/Quiz/Quiz"
import { Routes, Route, useNavigate } from 'react-router-dom'
import { auth } from "./services/firebase";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Score from "./Pages/Score/Score";
import Home from "./Pages/Home/Home";
import Quizzes from "./Pages/Quizzes/Quizzes";

function App() {

  const navigate = useNavigate();

  // useEffect(()=> {
  //   onAuthStateChanged(auth, async (user) => {
  //     if(user){
  //       if(window.location.pathname === '/login') {
  //         navigate('/home');
  //       }
  //     } else {
  //       if(window.location.pathname !== '/login') {
  //         navigate('/login');
  //       }
  //     }
  //   })
  // }, [])

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/home' element = {<Home/>} />
        {/* <Route path='/login' element = {<Login/>} /> */}
        <Route path='/quiz' element = {<Quiz/>} />
        <Route path='/quizzes' element = {<Quizzes/>} />
        <Route path='/score' element = {<Score/>} />
      </Routes>
    </div>
  )
}

export default App
