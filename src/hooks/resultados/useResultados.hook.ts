import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Resultado } from '../../models/que-cayo/Resultado';

export const useResultados = (codigoLoteria:string, sorteo:string) => {
    
    const azenApi = useAzenApi();

    return useQuery<Resultado>('resultados', async () => {
        const { data } = await azenApi.get(`resultados`);
        return data;
    }, {
        retry: 1,
    });
}