import React from "react";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { fetchUserTestRequest } from "../../store/userTest/userTestAction";
import { useEffect } from "react";

const UserTestList = () => {
  const userTest = useSelector((state) => state.userTests.userTests);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(userTest[0]);

  useEffect(() => {
    dispatch(fetchUserTestRequest());
  }, [dispatch]);

  const selectedUser = userTest[id];

  return (
    <div>
      <Navbar />
      <div class="admin-main-ciontainer">
        <SideBar />

        <section class="main-content">
          <div class="users-test-attempt">
            <h1>User Test Attempts</h1>
            <p id="user-name">Anshika </p>
            <p id="user-email">anshika@gmail.com</p>
            <table class="table-three">
              <thead>
                <tr>
                  <th>Test Attempt</th>
                  <th>Score</th>
                  <th>Date</th>
                  <th>Time Spent(minute)</th>
                  <th>View Test Details</th>
                </tr>
              </thead>

              <tbody>
                {selectedUser?.tests?.map((user, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.totalScore}</td>
                    <td>2024-10-15</td>
                    <td>{user.timeTaken}</td>
                    <td>
                      {
                        <Link to={`/userHistory/${id}/${index}`}>
                          View More
                        </Link>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserTestList;
