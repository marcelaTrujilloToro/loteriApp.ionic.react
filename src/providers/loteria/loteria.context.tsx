import * as React from "react";
import { createContext, useState } from "react";

import { ILoteriaState } from './loteria.types';

const initialState = {} as ILoteriaState;

export const LoteriaContext = createContext(initialState);

export const LoteriaProvider: React.FC = ({children})=>{

    const [loteria, setLoteria] = useState(initialState.loteria);

    const loteriaState = {
        loteria,
        setLoteria
    } as ILoteriaState;

    return  (<LoteriaContext.Provider value={loteriaState}>
        {children}
    </LoteriaContext.Provider>);
}