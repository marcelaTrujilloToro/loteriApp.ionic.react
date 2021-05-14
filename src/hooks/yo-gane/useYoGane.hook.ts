import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { Premio } from '../../models/yo-gane/Premio';
import {YoGane} from '../../models/yo-gane/YoGane';


export const useYoGane = (loteria: string, sorteo:string, numero:string, serie:string) => {
    
    const azenApi = useAzenApi();

    return useQuery<YoGane>('yoGane', async () => {
        const { data } = await azenApi.get(`yoGane`);
        return data;
    }, {
        retry: 1,
    });
}