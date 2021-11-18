import jwt_decode from "jwt-decode";
import axios from "axios";

const url_base = "";
const app = axios.create({
  baseURL: url_base,
});

app.interceptors.request.use(async (config) => {
  var token = localStorage.getItem("app_session");
  if (token) {
    var decoded = jwt_decode<{ exp: number, iat: number }>(token);
    var expirationTime = decoded.exp * 1000;
    if (Date.now() >= expirationTime) {
      console.log("expirou")
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default app;
