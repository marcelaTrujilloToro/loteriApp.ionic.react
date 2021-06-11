import { Loteria } from "../loteria/Loteria";

export interface AvisameSiGanoParams {
    loteria: Loteria,
    celular: string | undefined,
    email: string | undefined,
    codigoVerificacion: number | null,
    fecha: number,
    numero: string,
    cantidadSorteos: number | undefined
}