import { useMutation } from 'react-query';
import { axiosClient } from './axios';

export const useUpload = () => {
    return useMutation(
        (payload: FormData): Promise<any> =>
            axiosClient.post('/test/upload', payload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }),
    );
};

