import React, { useState } from 'react';
import brainimage from "../../../assets/brain-image.png";
import googlelogo from "../../../assets/google-logo.png";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { addUserRequest } from '../../../store/user/userAction';
import { FaEyeSlash, FaEye } from "react-icons/fa";  // Import the eye icons

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for managing password visibility
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSignUpForm = (e) => {
    e.preventDefault();

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const namePattern = /^[a-zA-Z\s]+$/;

    if (!fullName || fullName.length < 4) {
      alert("Full name is mandatory and minimum four letters, please enter");
      return;
    }
    if (!namePattern.test(fullName)) {
      alert("Full name should only contain letters and spaces.");
      return;
    }
    if (!email) {
      alert("Email is mandatory, please enter");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Enter a proper email");
      return;
    }
    if (!password || password.length < 8) {
      alert("Password is mandatory, minimum length is 8 characters");
      return;
    } else if (!passwordPattern.test(password)) {
      alert("Password should contain one capital letter, one number, and a special character");
      return;
    }

    if (!checkBox) {
      alert("Accept the terms and conditions");
      return;
    } else {
      dispatch(addUserRequest({ fullName, email, password }));
      alert("Successfully registered...");
      navigate('/');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the visibility
  };

  return (
    <div>
      <section id="container">
        <div className="logo">
          <img src={brainimage} alt="brain" />
        </div>
        <div className="signup-container">
          <h1>Signup</h1>
          <p>Sign up to Join</p>

          <form onSubmit={handleSignUpForm}>
            <div className="email">
              <label>Full Name <span>*</span></label>
              <input
                id="fullname"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </div>
            <div className="email">
              <label>Email ID <span>*</span></label>
              <input
                id="email"
                type="email"
                placeholder="xyz14@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="password">
              <label>Password <span>*</span></label>
              <div className="password-input-container">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}  // Show password if showPassword is true
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle eye icon */}
                </div>
              </div>
            </div>
            <button type="submit" className="button">
              Sign Up
            </button>
          </form>

          <div className="sign-up-with-google">
            <img src={googlelogo} alt="" />
            <p>Sign up with Google</p>
          </div>
          <div className="terms-condition">
            <input
              id="checkbox"
              type="checkbox"
              onChange={() => setCheckBox(!checkBox)} // Toggle checkbox value
              value={checkBox}
            />
            <p>
              I accept <span>Terms & Conditions</span>
            </p>
          </div>
          <div className="login-account">
            <p>Already have an account?</p>
            <a href="/login">Login</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
