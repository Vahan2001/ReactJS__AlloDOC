import { takeEvery } from "redux-saga/effects";
import { UserTypes } from "../types";
import doctorsSaga from "./doctorsSaga";
import doctorProfilSaga from "./doctorsProfilSaga";

function* rootSaga() {
  yield takeEvery(UserTypes.DOCTORSREQUEST, doctorsSaga);
  yield takeEvery(UserTypes.DOCTORSPROFILEREQUEST, doctorProfilSaga);
}

export default rootSaga;
