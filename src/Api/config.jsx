import axios from "axios";

const Sarhny = axios.create({
  baseURL: "https://sare7ny.vercel.app/",
});

Sarhny.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default Sarhny;
