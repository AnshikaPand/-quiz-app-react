import { all } from "redux-saga/effects";
import userSaga from "./user/userSaga";
import questionSaga from "./questions/questionSaga";

export default function* rootSaga(){
    yield all([userSaga(),questionSaga()])
}