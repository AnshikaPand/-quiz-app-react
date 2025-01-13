import React from 'react'
import teachpaathshala  from "../../assets/techpaathshala.svg"
import userimage from "../../assets/user_image.jpg"
import crown from "../../assets/crown.png"
import Vector from "../../assets/Vector 15.png"


const Leaderboad = () => {
  return (
    <>
    <div>
      <header id="header">
      <div id="tech-logo">
        <a href="startquiz.html"><img src={teachpaathshala}alt="techpaathsala" /></a>
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

    <section id="leaderboard-main">
      <h1 id="user-rank-title">Wow You Rank 1st</h1>
      <p id="supporting-text">Your Score: 5</p>
    </section>

    <section id="score-board">
      <div id="first-rank-container">
        <div class="first-rank">
          <div class="crown">
            <img src={crown} alt="" />
          </div>
          <div class="bg-color"></div>
          <div class="actual-score">
            <h2>Score</h2>
            <p>0</p>
          </div>
          
          <div class="circle">
            <p class="username"></p>
            {/* <!-- <img src="assets/amit.jpeg" alt="" /> --> */}
          </div>
        </div>
      </div>

      <div id="second-rank-container">
        <div class="second-rank">
          <div class="bg-color2"><p class="rank2">#2</p></div>
          <div class="actual-score2">
            <h2>Score</h2>
            <p>0</p>
          </div>
          <div class="circle">
            {/* <img src="assets/amit.jpeg" alt="" />  */}
            <p class="username"></p>
          </div>
        </div>
      </div>

      <div id="third-rank-container">
        <div class="third-rank">
          <div class="bg-color3"><p class="rank2">#3</p></div>
          <div class="actual-score3">
            <h2>Score</h2>
            <p>00</p>
          </div>
          <div class="circle">
             {/* <img src="assets/amit.jpeg" alt="" />  */}
            <p class="username"></p>
          </div>
        </div>
      </div>

      <div class="radius-design">
        <img src={Vector} alt=""/>
        <div class="ranking-board">
          <div class="ranking">
            <p class="user-name"><span>#4</span> Name</p>
            <p class="user-name">0</p>
          </div>
          <div class="ranking">
            <p class="user-name"><span>#5</span> Name</p>
            <p class="user-name">0</p>
          </div>
          <div class="ranking">
            <p class="user-name"><span>#6</span> Name</p>
            <p class="user-name">0</p>
          </div>
        </div>
      </div>
    </section>

    <div id="logout-container">
      <p id="my-name">Hii, Anshika</p>
      <p id="my-email">anshika123@gmail.com</p>
      <button id="logout-button" onclick="logout()">Logout</button>
    </div>
    
    </div>
    </>
  )
}

export default Leaderboad

