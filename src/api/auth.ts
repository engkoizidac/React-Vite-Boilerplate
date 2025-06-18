import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // Important for sending cookies
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    // Optional: redirect or show message on 401
    if (err.response?.status === 401) {
      console.warn("Unauthorized – redirect to login?");
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
