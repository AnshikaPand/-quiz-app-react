import React from 'react'
import teachpaathshala  from "../../assets/techpaathshala.svg"
import userimage from "../../assets/user_image.jpg"
import sms1 from "../../assets/sms (1).png"
import sms2 from "../../assets/sms (2).png"
import sms3 from "../../assets/sms (3).png"
import { Link } from 'react-router-dom'


const Dashbord = () => {
  let userData = JSON.parse(localStorage.getItem("userLoggedIn"))
  return (
    <>
    <header id="header">
      <div id="tech-logo">
        <a href="startquiz.html"> <img src={teachpaathshala} alt="techpaathsala" /></a>
      </div>

      <div class="right-side-info">
        <ul>
          <a href="startquiz.html"><li></li></a>
           <li>Welcome,</li>
           <li>A</li>
           <img
          id="popup"
          onclick="popUp()"
          src={userimage}
          alt="userimage"
        />
         </ul>
      </div>
    </header>

    <main>
      <h1>Let's Start the Quiz</h1>
      <div class="time">
        <i class="fa-regular fa-clock"></i>
        <p>10 min</p>
      </div>
      <ul class="disclaimer">
       <li>disclaimers</li>
       <li>disclaimers</li>
      </ul>
       
     
      <section id="start-container">
        <div class="blank-display-container">
          <div class="blank-display">
            <img id="sms1" src={sms1} alt=""/>
            <img id="sms2" src={sms2}alt=""/>
            <img id="sms3" src={sms3} alt=""/>

          </div>
          <div class="catchy-lines">
            <h2>"Test your knowledge with the ultimate quiz challenge!"</h2>
            <p>
              When you're done, review your answers and See <br />
              Your rank.
            </p>
          </div>
        </div>
       <Link to="/quizQuestion"><button class="button" id="button">Start Quiz</button></Link>
      </section>
    </main>

    <div id="logout-container">
      <p id="my-name">Hii, Anshika</p>
      <p id="my-email">anshika123@gmail.com</p>
      <button id="logout-button" onclick="logout()">Logout</button>
    </div>

    </>
  )
}

export default Dashbord
