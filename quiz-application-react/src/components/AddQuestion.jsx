import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestionRequest } from "../store/questions/questionAction";

const AddQuestion = ({ setAddQuestion }) => {
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addQuestionRequest({
        question,
        options: [optionOne, optionTwo, optionThree, optionFour],
        answer: correctAnswer,
      })
    );
    setAddQuestion(false);
  };

  return (
    <>
      <div
        class="overlay"
        id="overlay"
        onClick={() => setAddQuestion(false)}
      ></div>
      <section id="add-new-question">
        <h1>Add New Question</h1>
        <form action="" onSubmit={handleFormSubmit} class="form">
          <div class="cross-icon" onClick={() => setAddQuestion(false)}>
            <span>&#10006;</span>
          </div>
          <div id="question">
            <h3>Question:</h3>
            {/* <textarea name="" id="question-input"></textarea> */}
            <input
              id="question-input"
              type="text"
              value={question}
              placeholder="Enter your questions"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div class="options">
            <h3>Option a:</h3>
            <input
              id="option-a"
              type="text"
              value={optionOne}
              placeholder="Enter option 1"
              onChange={(e) => setOptionOne(e.target.value)}
            />
          </div>
          <div class="options">
            <h3>Option b:</h3>
            <input
              id="option-b"
              type="text"
              value={optionTwo}
              placeholder="Enter option 2"
              onChange={(e) => setOptionTwo(e.target.value)}
            />
          </div>
          <div class="options">
            <h3>Option c:</h3>
            <input
              id="option-c"
              type="text"
              value={optionThree}
              placeholder="Enter option 3"
              onChange={(e) => setOptionThree(e.target.value)}
            />
          </div>
          <div class="options">
            <h3>Option d:</h3>
            <input
              id="option-d"
              type="text"
              value={optionFour}
              placeholder="Enter option 4"
              onChange={(e) => setOptionFour(e.target.value)}
            />
          </div>
          <div class="options" id="correct-answer">
            <h3>Correct Answer:</h3>
            <input
              id="correct-answer-input"
              value={correctAnswer}
              type="text"
              placeholder="Enter the correct answer"
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </div>
          <button type="submit" id="add-question-btn">
            Add Question
          </button>
        </form>
      </section>
    </>
  );
};

export default AddQuestion;
