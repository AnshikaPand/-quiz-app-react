import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import teachpaathshala from '../../assets/techpaathshala.svg';
import userimage from '../../assets/user_image.jpg';
import crown from '../../assets/crown.png';
import Vector from '../../assets/Vector 15.png';
import { fetchUserTestRequest } from '../../store/userTest/userTestAction'; // Adjust the import path based on your project structure

const Leaderboard = () => {
  const userTests = useSelector((state) => state.userTests.userTests);
  const userData = useSelector((state) => state.auth?.user || null); // Assuming user data is in the auth state
  const dispatch = useDispatch();

  const [sortedUsers, setSortedUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(null);
  const [currentUserMarks, setCurrentUserMarks] = useState(null);

  useEffect(() => {
    dispatch(fetchUserTestRequest());
  }, [dispatch]);

  const userInfo = JSON.parse(localStorage.getItem("userLoggedIn"));

  useEffect(() => {
    const sortedData = [...userTests].sort((a, b) => b.totalScore - a.totalScore);
    setSortedUsers(sortedData);
  }, [userTests]);

  useEffect(() => {
    if (userData && sortedUsers.length > 0) {
      const index = sortedUsers.findIndex((user) => user.userInfo.email === userData.email) + 1;
      const user = sortedUsers.find((user) => user.userInfo.email === userData.email);
      setUserIndex(index);
      setCurrentUserMarks(user ? user.totalScore : 0);
    }
  }, [sortedUsers, userData]);

  const logout = () => {
    localStorage.removeItem('userLoggedIn');
    window.location.href = '/login';
  };

  return (
    <div>
      <header id="header">
        <div id="tech-logo">
          <a href="/startquiz">
            <img src={teachpaathshala} alt="TechPaathshala" />
          </a>
        </div>
        <div className="right-side-info">
          <ul>
            <li>Welcome,</li>
            <li>{userInfo?.fullName || 'User'}</li>
            <img
              id="popup"
              onClick={() => console.log('Popup triggered')}
              src={userimage}
              alt="User"
            />
          </ul>
        </div>
      </header>

      <section id="leaderboard-main">
        <h1 id="user-rank-title">
          {userIndex ? `Wow! You Rank ${userIndex}th` : 'Wow! Check Your Rank'}
        </h1>
        <p id="supporting-text">Your Score: {currentUserMarks || 0}</p>
      </section>

      <section id="score-board">
        {sortedUsers.slice(0, 3).map((user, index) => (
          <div
            key={user.userInfo.email}
            id={`${['first', 'second', 'third'][index]}-rank-container`}
          >
            <div className={`${['first', 'second', 'third'][index]}-rank`}>
              {index === 0 && (
                <div className="crown" >
                  <img src={crown} alt="Crown" / >
                </div>
              )}
              <div className={`bg-color${index + 1}`}>
                <p className={`rank${index + 1}`}>#{index + 1}</p>
              </div>
              <div className={`actual-score${index + 1}`}>
                <h2>Score</h2>
                <p>{user.totalScore}</p>
              </div>
              <div className="circle">
                <p className="username">{user.userInfo.fullName}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="radius-design">
          <img src={Vector} alt="Vector Design" />
          <div className="ranking-board">
            {sortedUsers.slice(3).map((user, index) => (
              <div className="ranking" key={user.userInfo.email}>
                <p className="user-name">
                  <span>#{index + 4}</span> {user.userInfo.fullName}
                </p>
                <p className="user-score">{user.totalScore}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="logout-container">
        <p id="my-name">Hi, {userData?.fullName || 'User'}</p>
        <p id="my-email">{userData?.email || 'No Email Available'}</p>
        <button id="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
