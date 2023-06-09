import {useQuery, useMutation} from 'react-query';
import {IResponse, axiosClient} from './axios';

export type LoginRequest = {
    userName?: string;
    passWord?: string;
    
  };
export const useLogin = () => {
    return useMutation(
        (payload: LoginRequest): Promise<any> =>
            axiosClient.post('/login', payload),
    );
};

export const useLogout = () => {
    return useMutation(
      (): Promise<any> => axiosClient.post('/log-out', {}),
    );
  };