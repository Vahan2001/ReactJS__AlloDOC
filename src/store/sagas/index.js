import doctorsListSaga from "./doctorsListSaga";
import doctorProfileSaga from "./doctorProfileSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([doctorProfileSaga(), doctorsListSaga()]);
}

export default rootSaga;
