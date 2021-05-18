import { Loteria } from "../../models/loteria/Loteria";

export interface ILoteriaState {
    loteriaSeleccionada: Loteria;
    setLoteriaSeleccionada:(loteria: Loteria)=>void;
}