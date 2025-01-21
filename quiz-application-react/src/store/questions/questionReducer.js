const initialState = {
  questions: [],
};

const questionReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_QUESTION_SUCCESS":
      return { ...state, questions: action.payload };
    case "ADD_QUESTION_SUCCESS":
      return { ...state, questions: [...state.questions, action.payload] };
    case "DELETE_QUESTION_SUCCESS":
      console.log({ action });
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.payload.id
        ),
      };
    case "UPDATE_QUESTION_SUCCESS":
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.id === action.payload.id ? action.payload : question
        ),
      };
    default:
      return state;
  }
};
export default questionReducer;
