import React, { useEffect, useRef, useState } from "react";
import teachpaathshala from "../../assets/techpaathshala.svg";
import userimage from "../../assets/user_image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionRequest } from "../../store/questions/questionAction";

const QuizQuestion = () => {
  const [randomQuestion, setRandomQuestion] = useState([]);
  const [questionsIndex, setQuestionsIndex] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [selectedOptions, setSelectedOption] = useState([]);

  const slidbar = 100;
  const initialSilderValue = slidbar / randomQuestion.length;
  const question = useSelector((state) => state.questions.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestionRequest());
    console.log(question);
  }, [dispatch]);

  useEffect(() => {
    function shuffleQuestions() {
      let shuffledData = Array.from(question);
      shuffledData.sort(() => Math.random() - 0.5);
      return shuffledData.slice(0, 10);
    }
    setRandomQuestion(shuffleQuestions());
    console.log(randomQuestion);
  }, [question]);

  const handleOptionSelect = (index) => {
    const updatedOption = [...selectedOptions];
    updatedOption[questionsIndex] = index;
    setSelectedOption(updatedOption);
    console.log("Running");
  };

  function nextQuestion() {
    if (selectedOptions[questionsIndex] === undefined) {
      alert("Selecter karo age nikalo");
      return;
    }
    if (questionsIndex < randomQuestion.length - 1) {
      setQuestionsIndex(questionsIndex + 1);
      setProgressBar(progressBar + 1);
    }
  }

  function previousQuestion() {
    setQuestionsIndex(questionsIndex - 1);
    setProgressBar(progressBar - 1);
  }
  return (
    <>
      <header id="header">
        <div id="tech-logo">
          <a href="startquiz.html">
            <img src={teachpaathshala} alt="techpaathsala" />
          </a>
        </div>

        <div class="right-side-info">
          <ul>
            <a href="startquiz.html">
              <li></li>
            </a>
            <li>Welcome,</li>
            <li>Anshika</li>
            <img id="popup" onclick="popUp()" src={userimage} alt="userimage" />
          </ul>
        </div>
      </header>

      <section id="question-answer">
        <h1 id="question-number">{`Questions ${questionsIndex + 1} of 10`}</h1>
        <div id="progressbar-container">
          <div
            id="progress-bar"
            style={{
              width: `${
                initialSilderValue * progressBar +
                slidbar / randomQuestion.length
              }%`,
            }}
          ></div>
        </div>
        <div class="question">
          <h2 id="question-text">{randomQuestion[questionsIndex]?.question}</h2>
        </div>
        <div class="answer">
          <ol type="1" id="options-list">
            {randomQuestion[questionsIndex]?.options.map((option, index) => (
              <li
                key={index}
                id="option-2"
                className={`option ${
                  selectedOptions[questionsIndex] === index ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </li>
            ))}

            {/* <li id="option-1"></li>
                
                <li id="option-3"></li>
                <li id="option-4"></li>  */}
          </ol>
        </div>
        <button onClick={previousQuestion} id="prev">
          <i class="fa-solid fa-arrow-left"></i> Previous
        </button>
        <button onClick={nextQuestion} id="next">
          Next <i class="fa-solid fa-arrow-right"></i>
        </button>
      </section>

      <div id="logout-container">
        <p id="my-name">Hii, Anshika</p>
        <p id="my-email">anshika123@gmail.com</p>
        <button id="logout-button" onclick="logout()">
          Logout
        </button>
        <button id="logout-button">Edit</button>
      </div>
    </>
  );
};

export default QuizQuestion;
