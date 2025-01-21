import React from "react";

const ViewQuestion = ({ question, setViewQuestion }) => {
  console.log(question);

  return (
    <>
      <div
        class="overlay"
        id="overlay"
        onClick={() => setViewQuestion(false)}
      ></div>
      <div class="question-details">
        <h1>Question Details</h1>
        <div
          class="cross-icon"
          id="cross-icon"
          onClick={() => setViewQuestion(false)}
        >
          <span>&#10006;</span>
        </div>

        <p id="view-question">{question.question}</p>
        <p>Options:</p>
        <ol type="1" id="optionsList">
          {question.options.map((answer) => (
            <li>{answer}</li>
          ))}
        </ol>
        <p id="view-correct-answer">
          <strong>Correct Answer:</strong>
          <span style={{ color: "red", marginLeft: "5px" }}>
            {question.options[question.answer]}
          </span>
        </p>
      </div>
    </>
  );
};

export default ViewQuestion;
