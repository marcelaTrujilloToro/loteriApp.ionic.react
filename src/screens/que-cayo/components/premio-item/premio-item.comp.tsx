import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import { Seco } from "../../../../models/que-cayo/Seco";
import "./premio-item.style.css";

type PremioProps = {
  premio: Seco;
};

const PremioItem: React.FC<PremioProps> = (props) => {
  return (
    <IonRow className="la-division-premios">
      <IonCol className="la-premio-fuente " size="8">{props.premio.nombre}</IonCol>
      <IonCol className="la-premio-fuente ">{props.premio.numero}</IonCol>
      <IonCol className="la-premio-fuente ">{props.premio.serie}</IonCol>
    </IonRow>
  );
};
export default PremioItem;
