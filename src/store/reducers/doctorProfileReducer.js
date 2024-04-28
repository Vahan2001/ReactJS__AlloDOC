import { DoctorProfileTypes } from "../types";

const INITIAL_STATE = {
  data: null,
  error: "",
  loading: false,
};
export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case DoctorProfileTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DoctorProfileTypes.SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      };
    case DoctorProfileTypes.REJECT:
      return {
        ...state,
        data: null,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
