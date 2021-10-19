
import {
    useQuery,
} from 'react-query';
import { AZEN_API_BASE_URL } from '../../api/constants';

import useAzenApi from '../../api/useAzenApi';

export const useLogin = (username: string, password: string) => {
    
    const azenApi = useAzenApi();

    return useQuery<any>('azenTkn', async () => {
        const { data } = await azenApi.post(`/login`,{
            UserName: username,
            Password: password
        });
        return data;
    }, {
        staleTime: Infinity,
        retry: 1
    });
};