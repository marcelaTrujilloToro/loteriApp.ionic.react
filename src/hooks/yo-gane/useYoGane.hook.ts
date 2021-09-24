import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Premio } from '../../models/yo-gane/Premio';
import {YoGane} from '../../models/yo-gane/YoGane';
import queryClient from '../../react-query-client';


export const useYoGane = (loteria: string, sorteo:string, numero:string, serie:string) => {
    
    const azenApi = useAzenApi();

    return useQuery<YoGane>('yoGane', async () => {

        const azenToken = queryClient.getQueryData('azenTkn');

        const { data } = await azenApi.post(`/azenaut_ms/autinf_ConsultarPremio`,{
            loteria:loteria,
            sorteo:sorteo,
            numero:numero,
            serie:serie
        },{
            headers:{
                Authorization: 'Bearer ' + azenToken
            }
        }
        );
        console.log(JSON.stringify(data));
        return data;
    }, {
        retry: 1,
    });
}