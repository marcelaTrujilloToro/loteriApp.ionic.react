import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Loteria } from '../../models/loteria/Loteria';

export const useLoterias = () => {
    
    const azenApi = useAzenApi();

    return useQuery<Loteria[]>(['loterias'], async () => {
        const { data } = await azenApi.get(`loterias`);
        return data;
    }, {
        staleTime: Infinity,
        retry: 1,
    });
};