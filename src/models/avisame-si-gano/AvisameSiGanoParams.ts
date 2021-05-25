import { Loteria } from "../loteria/Loteria";

export interface AvisameSiGanoParams {
    loteria: Loteria,
    celular: string,
    email: string,
    codigoVerificacion: number,
    fecha: number,
    numero: string,
    operacion: number,
    cantidadSorteos: number
}