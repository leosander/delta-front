import axios from "axios";
import { API_BASE } from "../config/globals";

export interface ApiResponse<T> {
  data: T;
  status: number;
}

 const api = axios.create({
  timeout: 60000,
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('jwtToken');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
