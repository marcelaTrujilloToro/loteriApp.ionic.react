import { Notificacion } from "./Notificacion";
import { CodigoVerificacion } from "./CodigoVerificacion";

export interface AvisameSiGano {
    codigoVerificacion: CodigoVerificacion,
    notificacion: Notificacion;
}