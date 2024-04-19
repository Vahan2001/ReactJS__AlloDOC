import { UserTypes } from "../types";

const INITIAL_STATE = {
  doctors: [],
  doctorProfil: [],
};
export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case UserTypes.DOCTORSREQUEST:
      return {
        ...state,
        doctors: payload,
      };
    case UserTypes.DOCTORSPROFILEREQUEST:
      return {
        ...state,
        doctorProfil: payload,
      };
    default:
      return state;
  }
}
