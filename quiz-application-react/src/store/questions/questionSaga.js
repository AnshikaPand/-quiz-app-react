import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
const apiUrl = "http://localhost:5000/questions";

function* fetchQuestions() {
  try {
    const response = yield call(axios.get, apiUrl);
    yield put({ type: "FETCH_QUESTION_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_QUESTION_FAILURE", payload: error.message });
  }
}

function* watchfetchQuestion() {
  yield takeLatest("FETCH_QUESTION_REQUEST", fetchQuestions);
}

function* addQuestions(action) {
  try {
    const response = yield call(axios.post, apiUrl, action.payload);
    console.log({ response });
    yield put({ type: "ADD_QUESTION_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "ADD_QUESTION_FAILURE", payload: error.message });
  }
}

function* watchaddQuestions() {
  yield takeLatest("ADD_QUESTION_REQUEST", addQuestions);
}

function* deleteQuestions(action) {
  try {
    const response = yield call(axios.delete, `${apiUrl}/${action.id}`);
    console.log({ response });
    yield put({ type: "DELETE_QUESTION_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "DELETE_QUESTION_FAILURE", payload: error.message });
  }
}

function* watchdeleteQuestions() {
  yield takeLatest("DELETE_QUESTION_REQUEST", deleteQuestions);
}

function* updateQuestion(action) {
  console.log(action.payload.id);
  try {
    const response = yield call(
      axios.put,
      `${apiUrl}/${action.payload.id}`,
      action.payload
    );
    yield put({ type: "UPDATE_QUESTION_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "UPDATE_QUESTION_FAILURE", payload: error.message });
    console.log(error.message)
  }
}

function* watchupdateQuestion() {
  yield takeLatest("UPDATE_QUESTION_REQUEST", updateQuestion);
}

export default function* questionSaga() {
  yield all([
    fork(watchfetchQuestion),
    fork(watchaddQuestions),
    fork(watchdeleteQuestions),
    fork(watchupdateQuestion),
  ]);
}
