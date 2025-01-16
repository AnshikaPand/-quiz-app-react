import { all } from "redux-saga/effects";
import userSaga from "./user/userSaga";
import questionSaga from "./questions/questionSaga";
import userTestsSaga from "./userTest/userTestSaga";

export default function* rootSaga(){
    yield all([userSaga(),questionSaga(),userTestsSaga()])
}