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
        const { data } = await azenApi.get(`/api/service/azenaut_ms/autmsvr_ResultadosSorteo/`,
        {
            headers:{
                Authorization: 'Bearer ' + azenToken
            }
        });
        console.log(`token, ${azenToken}`);
        return data;
    }, {
        retry: 1,
        cacheTime: 10800000
    });
}