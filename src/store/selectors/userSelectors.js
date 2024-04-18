const doctorsUserSelector = (state) => {
  return state.users.doctors;
};

const doctorsProfilSelector = (state) => {
  return state.users.doctorProfil;
};

export { doctorsUserSelector, doctorsProfilSelector };
