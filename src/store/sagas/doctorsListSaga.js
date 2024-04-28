import { call, put, takeLatest } from "redux-saga/effects";
import doctorsAPI from "../../services/api/DoctorsAPI";
import { DoctorsListActions } from "../actions";
import { DoctorsListTypes } from "../types";

function* getDoctorsList(action) {
  try {
    const response = yield call(
      doctorsAPI.get,
      `/?page=1&category=${action.payload}`
    );
    yield put(DoctorsListActions.success(response.data.results));
  } catch (error) {
    yield put(DoctorsListActions.error(error.message));
  }
}
function* doctorsListSaga() {
  yield takeLatest(DoctorsListTypes.REQUEST, getDoctorsList);
}
export default doctorsListSaga;
