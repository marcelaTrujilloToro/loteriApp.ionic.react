import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import { Premio } from "../../models/Premio";
import "./PremioItem.style.css";

type PremioProps = {
  premio: Premio;
};

const PremioItem: React.FC<PremioProps> = (props) => {
  return (
    <IonRow className="la-division-premios">
      <IonCol className="la-premio-fuente" size="7">
        {props.premio.descripcion}
      </IonCol>
      <IonCol className="la-premio-fuente">{props.premio.numero}</IonCol>
      <IonCol className="la-premio-fuente">{props.premio.serie}</IonCol>
      <IonCol className="la-premio-fuente">{props.premio.valor}</IonCol>
    </IonRow>
  );
};
export default PremioItem;
