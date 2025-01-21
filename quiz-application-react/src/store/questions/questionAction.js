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

export const addQuestionRequest = (payload) => ({
  type: "ADD_QUESTION_REQUEST",
  payload
})
export const addQuestionSuccess = (payload) => ({
  type: "ADD_QUESTION_SUCCESS",
  payload,
});

export const addQuestionFailure = (error) => ({
  type: "ADD_QUESTION_FAILURE",
  error,
});


export const deleteQuestionRequest = (id) => ({
    type: "DELETE_QUESTION_REQUEST",
    id,
  });
  
  export const deleteQuestionSuccess = (id) => ({
    type: "DELETE_QUESTION_SUCCESS",
    id,
  });
  
  export const deleteQuestionFailure = (error) => ({
    type: "DELETE_QUESTION_FAILURE",
    error,
});
  
export const updateQuestionRequest = (payload) => ({
    type: "UPDATE_QUESTION_REQUEST",
    payload,
  });
  
  export const updateQuestionSuccess = (payload) => ({
    type: "UPDATE_QUESTION_SUCCESS",
    payload,
  });
  
  export const updateQuestionFailure = (error) => ({
    type: "UPDATE_QUESTION_FAILURE",
    error
  });

