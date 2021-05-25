import { AvisameSiGanoParams } from "../../models/avisame-si-gano/AvisameSiGanoParams";

export interface IAvisameSiGanoState {
    avisameSiGanoParams: AvisameSiGanoParams;
    setAvisameSiGanoParams: (avisameSiGanoParams: AvisameSiGanoParams) => void;
}