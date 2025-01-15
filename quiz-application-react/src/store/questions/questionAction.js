export const fetchQuestionRequest = () => ({
    type: "FETCH_QUESTION_REQUEST"
  })
  
  export const fetchQuestionSuccess = (payload) => ({
      type: "FETCH_QUESTION_SUCCESS",
      payload
  })
  
  export const fetchQuestionFailure = () => ({
      type: "FETCH_QUESTION_FAILURE"
  })
  
 