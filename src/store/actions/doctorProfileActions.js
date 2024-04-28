import { DoctorProfileTypes } from "../types";

function get(id) {
  return {
    type: DoctorProfileTypes.REQUEST,
    payload: id,
  };
}

function success(data) {
  return {
    type: DoctorProfileTypes.SUCCESS,
    payload: data,
  };
}
function error(error) {
  return {
    type: DoctorProfileTypes.REJECT,
    payload: error,
  };
}
export { get, success, error };
