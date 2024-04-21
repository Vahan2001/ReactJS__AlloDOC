import { UserTypes } from "../types";

const INITIAL_STATE = {
  doctors: [],
  doctorProfil: [],
  error: null,
};
export default function (state = INITIAL_STATE, action) {
  const { type, payload, error } = action;
  switch (type) {
    case UserTypes.SUCCESSDOCTORS:
      return {
        ...state,
        doctors: payload,
        error: null,
      };
    case UserTypes.REJECTDOCTORS:
      return {
        ...state,
        error: error,
      };
    case UserTypes.SUCCESSDOCTORSPROFIL:
      return {
        ...state,
        doctorProfil: payload,
        error: null,
      };
    case UserTypes.REJECTDOCTORSPROFIL:
      return {
        ...state,
        error: error,
      };
    default:
      return state;
  }
}
