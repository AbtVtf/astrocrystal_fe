import axios from 'axios';

const baseURL: string = 'http://backend-url/api';

export const REST = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: {
    'X-engage-initiator': 'frontend',
    'Content-Type': 'application/json',
  },
});
