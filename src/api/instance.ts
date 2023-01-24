import axios from 'axios';

const BASE_URL = 'http://localhost:3333/api';
// const BASE_URL = 'http://localhost:12345/api';

export const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: BASE_URL,
});
