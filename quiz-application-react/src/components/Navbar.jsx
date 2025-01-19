import React from 'react';
import { FaBars, FaUserAlt } from 'react-icons/fa'; // Importing relevant icons
import "../container/admin/admin.css";
import techpaathshala from "../assets/techpaathshala.svg"
import userimage from '../assets/user_image.jpg';

const Navbar = () => {
  return (
    <>
      <header id="admin-header">
        <div id="tech-logo">
          <FaBars className="hamburger" onClick={() => sidebarToggle()} />
          <img src={techpaathshala} alt="techpaathsala" />
        </div>

        <div className="right-side-info">
          <ul>
            <li>Welcome,</li>
            <li>Admin</li>
            <img
              id="popup"
              onClick={() => popUpLogout()}
              src={userimage}
              alt="userimage"
            />
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
