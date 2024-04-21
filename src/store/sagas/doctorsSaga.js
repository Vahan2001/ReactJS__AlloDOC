import { call, put } from "redux-saga/effects";
import { UserTypes } from "../types";
import doctorsAPI from "../../services/api/DoctorsAPI";

function* doctorsSaga(action) {
  try {
    const response = yield call(
      doctorsAPI.get,
      `/?page=1&category=${action.payload.category}`
    );
    yield put({
      type: UserTypes.SUCCESSDOCTORS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({ type: UserTypes.REJECTDOCTORS, error });
  }
}
export default doctorsSaga;
