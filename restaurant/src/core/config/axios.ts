import axios from 'axios';

export const axiosClient = axios.create({
  timeout: 5000,
  baseURL: 'https://api.yelp.com/v3/',
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});
