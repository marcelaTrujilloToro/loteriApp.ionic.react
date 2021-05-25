import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { AvisameSiGano } from '../../models/avisame-si-gano/AvisameSiGano';
import { AvisameSiGanoParams } from "../../models/avisame-si-gano/AvisameSiGanoParams";

export const useAvisameSiGano = (AvisameSiGanoParams: AvisameSiGanoParams) => {

    const azenApi = useAzenApi();

    return useQuery<AvisameSiGano>(['avisame'], async () => {
        const { data } = await azenApi.get(`avisame`);
        return data;
    }, {
        staleTime: Infinity,
        retry: 1,
    }); 
};