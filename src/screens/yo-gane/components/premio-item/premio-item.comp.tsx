import React from "react";
import { Premio } from "../../../../models/yo-gane/Premio";
import { IonCol, IonRow } from "@ionic/react";

type PremioProps = {
  premio: Premio;
};

export const PremioItem: React.FC<PremioProps> = (props) => {
  return (
    <>
      <IonRow className="la-division-premios">
        <IonCol className="la-premio-fuente " size="8">
          {props.premio.nombre}
        </IonCol>
        <IonCol className="la-premio-fuente ">{props.premio.numero}</IonCol>
        <IonCol className="la-premio-fuente ">{props.premio.serie}</IonCol>
      </IonRow>
      <br/>
      <IonRow>
        <IonCol className="la-premio-fuente ">Valor: <b>{props.premio.valor}</b></IonCol>
      </IonRow>
    </>
  );
};
