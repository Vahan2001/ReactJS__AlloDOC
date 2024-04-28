import { DoctorsListTypes } from "../types";

const INITIAL_STATE = {
  list: [],
  error: "",
  loading: false,
};
export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case DoctorsListTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DoctorsListTypes.SUCCESS:
      return {
        ...state,
        list: payload,
        error: null,
        loading: false,
      };
    case DoctorsListTypes.REJECT:
      return {
        ...state,
        list: [],
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
