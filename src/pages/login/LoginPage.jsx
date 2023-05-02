import React, { useState } from 'react'
import "./login.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/fire';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

const navigate = useNavigate()

const handleChange = (e)=>{
  setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
};

const handleLogin = (e) => {
  e.preventDefault();

  try{
    signInWithEmailAndPassword(auth, inputs.email, inputs.password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      navigate("/main")
    }
   );
  } catch (error) {}
};

console.log(inputs);
  return <div className='login'>
    <form>
        <h2>LOGIN</h2>
        <div className="formInput">
          <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} required/>
        </div>
        <div className="formInput">
          <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} required/>
        </div>
         <button type="submit" onClick={handleLogin}>Login</button>

         <div className="formLink">
            <span>Don't have an account?</span>
            &nbsp;
            <Link to="/register" className="formLogin" style={{textDecoration:"none"}}>Register here</Link>
         </div>
      </form>
  </div>
};

export default Login
