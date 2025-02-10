import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { logout } from "../../services/firebase";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    })
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-left">
        <Link to={"/home"} className="nav-link">
          <div className="logo">
            Brain<span>Stack</span>
          </div>
        </Link>
        <ul>
        <Link to={"/home"} className="nav-link">
          <li>Home</li>
        </Link>
        {/* <Link to={'/quizz'} className="nav-link"> */}
        <li>My Quizzes</li>
        {/* </Link> */}
        <Link to={"/quizzes"} className="nav-link">
          <li>Explore</li>
        </Link>
        {/* <Link to={'/quiz'} className="nav-link"> */}
        <li>Profile</li>
        {/* </Link> */}
      </ul>
      </div>
      <div className="nav-right">
        <button
          // onClick={() => {
          //   logout();
          // }}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
