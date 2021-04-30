import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Loteria } from '../../models/loteria/loteria';

export const useLoterias = () => {
    
    const azenApi = useAzenApi();

    return useQuery<Loteria[]>(['loterias'], async () => {
        const { data } = await azenApi.get(`/loterias/`);
        return data;
    }, {
        cacheTime: 10 * 1000,
        retry: 1,
    });
}