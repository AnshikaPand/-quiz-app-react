import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateQuestionRequest } from "../store/questions/questionAction";

const UpdateQuestion = ({ setUpdateQuestion, selectedQuestion }) => {
  console.log(selectedQuestion.id);
  const [newQuestion, setNewQuestion] = useState(selectedQuestion.question);
  const [optionA, setOptionA] = useState(selectedQuestion.options[0]);
  const [optionB, setOptionB] = useState(selectedQuestion.options[1]);
  const [optionC, setOptionC] = useState(selectedQuestion.options[2]);
  const [optionD, setOptionD] = useState(selectedQuestion.options[3]);
  const [correctAnswer, setCorrectAnswer] = useState(selectedQuestion.answer);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
        updateQuestionRequest({
            id: selectedQuestion.id,
            question: newQuestion,
            options: [optionA, optionB, optionC, optionD],
            answer: correctAnswer
        })
    )
    setUpdateQuestion(false);
  };

  return (
    <>
      <div
        className="overlay"
        id="overlay"
        onClick={() => setUpdateQuestion(false)}
      ></div>
      <section id="add-new-question">
        <h1>Update Question</h1>
        <form action="" onSubmit={handleFormSubmit} className="form">
          <div className="cross-icon" onClick={() => setUpdateQuestion(false)}>
            <span>&#10006;</span>
          </div>
          <div id="question">
            <h3>Question:</h3>
            <input
              id="question-input"
              type="text"
              value={newQuestion}
              placeholder="Enter your question"
              onChange={(e) => setNewQuestion(e.target.value)}
            />
          </div>
          <div className="options">
            <h3>Option A:</h3>
            <input
              id="option-a"
              type="text"
              value={optionA}
              placeholder="Enter option A"
              onChange={(e) => setOptionA(e.target.value)}
            />
          </div>
          <div className="options">
            <h3>Option B:</h3>
            <input
              id="option-b"
              type="text"
              value={optionB}
              placeholder="Enter option B"
              onChange={(e) => setOptionB(e.target.value)}
            />
          </div>
          <div className="options">
            <h3>Option C:</h3>
            <input
              id="option-c"
              type="text"
              value={optionC}
              placeholder="Enter option C"
              onChange={(e) => setOptionC(e.target.value)}
            />
          </div>
          <div className="options">
            <h3>Option D:</h3>
            <input
              id="option-d"
              type="text"
              value={optionD}
              placeholder="Enter option D"
              onChange={(e) => setOptionD(e.target.value)}
            />
          </div>
          <div className="options" id="correct-answer">
            <h3>Correct Answer:</h3>
            <input
              id="correct-answer-input"
              value={correctAnswer}
              type="text"
              placeholder="Enter the correct answer"
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </div>
          <button type="submit" id="update-question-btn">
            Update Question
          </button>
        </form>
      </section>
    </>
  );
};

export default UpdateQuestion;
