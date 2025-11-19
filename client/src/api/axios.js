import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Attach token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // or from context; localStorage is simple
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
