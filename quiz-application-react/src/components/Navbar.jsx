import React from 'react';
import "../container/admin/admin.css"

const Navbar = () => {
  return (
    <div className="Teacher-Page">
      <header>
        <nav>
          <div id="head">
            <i className='bx bx-menu'></i>
            <img 
              src="https://techpaathshala.com/assets/images/home/techpathshala_mobile_logo.svg" 
              alt="Tech Pathshala Logo"
            />
            <div id="admin-logout-btn"></div>
            <p id="welcome-admin">Welcome Anshika</p>
          </div>
        </nav>
      </header>
      <hr />
    </div>
  );
}

export default Navbar;
