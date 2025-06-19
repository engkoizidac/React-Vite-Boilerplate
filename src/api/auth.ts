import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // Important for sending cookies
});

// Proper error handling with clear messaging
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) {
      // Server responded with a status other than 2xx
      if (err.response.status === 401) {
        // Optionally, you can trigger a global event or redirect here
        console.warn("Unauthorized – please log in.");
      } else if (err.response.status === 403) {
        console.warn("Forbidden – you do not have access.");
      } else if (err.response.status >= 500) {
        console.error("Server error:", err.response.statusText);
      }
    } else if (err.request) {
      // Request was made but no response received
      console.error("No response from server. Please check your network.");
    } else {
      // Something else happened
      console.error("Error:", err.message);
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
