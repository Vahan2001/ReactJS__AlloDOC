import { combineReducers } from "redux";
import doctorsListReducer from "./doctorsListReducer";
import doctorProfileReducer from "./doctorProfileReducer";

const reducers = combineReducers({
  doctors: doctorsListReducer,
  doctorProfile: doctorProfileReducer,
});

export default reducers;
