import React, { useEffect, useState } from "react";
import teachpaathshala from "../../assets/techpaathshala.svg";
import userimage from "../../assets/user_image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionRequest } from "../../store/questions/questionAction";
import { addUserTestRequest } from "../../store/userTest/userTestAction";
import { useNavigate } from "react-router-dom";

const QuizQuestion = () => {
  const [randomQuestion, setRandomQuestion] = useState([]);
  const [questionsIndex, setQuestionsIndex] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const question = useSelector((state) => state.questions.questions);

  const userInfo = JSON.parse(localStorage.getItem("userLoggedIn"));

  // Start the timer when the quiz begins
  useEffect(() => {
    if (randomQuestion.length > 0 && startTime === null) {
      setStartTime(Date.now()); // Start the timer when questions are available
    }
  }, [randomQuestion, startTime]);

  // Calculate and submit the score
  const calculateScore = () => {
    let totalScore = 0;
    
    randomQuestion.forEach((question, index) => {
      if ( selectedOptions[index] === question.answer) {
        totalScore += 10; 
      }
      return totalScore
    });
   // setScore(totalScore);
    console.log('Final score:', totalScore); 
  
    const endTime = Date.now();
    const timeTaken = Math.round((endTime - startTime) / 1000); 
    const finalScore = totalScore;
  
    const confirmSubmission = window.confirm("Are you sure you want to submit?");
    if (confirmSubmission) {
      alert(
        `Quiz finished! Your final score is ${finalScore} out of ${
          randomQuestion.length * 10
        }. Time taken: ${timeTaken} seconds.`
      );
      
      // Dispatch action to save user test data
      dispatch(
        addUserTestRequest({
          userInfo,
          totalScore: finalScore,
          randomQuestion,
          selectedOptions,
          timeTaken,
        })
      );
  
     navigate("/leaderbord");
    }
  };
  

  // Progress bar logic
  const sliderTotal = 100;
  const initialSliderValue = sliderTotal / randomQuestion.length;

  // Fetch questions from Redux store
  useEffect(() => {
    dispatch(fetchQuestionRequest());
  }, [dispatch]);

  // Shuffle questions and pick a subset
  useEffect(() => {
    if (question.length > 0) {
      const shuffleQuestions = () => {
        const shuffledData = [...question];
        shuffledData.sort(() => Math.random() - 0.5);
        return shuffledData.slice(0, 3); // Only take the first 10 questions
      };
      setRandomQuestion(shuffleQuestions());
    }
  }, [question]);

  const handleOptionSelect = (index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[questionsIndex] = index;
    setSelectedOptions(updatedOptions);
    console.log(`Selected option for question ${questionsIndex + 1}:`, index); 
  };
  

  const nextQuestion = () => {
    if (selectedOptions[questionsIndex] === undefined) {
      alert("Please select an option before moving to the next question.");
      return;
    }
    if (questionsIndex < randomQuestion.length - 1) {
      setQuestionsIndex(questionsIndex + 1);
      setProgressBar(progressBar + 1);
    } else {
      calculateScore(); // Calculate and submit score when it's the last question
    }
  };

  const previousQuestion = () => {
    if (questionsIndex > 0) {
      setQuestionsIndex(questionsIndex - 1);
      setProgressBar(progressBar - 1);
    }
  };
  const logout = () => {
    localStorage.removeItem("email");
    const confirmLogout = window.confirm("Are you sure you want to logout?");
if(confirmLogout){
  navigate("/")
}    
    
  };

  return (
    <>
      <header id="header">
        <div id="tech-logo">
          <a href="/startquiz">
            <img src={teachpaathshala} alt="Tech Paathshala Logo" />
          </a>
        </div>

        <div className="right-side-info">
          <ul>
            <li>Welcome,</li>
            <li>{userInfo?.fullName || "User"}</li>
            <img
              id="popup"
              onClick={logout}
              src={userimage}
              alt="User Profile"
            />
          </ul>
        </div>
      </header>

      <section id="question-answer">
        <h1 id="question-number">{`Question ${questionsIndex + 1} of ${randomQuestion.length}`}</h1>
        <div id="progressbar-container">
          <div
            id="progress-bar"
            style={{
              width: `${
                initialSliderValue * progressBar +
                sliderTotal / randomQuestion.length
              }%`,
            }}
          ></div>
        </div>
        <div className="question">
          <h2 id="question-text">{randomQuestion[questionsIndex]?.question}</h2>
        </div>
        <div className="answer">
          <ol id="options-list">
            {randomQuestion[questionsIndex]?.options.map((option, index) => (
              <li
                key={index}
                className={`option ${
                  selectedOptions[questionsIndex] === index ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </li>
            ))}
          </ol>
        </div>
        <div className="navigation-buttons">
          {questionsIndex > 0 && (
            <button onClick={previousQuestion} id="prev">
              Previous
            </button>
          )}
          <button onClick={nextQuestion} id="next">
            {questionsIndex < randomQuestion.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </section>

      <div id="logout-container">
        <p id="my-name">Hi, {userInfo?.fullName || "User"}</p>
        <p id="my-email">{userInfo?.email || "example@example.com"}</p>
        <button id="logout-button" onClick={() => alert("Logout Successful")}>
          Logout
        </button>
        <button id="edit-button" onClick={() => alert("Edit Profile")}>
          Edit
        </button>
      </div>
    </>
  );
};

export default QuizQuestion;
