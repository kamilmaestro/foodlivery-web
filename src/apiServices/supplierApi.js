import { get, post } from 'axios';
import { SERVER_URL } from '../utils/urlProvider';

export const addNewSupplier = (supplier) => {
  const url = `${SERVER_URL}/supplier/`;

  return post(url, supplier);
}

export const getSuppliersPage = () => {
  const url = `${SERVER_URL}/supplier/`;

  return get(url);
}
