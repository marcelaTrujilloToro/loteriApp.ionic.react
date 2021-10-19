import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { DisponibilidadNumero } from '../../models/disponibilidad-numero/DisponibilidadNumero';
import queryClient from '../../react-query-client';

export const useDisponibilidadNumero = (codigoLoteria: string, numero: string, serie: string) => {
    
    const azenApi = useAzenApi();

    return useQuery<DisponibilidadNumero[]>(['disponibilidadNumero'], async () => {

        const azenToken = queryClient.getQueryData('azenTkn');

        const { data } = await azenApi.post(`/azenaut_ms/autinf_ConsultarNumeroAsignado`,{
            loteria: codigoLoteria,
            sorteo: numero,
            serie: serie
        },{
            headers:{
                Authorization: 'Bearer ' + azenToken
            }
        });
        return data;
    }, {
        staleTime: Infinity,
        retry: 1,
        refetchInterval: 10000
    });
}