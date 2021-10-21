import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { AvisameSiGano } from '../../models/avisame-si-gano/AvisameSiGano';
import { AvisameSiGanoParams } from "../../models/avisame-si-gano/AvisameSiGanoParams";
import queryClient from '../../react-query-client';

export const useAvisameSolicitudCodigo = (AvisameSiGanoParams: AvisameSiGanoParams) => {

    const azenApi = useAzenApi();

    return useQuery<AvisameSiGano>('avisameSolicitudCodigo', async () => {

        const azenToken = queryClient.getQueryData('azenTkn');

        const { data } = await azenApi.post(`/azenaut/autsus_RegistrarUsuarios`,{
        
            movil: AvisameSiGanoParams.movil,
            email: AvisameSiGanoParams.email,
            anioNacim: AvisameSiGanoParams.anioNacim
        },{
            headers:{
                Authorization: 'Bearer ' + azenToken
            }
        });
        return data;
    },{
        staleTime: Infinity,
        retry: 1,
    }); 
};