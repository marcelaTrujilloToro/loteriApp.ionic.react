import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import { Seco } from "../../../../models/que-cayo/Seco";


type SecoProps = {
  seco: Seco;
};

const SecoItem: React.FC<SecoProps> = (props) => {
  return (
    <IonRow className="la-division-premios">
      <IonCol className="la-premio-fuente " size="8">{props.seco.nombre}</IonCol>
      <IonCol className="la-premio-fuente ">{props.seco.numero}</IonCol>
      <IonCol className="la-premio-fuente ">{props.seco.serie}</IonCol>
    </IonRow>
  );
};
export default SecoItem;
