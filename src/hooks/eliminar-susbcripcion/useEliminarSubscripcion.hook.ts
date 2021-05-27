import {
    useQuery,
} from 'react-query';

import  { Subscripcion } from '../../models/eliminar-subscripcion/Subscripcion';

import useAzenApi from '../../api/useAzenApi';

export const useEliminarSubscripcion = (codigoLoteria: string, celular?: string, email?: string, numero?: number) => {


    const azenApi = useAzenApi();

    return useQuery<Subscripcion[]>(['subscripciones'], async () => {
        const { data } = await azenApi.get(`subscripciones`);
        return data;
    }, {
        retry: 1,
    });

};