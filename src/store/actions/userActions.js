import { UserTypes } from "../types";

function setDoctors(doctors) {
  return {
    type: UserTypes.DOCTORSREQUEST,
    payload: doctors,
  };
}

function setDoctorsProfile(doctorProfil) {
  return {
    type: UserTypes.DOCTORSPROFILEREQUEST,
    payload: doctorProfil,
  };
}
export { setDoctors, setDoctorsProfile };
