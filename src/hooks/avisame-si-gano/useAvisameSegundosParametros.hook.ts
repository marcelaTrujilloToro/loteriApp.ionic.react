import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { AvisameSiGano } from "../../models/avisame-si-gano/AvisameSiGano";


export const useAvisameSegundoHook = (numero: string, fecha: string, operacion: number) => {
    
    const azenApi = useAzenApi();

    return useQuery<AvisameSiGano>('avisameSegundoHook', async () => {
        const { data } = await azenApi.get(`avisame`);
        return data;
    }, {
        retry: 1,
    });
}