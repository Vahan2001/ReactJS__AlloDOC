import { call, put } from "redux-saga/effects";
import doctorsProfilAPI from "../../services/api/DoctorsProfilAPI";
import { UserTypes } from "../types";

function* doctorProfilSaga(action) {
  try {
    const response = yield call(
      doctorsProfilAPI.get,
      `/${action.payload.id}/?role=doctor`
    );
    yield put({
      type: UserTypes.SUCCESSDOCTORSPROFIL,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: UserTypes.REJECTDOCTORSPROFIL, error });
  }
}

export default doctorProfilSaga;
