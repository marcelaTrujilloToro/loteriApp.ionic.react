import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { DisponibilidadNumero } from '../../models/disponibilidad-numero/DisponibilidadNumero';

export const useDisponibilidadNumero = (codigoLoteria: string, numero: string, serie: string) => {
    
    const azenApi = useAzenApi();

    return useQuery<DisponibilidadNumero[]>(['disponibilidadNumero'], async () => {
        const { data } = await azenApi.get(`disponibilidadNumero`);
        return data;
    }, {
        staleTime: Infinity,
        retry: 1,
    });
}