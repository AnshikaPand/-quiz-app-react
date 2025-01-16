const initialState = {
    userTests: [],
  };
  
  const userTestReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
      case "FETCH_USERTEST_SUCCESS":
        return { ...state, userTests: action.payload };
      case "ADD_USERTEST_SUCCESS":
        return { ...state, userTests: [...state.userTests, action.payload] };
      default:
        return state;
    }
  };
  
  export default userTestReducer;
  