import { SERVER_URL } from '../utils/urlProvider';
import {axios} from '../utils/tokenGetter'

export const getTablesPage = () => {
  const url = `${SERVER_URL}/channel/`;

  return axios.get(url);
}

export const createNewTable = (name) => {
  const url = `${SERVER_URL}/channel/`;
  const config = {
    headers: {     
      "Content-Type": "text/plain"
    }
  }

  return axios.post(url, name, config);
}

export const joinNewTable = (invitation) => {
  const url = `${SERVER_URL}/channel/join`;
  const config = {
    headers: {     
      "Content-Type": "text/plain"
    }
  }

  return axios.post(url, invitation, config);
}

export const generateInvitation = (channelId) => {
  const url = `${SERVER_URL}/channel/${channelId}/invitation`;

  return axios.post(url);
}
