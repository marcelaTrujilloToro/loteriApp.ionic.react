import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Suertudo } from "../../models/suertudos/Suertudo";

export const useSuertudos = (codigoLoteria: string, primeraCifra:string, segundaCifra: string, terceraCifra:string, ultimaCifra: string, cantidadSorteos: string) => {

    const azenApi = useAzenApi();

    return useQuery <Suertudo[]>(['suertudos'], async () => {
        const {data} = await azenApi.get(`suertudos`);
        return data[0];
    }, {
        retry:1,
    });
};