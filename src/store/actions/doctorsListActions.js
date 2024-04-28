import { DoctorsListTypes } from "../types";

function get(category) {
  return {
    type: DoctorsListTypes.REQUEST,
    payload: category,
  };
}

function success(list) {
  return {
    type: DoctorsListTypes.SUCCESS,
    payload: list,
  };
}
function error(error) {
  return {
    type: DoctorsListTypes.REJECT,
    payload: error,
  };
}
export { get, success, error };
