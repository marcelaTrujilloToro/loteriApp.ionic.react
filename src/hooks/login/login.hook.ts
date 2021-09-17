import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';

export const useLogin = (username: string, password: string) => {
    
    const azenApi = useAzenApi();

    return useQuery<any>('azenTkn', async () => {
        const { data } = await azenApi.post(`/api/service/login`,{
            UserName: username,
            Password: password
        });
        return data;
    }, {
        staleTime: 1,
        retry: 1,
    });
};