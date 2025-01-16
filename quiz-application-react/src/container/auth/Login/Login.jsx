import React, { useEffect, useState } from 'react';
import brainimage from "../../../assets/brain-image.png"
import googlelogo from "../../../assets/google-logo.png"
import { useNavigate } from "react-router";
import {useDispatch,useSelector}from "react-redux"
import {fetchUserRequest} from '../../../store/user/userAction'


const Login = () => {
  let navigate = useNavigate();
const [email,setEmail] = useState('')
const [password,setPassword]=useState('')

const user = useSelector((state)=>state.users.users)
const dispatch = useDispatch()


useEffect(()=>{
  dispatch(fetchUserRequest())
},[dispatch])


const handleLoginSubmit = (e) =>{
  e.preventDefault();
  if (!email || !password) {
    alert("All fields are mandatory");
    return;
  }
  const userFound = user.find((user)=>user.email===email && user.password===password)
  if(userFound){
    navigate('/dashbord')
    localStorage.setItem("userLoggedIn", JSON.stringify(userFound))
    return
  }
    else {
    alert("Invalid email or password");
  }
}

  return (
    <div>
     <section id="container">
      <div class="logo">
        <img src={brainimage} alt="brain" />
      </div>

      <div class="login-container">
        <h1>Login</h1>
        <p>Please enter your details below.</p>

        <form onSubmit={handleLoginSubmit}>
          <div class="email">
            <label>Email ID <span>*</span></label>
            <input id="emailInput" type="text" placeholder="xyz14@gmail.com" onChange={(e)=> setEmail(e.target.value)} value={email}/>
          </div>
          <div class="password">
            <label>Password <span>*</span></label>
            <i id="eye-icon" class="icon fa-regular fa-eye-slash" ></i>
            <input id="password" class="passwordInput" type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
          </div>
          <button class="button" type="submit">Login</button>
        </form>

        <div class="sign-up-with-google">
          <img src={googlelogo} alt="" />
          <p>Sign up with Google</p>
        </div>
        <div class="create-account">
          <p>Don't have an account?</p>
          <a href="signup.html">Sign up?</a>
        </div>
      </div>
    </section>


    </div>
  );
};

export default Login;
