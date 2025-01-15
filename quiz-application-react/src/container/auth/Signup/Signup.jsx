import React, { useState } from 'react'
import brainimage from "../../../assets/brain-image.png"
import googlelogo from "../../../assets/google-logo.png"
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { addUserRequest } from '../../../store/user/userAction';

const Signup = () => {
 const[fullName ,setFullName]= useState('')
 const [email,setEmail] = useState('')
 const [password , setPassword]=useState('')
 const [checkBox,setCheckBox]=useState(false)
 const dispatch = useDispatch()
let navigate = useNavigate()

 const handleSignUpForm=(e)=>{
  e.preventDefault();
 

  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const namePattern = /^[a-zA-Z\s]+$/;
  if (!fullName || fullName.length < 4) {
    alert("Fullname is mandatory and minimum four letter please enter");
    return;
  }
  if (!namePattern.test(fullName)) {
    alert("Full name should only contain letters and spaces.");
    return;
  }
  if (!email) {
    alert("Email is mandatory please enter");
    return;
  }
  if (!emailPattern.test(email)) {
    alert("Enter a proper email");
    return;
  }
  if (!password || password.length < 8) {
    alert("Password is mandatory upto 8 length please enter");
    return;
  } else if (!passwordPattern.test(password)) {
    alert(
      "Password should contain one capital letter one number and special character"
    );
    return;
  }
  
  if (!checkBox) {
    alert("Accept the terms and conditions");
    return;
  } else {
    dispatch(addUserRequest({fullName, email, password}))
    alert("successfully registered...");
    navigate('/')
  }
 }
  
  return (
    <div>
      <section id="container">
      <div class="logo">
        <img src={brainimage} alt="" />
      </div>
      <div class="signup-container">
        <h1>Signup</h1>
        <p>Sign up to Join</p>

        <form onSubmit={handleSignUpForm}>
          <div class="email">
            <label>Full Name <span>*</span></label>
            <input id="fullname" type="text" placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)} value={fullName} />
          </div>
          <div class="email">
            <label>Email ID <span>*</span></label>
            <input id="email" type="email" placeholder="xyz14@gmail.com" onChange={(e)=> setEmail(e.target.value)} value={email} />
          </div>
          <div class="password">
            <label>Password <span>*</span></label>
            <i id="eye-icon" class="icon fa-regular fa-eye-slash"></i>
            <input id="password" type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} />
          </div>
          <button type="submit" class="button">
            Sign Up
          </button>
        </form>

        <div class="sign-up-with-google">
          <img src={googlelogo} alt="" />
          <p>Sign up with Google</p>
        </div>
        <div class="terms-condition">
          <input id="checkbox" type="checkbox" onChange={()=>setCheckBox(true)} value={checkBox} />
          <p>I accept <span>Terms & Conditions</span></p>
        </div>
        <div class="login-account">
          <p>Don't have an account?</p>
          <a href="index.html">Login</a>
        </div>
      </div>
    </section>
     </div>
  )
}

export default Signup
