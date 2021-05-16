import { Loteria } from "../../models/loteria/Loteria";

export interface ILoteriaState {
    loteria: Loteria;
    setLoteria:(loteria: Loteria)=>void;
}