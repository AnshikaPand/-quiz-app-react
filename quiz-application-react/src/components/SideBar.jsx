import React from 'react';
import { FaHouseUser, FaUser, FaQuestion, FaSignOutAlt } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom'; 

import "../container/admin/admin.css";

const SideBar = () => {
  const userInfo = JSON.parse(localStorage.getItem("userLoggedIn"));
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("email");
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/");
    }
  };
  return (
    <>
      <section className="sidebar">
        <h2>Dashboard</h2>
        <ul className="menu">
          <li>
            <FaHouseUser />
            <Link className="dashboard" to="/AdminDashboard">Home</Link> 
          </li>
          <li>
            <FaUser />
            <Link className="usersss" to="/User">Users</Link> 
          </li>
          <li>
            <FaQuestion />
            <Link className="quizzes" to="/Question">Quizzes</Link> 
          </li>
        </ul>
        <div className="admin-logout-btn">
          <FaSignOutAlt />
          <button onClick={logout}>Logout</button>
        </div>
      </section>
    </>
  );
}

export default SideBar;
