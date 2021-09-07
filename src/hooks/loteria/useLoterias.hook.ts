import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Loteria } from '../../models/loteria/Loteria';
import queryClient from '../../react-query-client';

export const useLoterias = () => {
    
    const azenApi = useAzenApi();

    return useQuery<Loteria[]>(['loterias'], async () => {
        const azenToken = queryClient.getQueryData('azenTkn');
        const { data } = await azenApi.get(`loterias`,{
            headers:{
                Authorization: 'Bearer ' + azenToken
            }
        });
        console.log(`token, ${azenToken}`);
        return data;
    }, {
        staleTime: Infinity,
        retry: 1,
        cacheTime: 10800000
    });
};