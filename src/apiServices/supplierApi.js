import { get, post } from 'axios';
import {axios} from '../utils/tokenGetter'
import { SERVER_URL } from '../utils/urlProvider';

export const addNewSupplier = (supplier) => {
  const url = `${SERVER_URL}/supplier/`;

  return axios.post(url, supplier);
}

export const getSuppliersPage = () => {
  const url = `${SERVER_URL}/supplier/`;

  return axios.get(url);
}

export const getSupplierWithMenu = (id) => {
  const url = `${SERVER_URL}/supplier/${id}`;

  return axios.get(url);
}

export const addNewFood = (food) => {
  const url = `${SERVER_URL}/supplier/food`;

  return axios.post(url, food);
}

export const getSupplierByIds= (ids) => {
  const url = `${SERVER_URL}/supplier/ids`;

  return axios.post(url, ids);
}

export const getFoodByIds= (ids) => {
  const url = `${SERVER_URL}/supplier/food/ids`;

  return axios.post(url, ids);
}
