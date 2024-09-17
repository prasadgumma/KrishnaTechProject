// src/axiosConfig.js
import axios from "axios";

// Set up Axios interceptor for adding JWT token to every request
axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("jwtToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.warn("No token found in session storage");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login page)
      sessionStorage.removeItem("jwtToken");
      window.location.href = "/authentication/sign-in";
    }
    return Promise.reject(error);
  }
);

export default axios;
