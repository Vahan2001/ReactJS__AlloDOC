import { UserTypes } from "../types";

function requestDoctors(category) {
  return {
    type: UserTypes.DOCTORSREQUEST,
    payload: { category },
  };
}

function requestDoctorsProfile(id) {
  return {
    type: UserTypes.DOCTORSPROFILEREQUEST,
    payload: { id },
  };
}
export { requestDoctors, requestDoctorsProfile };
