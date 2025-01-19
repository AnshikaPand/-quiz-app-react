import React, { useEffect, useState } from 'react';
import brainimage from "../../../assets/brain-image.png";
import googlelogo from "../../../assets/google-logo.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from '../../../store/user/userAction';
import { FaEyeSlash, FaEye } from "react-icons/fa";  // Import icons from react-icons

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);  // State to manage password visibility

  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All fields are mandatory");
      return;
    }
  //   const userFound = user.find((user) => user.email === email && user.password === password);
  //   if (userFound) {
  //     navigate('/dashbord');
  //     localStorage.setItem("userLoggedIn", JSON.stringify(userFound));
  //     return;
  //   } else {
  //     alert("Invalid email or password");
  //   }
  // };

  // if(userFound == admin@gmail.com){
  //   navigate('/admindashbasboard');
  // }else {
  //   alert("Invalid email or password");
  // }

  const userFound = user.find((user) => user.email === email && user.password === password);
    if (userFound) {
     
      if (email === 'admin@gmail.com') {
        navigate('/admindashboard');
      } else {
        navigate('/dashboard');
      }
      localStorage.setItem("userLoggedIn", JSON.stringify(userFound));
    } else {
      alert("Invalid email or password");
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);  // Toggle password visibility
  };

  return (
    <div>
      <section id="container">
        <div className="logo">
          <img src={brainimage} alt="brain" />
        </div>

        <div className="login-container">
          <h1>Login</h1>
          <p>Please enter your details below.</p>

          <form onSubmit={handleLoginSubmit}>
            <div className="email">
              <label>Email ID <span>*</span></label>
              <input 
                id="emailInput" 
                type="text" 
                placeholder="xyz14@gmail.com" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
              />
            </div>
            <div className="password">
              <label>Password <span>*</span></label>
              {/* Wrap input and icon together */}
              <div className="password-input-container">
                <input 
                  id="password" 
                  className="passwordInput" 
                  type={showPassword ? 'text' : 'password'}  
                  placeholder="Password" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                />
                {/* Toggle password visibility */}
                <div className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />} 
                </div>
              </div>
            </div>
            <button className="button" type="submit">Login</button>
          </form>

          <div className="sign-up-with-google">
            <img src={googlelogo} alt="" />
            <p>Sign up with Google</p>
          </div>
          <div className="create-account">
            <p>Don't have an account?</p>
            <a href="signup.html">Sign up?</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
