import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Suertudo } from "../../models/suertudos/Suertudo";
import queryClient from '../../react-query-client';

export const useSuertudos = (codigoLoteria: string, primeraCifra:string, segundaCifra: string, terceraCifra:string, ultimaCifra: string, cantidadSorteos: string) => {

    const azenApi = useAzenApi();

    return useQuery <Suertudo[]>(['suertudos'], async () => {

        const azenToken = queryClient.getQueryData('azenTkn');
        
        const {data} = await azenApi.post(`/azenaut_ms/autinf_InformeEstadisticoNumeros`,
        {
            loteria: codigoLoteria,
            primeraCifra: primeraCifra,
            segundaCifra: segundaCifra,
            terceraCifra: terceraCifra,
            ultimaCifra: ultimaCifra,
            cantidadSorteos: cantidadSorteos

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
};