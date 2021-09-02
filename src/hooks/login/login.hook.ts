import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import {Login} from '../../models/login/login';

export const useLogin = (username: string, password: string, password2: string) => {
    
    const azenApi = useAzenApi();

    return useQuery('api/service/login', async () => {
        const { data } = await azenApi.get(`api/service/login`);
        return data;
    }, {
        staleTime: 2,
        retry: 1,
    });
};