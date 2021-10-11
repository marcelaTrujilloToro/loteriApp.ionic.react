import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Loteria } from '../../models/loteria/Loteria';
import queryClient from '../../react-query-client';

export const useLoterias = () => {
    
    const azenApi = useAzenApi();

    const codDesde = "";
    const codHasta = "";

    return useQuery<Loteria[]>(['loterias'], async () => {

        const azenToken = queryClient.getQueryData('azenTkn');

        // const { data } = await azenApi.post(`/azenaut_ms/autinf_Loterias`,{
        const { data } = await azenApi.get(`loterias`,{
            // codDesde: codDesde,
            // codHasta: codHasta
        // },{
            // headers:{
                // Authorization: 'Bearer ' + azenToken
            // }
        });
        return data;
    }, {
        staleTime: Infinity,
        retry: 1,
        cacheTime: 10800000
    });
};