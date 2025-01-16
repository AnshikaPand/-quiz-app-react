export const fetchUserTestRequest = () => ({
    type: "FETCH_USERTEST_REQUEST",
  });
  
  export const fetchUserTestSuccess = (payload) => ({
    type: "FETCH_USERTEST_SUCCESS",
    payload,
  });
  
  export const fetchUserTestFailure = () => ({
    type: "FETCH_USERTEST_FAILURE",
  });
  
  export const addUserTestRequest = (payload) => ({
    type: "ADD_USERTEST_REQUEST",
    payload,
  });
  
  export const addUserTestSuccess = (payload) => ({
    type: "ADD_USERTEST_SUCCESS",
    payload,
  });
  
  export const addUserTestFailure = () => ({
    type: "ADD_USERTEST_FAILURE",
  });