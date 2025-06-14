import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true, // Important for sending cookies
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    //console.log(import.meta.env.API_BASE_URL);
    // Optional: redirect or show message on 401
    if (err.response?.status === 401) {
      console.warn("Unauthorized – redirect to login?");
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
