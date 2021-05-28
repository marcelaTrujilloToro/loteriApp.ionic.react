import { EliminarSubscripcionParams } from "../../models/eliminar-subscripcion/EliminarSubscripcionParams";

export interface IEliminarSubscripcionState {
    eliminarSubscripcionParams: EliminarSubscripcionParams;
    setEliminarSubscripcionParams: (eliminarSubscripcionParams: EliminarSubscripcionParams) => void;
}