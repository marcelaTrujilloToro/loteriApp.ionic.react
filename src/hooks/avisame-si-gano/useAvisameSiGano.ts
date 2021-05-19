import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { AvisameSiGano } from "../../models/avisame-si-gano/AvisameSiGano";
import { CodigoVerificacion } from '../../models/avisame-si-gano/CodigoVerificacion';


export const useAvisameSiGano = (codigoLoteria: string, celular:string, email: string, fecha:number, codigoVerificacion: CodigoVerificacion, numero: string, operacion: number) => {
    
    const azenApi = useAzenApi();

    return useQuery<AvisameSiGano>('avisameSiGano', async () => {
        const { data } = await azenApi.get(`avisame`);
        return data;
    }, {
        retry: 1,
    });
}