import axios from "axios"
import { all, call, fork,put, takeLatest } from "redux-saga/effects";
const apiUrl = "http://localhost:5000/questions"

function* fetchQuestions(){
   try {
    const response = yield call(axios.get,apiUrl);
    yield put ({type: "FETCH_QUESTION_SUCCESS",payload: response.data})
   } catch (error) {
    yield put ({type: "FETCH_QUESTION_FAILURE",payload: error.message})
   }
}

function* watchfetchQuestion(){
    yield takeLatest("FETCH_QUESTION_REQUEST",fetchQuestions)
}


export default function* questionSaga(){
    yield all([fork(watchfetchQuestion)])
}