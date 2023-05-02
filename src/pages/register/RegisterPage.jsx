import React, { useState } from 'react';
import "./register.css";
import FormInput from '../../components/formInput/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/fire';
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';


const RegisterPage = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Type your username here",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special characters",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Type your email here",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Type your password here",
      errorMessage: "Password should be 8-20 characters and include atleast 1 letter and 1 number",
      pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,20}$',
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Password not match!",
      pattern: inputValues.password,
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, inputValues.email, inputValues.password).then(
        (userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: inputValues.username,
          });
          navigate("/login");
        });
    } catch (error) {}
  };
  console.log(inputValues);
  return (
  <div className="register">
      <form>
        <h2>REGISTER</h2>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={inputValues[input.name]} onChange ={handleChange} />
        ))}
         <button type="submit" onClick={handleRegister}>Register</button>

         <div className="formLink">
            <span>Already have an account?</span>
            &nbsp;
            <Link to="/" className="formSignup" style={{textDecoration:"none"}}>Login here</Link>
         </div>
      </form>
    </div>
  );
};

export default RegisterPage
