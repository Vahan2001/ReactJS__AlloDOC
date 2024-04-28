import { call, put, takeLatest } from "redux-saga/effects";
import doctorsProfilAPI from "../../services/api/DoctorsProfilAPI";
import { DoctorProfileActions } from "../actions";
import { DoctorProfileTypes } from "../types";

function* getDoctorProfile(action) {
  try {
    const response = yield call(
      doctorsProfilAPI.get,
      `/${action.payload}/?role=doctor`
    );
    yield put(DoctorProfileActions.success(response.data));
  } catch (error) {
    yield put(DoctorProfileActions.error(error.message));
  }
}
function* doctorProfileSaga() {
  yield takeLatest(DoctorProfileTypes.REQUEST, getDoctorProfile);
}
export default doctorProfileSaga;
