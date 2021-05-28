import {IEliminarSubscripcionState} from "./eliminar-subscripcion.types"
import React, { createContext, useState } from "react";
import {EliminarSubscripcionParams} from "../../models/eliminar-subscripcion/EliminarSubscripcionParams";

const initialState = {} as IEliminarSubscripcionState;

export const EliminarSubscripcionContext = createContext(initialState);

export const EliminarSubscripcionProvider: React.FC = ({children}) => {

    const [eliminarSubscripcionParams, setEliminarSubscripcionParams] = useState<EliminarSubscripcionParams>();

    const eliminarSubscripcionState = {
        eliminarSubscripcionParams: eliminarSubscripcionParams,
        setEliminarSubscripcionParams: setEliminarSubscripcionParams
    } as IEliminarSubscripcionState;

    return (
        <EliminarSubscripcionContext.Provider value={eliminarSubscripcionState}>
            {children}
        </EliminarSubscripcionContext.Provider>
    )

}