import axios from "axios";

const instance = axios.create({
  baseURL: "https://proptech-v2.onrender.com/api",
  withCredentials: true,
});

console.log("Axios instance created with baseURL:", instance.defaults.baseURL);

export default instance;
