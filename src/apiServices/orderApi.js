import { SERVER_URL } from '../utils/urlProvider';
import {axios} from '../utils/tokenGetter'

export const getProposalsPage = (tableId) => {
  const url = `${SERVER_URL}/order/channel/${tableId}`;

  return axios.get(url);
}

export const createNewProposal = (name) => {
  const url = `${SERVER_URL}/order/`;

  return axios.post(url, name);
}
