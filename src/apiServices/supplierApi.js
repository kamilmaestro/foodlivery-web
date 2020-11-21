import Axios, { get, post } from 'axios';
import { SERVER_URL } from '../utils/urlProvider';

export const addNewSupplier = (supplier) => {
  const url = `${SERVER_URL}/supplier/`;

  return post(url, supplier);
}

export const getSuppliersPage = () => {
  const url = `${SERVER_URL}/supplier/`;

  return get(url);
}

export const getSupplierWithMenu = (id) => {
  const url = `${SERVER_URL}/supplier/${id}`;

  return get(url);
}

export const addNewFood = (food) => {
  const url = `${SERVER_URL}/supplier/food`;

  return post(url, food);
}
