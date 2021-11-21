import axios from "axios";

import SessionService from './sessionService';

const BACKEND_URL = 'http://87e8-177-37-147-83.ngrok.io/';

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  if (SessionService.isLoggedIn()) {
    let token = SessionService.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
}, (error) => Promise.reject(error));

export default api;
