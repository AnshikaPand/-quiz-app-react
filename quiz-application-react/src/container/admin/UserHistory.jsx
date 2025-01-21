import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SideBar from "../../components/SideBar";
import { fetchUserTestRequest } from "../../store/userTest/userTestAction";
import Navbar from "../../components/Navbar";

const UserHistory = () => {
  const userTest = useSelector((state) => state.userTests.userTests);
  const dispatch = useDispatch();
  const { id, testIndex } = useParams();
  console.log(userTest[id]?.tests[testIndex]);

  useEffect(() => {
    dispatch(fetchUserTestRequest());
  }, [dispatch]);

  const selectedUserTest = userTest[id]?.tests[testIndex];
  console.log(selectedUserTest);
  return (
    <div>
      <Navbar />
      <div class="admin-main-ciontainer">
        <SideBar />

        <section class="main-content">
          <div class="test-attempt-details">
            <h1>Test Attempts Details</h1>
            <div class="username-email">
              <p class="users-name">{userTest[id]?.fullName}</p>
              <p class="users-email">{userTest[id]?.email}</p>
            </div>
            <ul class="top-information">
              <li class="score">
                <strong>Score:</strong>
                {selectedUserTest?.totalScore}
              </li>
              <li class="timestamp">
                <strong>Date:</strong>2024-10-15
              </li>
              <li class="time-spent">
                <strong>Time Spent:</strong>
                {selectedUserTest?.timeTaken}
              </li>
            </ul>
            <div class="container">
              {selectedUserTest?.randomQuestion?.map((question, index) => (
                <div class="questions-container">
                  <p class="question">{question.question}</p>
                  <ul>
                    <li>{question.options[0]}</li>
                    <li>{question.options[1]}</li>
                    <li>{question.options[2]}</li>
                    <li>{question.options[3]}</li>
                  </ul>

                  <p class="your-answer">
                    Your Answer:
                    {question.options[selectedUserTest.selectedOptions[index]]}
                  </p>
                  <p class="correct-answer">
                    Correct Answer:{question.options[question.answer]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserHistory;
