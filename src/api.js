import axios from "axios";

const BACKEND_URL = `https://6.react.htmlacademy.pro/six-cities`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    console.error(`Request failed with error:`, error);
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
