import {
    useQuery,
    QueryClient,
    QueryCache
} from 'react-query';

import queryClient from '../../react-query-client';

import useAzenApi from '../../api/useAzenApi';
import { Resultado } from '../../models/que-cayo/Resultado';



export const useResultados = (codigoLoteria:string, sorteo:string) => {
    
    const azenApi = useAzenApi();
    
    return useQuery<Resultado>('resultados', async () => {
        
        const azenToken = queryClient.getQueryData('azenTkn');

        const { data } = await azenApi.post(`/azenaut_ms/autmsvr_ResultadosSorteo`,{
        // const { data } = await azenApi.get(`resultados`,{
            loteria: codigoLoteria,
            sorteo: sorteo
        },{
            headers:{
                Authorization: 'Bearer ' + azenToken
            }
        });
        return data;
    }, {
        staleTime: 60000,
        retry: 1,
        cacheTime: 10800000,
        refetchInterval: 10000
    });
}