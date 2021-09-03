import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Resultado } from '../../models/que-cayo/Resultado';

export const useResultados = (codigoLoteria:string, sorteo:string) => {
    
    const azenApi = useAzenApi();

    return useQuery<Resultado>('resultados', async () => {
        const { data } = await azenApi.get(`/api/service/azenaut_ms/autmsvr_ResultadosSorteo`,
        {
            headers:{
                Authorization: 'Bearer ' + varToken
            }
        });
        return data;
    }, {
        retry: 1,
    });
}