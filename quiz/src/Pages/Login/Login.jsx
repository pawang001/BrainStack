import React, { useState } from 'react'
import './Login.css'
import { login, signup } from '../../services/firebase'

const Login = () => {

  const[signState, setSignState] = useState("Sign In");
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[loading, setloading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setloading(true)
    if(signState === "Sign In"){
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setloading(false);
  }

  return (
    <div className='login'>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign In" ? <></> : 
          <input value={name} onChange={(e) => {setName(e.target.value)}} 
          type='text' placeholder='Your Name'></input>}
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} 
          type='email' placeholder='Email'></input>
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} 
          type='password' placeholder='Password'></input>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className='remember'>
              <input type='checkbox' />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? 
          <p>New to BrainStack? <span onClick={() =>{setSignState("Sign Up")}}>
             Sign Up Now</span></p> : 
          <p>Already have an account? <span onClick={() =>{setSignState("Sign In")}}>
            Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
