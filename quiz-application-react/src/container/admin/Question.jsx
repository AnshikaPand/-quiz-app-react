import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import Sidebar from '../../components/SideBar';
import Navbar from '../../components/Navbar'
import ViewQuestion from '../../components/ViewQuestion';
import AddQuestion from '../../components/AddQuestion';
import UpdateQuestion from '../../components/UpdateQuestion';
import { fetchQuestionRequest, deleteQuestionRequest } from '../../store/questions/questionAction';

const Question = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [viewQuestion, setViewQuestion] = useState(false);
  const [addQuestion, setAddQuestion] = useState(false);
  const [updateQuestion, setUpdateQuestion] = useState(false);

  const questions = useSelector((state) => state.questions.questions); 
  const dispatch = useDispatch();

  console.log(questions)

  useEffect(() => {
    dispatch(fetchQuestionRequest()); 
  }, [dispatch]);

  const handleViewQuestion = (question) => {
    setSelectedQuestion(question);
    setViewQuestion(true);
  };

  const handleUpdateQuestion = (question) => {
    setSelectedQuestion(question);
    setUpdateQuestion(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      dispatch(deleteQuestionRequest(id));
    }
  };

  return (
    <>
    <Navbar/>
      <div className="admin-main-container">
        <Sidebar />

        <section className="right-sidebar main-content" style={{marginLeft:"350px"}} >
          <div className="title">
            <h1 style={{marginLeft:"-500px"}}>All Quiz Questions</h1>
          </div>
          
          <button
            id="add-new-question-btn"
            onClick={() => setAddQuestion(true)} style={{marginRight:"450px"}} // Open Add Question form
          >
            Add New Question
          </button>

          {questions && questions.length === 0 ? (
            <p>No questions available. Please add some questions.</p>
          ) : (
            <table className="table" id="question-table">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Questions</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {questions?.map((question, index) => (
                  <tr key={question.id}>
                    <td>{index + 1}</td>
                    <td>{question.question}</td>
                    <td>
                      <FaRegEye
                        onClick={() => handleViewQuestion(question)}
                        style={{
                          marginRight: "10px",
                          color: "blue",
                          cursor: "pointer",
                        }}
                      />
                      <FaPen
                        onClick={() => handleUpdateQuestion(question)}
                        style={{
                          marginRight: "10px",
                          color: "purple",
                          cursor: "pointer",
                        }}
                      />
                      <FaTrashAlt
                        onClick={() => handleDelete(question.id)}
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>

      {viewQuestion && (
        <ViewQuestion
          question={selectedQuestion}
          setViewQuestion={setViewQuestion}
        />
      )}
      {addQuestion && <AddQuestion setAddQuestion={setAddQuestion} />}
      {updateQuestion && (
        <UpdateQuestion
          selectedQuestion={selectedQuestion}
          setUpdateQuestion={setUpdateQuestion}
        />
      )}
    </>
  );
};

export default Question;
