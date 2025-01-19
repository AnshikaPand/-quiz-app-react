
import Navbar from '../../components/Navbar'
import "./admin.css"
import SideBar from '../../components/SideBar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserTestRequest } from '../../store/userTest/userTestAction'

const User = () => {
    
    const userTest = useSelector((state) => state.userTests.userTests)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserTestRequest())
    }, [dispatch])

  return (
    <>
   
      <Navbar/>
      <div class="admin-main-ciontainer">
     <SideBar/>
     <section class="main-content">
                    <div class="users-information">
                        <table class="table-two" >
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Score</th>
                                    <th>Test Count</th>
                                    <th>View more</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    userTest.map((user, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{user.fullName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.totalScore}</td>
                                            {/* <td>{user.tests.length}</td> */}
                                            <td>{<Link to={`/testdetails/${index}`}>View More</Link>}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </section>
            </div>

            <div id="logout-container">
                <p id="my-name">Hii, Admin</p>
                <p id="my-email">admin007@gmail.com</p>
                <button id="logout-button" onclick="logout()">Logout</button>
            </div>
    
   
    </>
  )
}

export default User
