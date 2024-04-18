import axios from "axios";

const doctorsProfilAPI = axios.create({
  baseURL: "https://api.allodoc.md/users/user",
});

export default doctorsProfilAPI;
