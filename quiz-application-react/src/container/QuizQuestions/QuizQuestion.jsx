import React from 'react'
import teachpaathshala  from "../../assets/techpaathshala.svg"
import userimage from "../../assets/user_image.jpg"
const QuizQuestion = () => {
  return (
    <>
      <header id="header">
        <div id="tech-logo">
          <a href="startquiz.html"><img src={teachpaathshala}alt="techpaathsala"/></a>
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

      <section id="question-answer">
        <h1 id="question-number"></h1>
        <div id="progressbar-container">
            <div id="progress-bar"></div>
        </div>
        <div class="question">
            <h2 id="question-text"></h2>
        </div>
        <div class="answer">
            <ol type="1" id="options-list">
                 {/* <li id="option-1"></li>
                <li id="option-2"></li>
                <li id="option-3"></li>
                <li id="option-4"></li>  */}
            </ol>
        </div>
        <button onclick="previousQuestion()" id="prev"><i class="fa-solid fa-arrow-left"></i> Previous</button>
        <button onclick="nextQuestion()" id="next">Next <i class="fa-solid fa-arrow-right"></i></button>
    </section>

    <div id="logout-container">
      <p id="my-name">Hii, Anshika</p>
      <p id="my-email">anshika123@gmail.com</p>
      <button id="logout-button" onclick="logout()">Logout</button>
      <button id="logout-button">Edit</button>
    </div>

    </>
  )
}

export default QuizQuestion
