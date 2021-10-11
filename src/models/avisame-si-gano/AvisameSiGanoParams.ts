import { Loteria } from "../loteria/Loteria";

export interface AvisameSiGanoParams {
    loteria: Loteria,
    celular: string | undefined,
    email: string | undefined,
    anioNacim: string,
    codigoVerificacion: number | null,
    fecha: number,
    numero: string,
    serie: string,
    cantidadSorteos: number | undefined
}