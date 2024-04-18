import axios from "axios";

const doctorsAPI = axios.create({
  baseURL: "https://api.allodoc.md/users/get-doctors",
});

export default doctorsAPI;
