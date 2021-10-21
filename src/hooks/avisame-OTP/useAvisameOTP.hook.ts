import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { AvisameSiGano } from '../../models/avisame-si-gano/AvisameSiGano';
import { AvisameSiGanoParams } from "../../models/avisame-si-gano/AvisameSiGanoParams";
import queryClient from '../../react-query-client';

export const useAvisameOTP = (AvisameSiGanoParams: AvisameSiGanoParams) => {

    const azenApi = useAzenApi();

    return useQuery<AvisameSiGano>('avisameOTP', async () => {

        const azenToken = queryClient.getQueryData('azenTkn');

        const { data } = await azenApi.post(`/azenaut/autsus_VerificarOTP`,{
        
            movil: AvisameSiGanoParams.movil,
            email: AvisameSiGanoParams.email,
            codigoOTP: AvisameSiGanoParams.codigoVerificacion
        },{
            headers:{
                Authorization: 'Bearer ' + azenToken
            }
        });
        return data;
    },{
        staleTime: Infinity,
        retry: 1
    }); 
};