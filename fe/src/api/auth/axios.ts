import axios, { AxiosResponse } from 'axios';

import { ACCESS_TOKEN_FIELD, API_URL } from '../../config/config';
import { getToken, removeToken } from '../../utils/token';

export interface IResponse<T> {
  data: T;
  error?: boolean;
  errorCode?: number;
}


export const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});
axiosClient.defaults.withCredentials = false;

axiosClient.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (!config.headers) {
      return config;
    }
    if (token && token.accessToken && token.refreshToken) {
      config.headers[ACCESS_TOKEN_FIELD] = token.accessToken;
    }
    return config;
  },
  async (error: any) => {
    return await Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error: any) => {
    try {
      if (error.response && [401, 403].includes(error.response.status)) {
        const response = error?.response ?? false;
        if (
          response &&
          response?.request &&
          response?.request?.responseURL.includes('auth/sign-out')
        ) {
          throw Error('Unauthorized');
        }
        // axiosClient.post('/auth/sign-out');
        await removeToken();
        throw Error('Unauthorized');
      }
      if (error?.response?.data && typeof error.response.data === 'object') {
        return { error: true, ...error.response.data };
      }
      return false;
    } catch (exception) {
      return false;
    }
  },
);

export default axiosClient;
