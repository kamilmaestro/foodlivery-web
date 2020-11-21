import Axios from 'axios';
import { AUTH_HEADER } from './constants';

const TOKEN_KEY = 'AuthToken';

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
}

Axios.defaults.headers.common[AUTH_HEADER] = getToken()
