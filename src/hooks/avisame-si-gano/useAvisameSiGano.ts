import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { AvisameSiGano } from "../../models/avisame-si-gano/AvisameSiGano";


export const useAvisameSiGano = (codigoLoteria: string, celular:string, email: string, codigoVerificacion?:number, fecha?:number, numero?:number, operacion?: number) => {
    
    const azenApi = useAzenApi();

    return useQuery<AvisameSiGano>('avisameSiGano', async () => {
        const { data } = await azenApi.get(`avisame`);
        return data;
    }, {
        retry: 1,
    });
}