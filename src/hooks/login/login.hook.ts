
import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';

export const useLogin = (username: string, password: string) => {
    
    const azenApi = useAzenApi();

    return useQuery<any>('azenTkn', async () => {
        const { data } = await azenApi.post(`/login`,{
            UserName: username,
            Password: password

        });
        alert(data)
        return data;
    }, {
        staleTime: Infinity,
        retry: 1,
        // onError: (error: unknown) => {
        //     alert(JSON.stringify(error))
        // },
    });
};

