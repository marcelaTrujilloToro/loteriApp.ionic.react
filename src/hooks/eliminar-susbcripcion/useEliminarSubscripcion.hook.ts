import {
    useQuery,
} from 'react-query';

import  { Subscripcion } from '../../models/eliminar-subscripcion/Subscripcion';
import {EliminarSubscripcionParams} from '../../models/eliminar-subscripcion/EliminarSubscripcionParams';
import useAzenApi from '../../api/useAzenApi';

export const useEliminarSubscripcion = (EliminarSubscripcionParams: EliminarSubscripcionParams) => {

    const azenApi = useAzenApi();

    return useQuery<Subscripcion[]>(['subscripciones'], async () => {
        const { data } = await azenApi.get(`subscripciones`);
        return data;
    }, {
        retry: 1,
    });

};