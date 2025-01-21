import { useState } from "react";
import "./App.css";
import LoginPage from './pages/LoginPage'
import SignupPage from "./pages/SignupPage";
import DashboadPage from "./pages/DashboadPage";
import QuizQuestionsPage from "./pages/QuizQuestionsPage";
import LeaderboadPage from "./pages/LeaderboadPage";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./container/admin/AdminDashboard";
import User from "./container/admin/User";
import UserTestList from "./container/admin/UserTestList";
import UserHistory from "./container/admin/UserHistory"
import Question from "./container/admin/Question";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="dashboard" element={<DashboadPage />} />
      <Route path="quizQuestion" element={<QuizQuestionsPage />} />
      <Route path="leaderbord" element={<LeaderboadPage />} />
      <Route path="admindashboard" element={<AdminDashboard />} />
      <Route path="user" element={<User />} />
      <Route path="userTestList/:id" element={<UserTestList />} />
      <Route path="userHistory/:id/:testIndex" element={<UserHistory />} />
      <Route path="question" element={<Question />} />

      
      
      </Routes>
{/* <LoginPage/> */}
{/* <SignupPage/> */}
{/* <DashboadPage/> */}
{/* <QuizQuestionsPage/>
      */}
      {/* <LeaderboadPage/> */}
    </div>
  );
}

export default App;
