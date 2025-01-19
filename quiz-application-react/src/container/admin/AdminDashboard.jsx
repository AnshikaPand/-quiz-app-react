import React, { useState } from 'react'

import "./admin.css"
import NavBar from "../../components/Navbar"
import SideBar from '../../components/SideBar'


const AdminDashboard = () => {
    const [sidebar ,setSidebar] = useState(true)
  return (
    <>
  <NavBar/>
     <div class="admin-main-ciontainer">
     <SideBar/>
      <section class="main-content">
        <div class="main-content-info">
          <h1>Welcome to the Admin Page</h1>
        </div>
      </section>
    </div>
      
    </>
  )
}

export default AdminDashboard
