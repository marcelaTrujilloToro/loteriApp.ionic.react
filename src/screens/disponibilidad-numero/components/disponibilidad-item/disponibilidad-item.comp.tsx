import {DisponibilidadNumero} from '../../../../models/disponibilidad-numero/DisponibilidadNumero';
import { IonCol,  IonRow } from "@ionic/react";
import './disponibilidad-item.style.css';

type DisponibilidadNumeroProps = {
    disponibilidadNumero: DisponibilidadNumero;
};

const DisponibilidadNumeroItem: React.FC<DisponibilidadNumeroProps> = (props) => {
    return (
        <IonRow className="la-division-premios" >
            {/* <IonCol className="la-premio-fuente la-fuente-10" size="2">{props.disponibilidadNumero.numero}</IonCol> */}
            <IonCol className="la-premio-fuente la-fuente-10" size="2">{props.disponibilidadNumero.serie}</IonCol>
            <IonCol className="la-premio-fuente la-fuente-14 " size="4">{props.disponibilidadNumero.distribuidor}</IonCol>
            <IonCol className="la-premio-fuente la-fuente-14 " size="3" >{props.disponibilidadNumero.ciudad}</IonCol>
            <IonCol className="la-premio-fuente la-fuente-right" size="3">{props.disponibilidadNumero.telefono}</IonCol>
        </IonRow>
    )
};
export default DisponibilidadNumeroItem;