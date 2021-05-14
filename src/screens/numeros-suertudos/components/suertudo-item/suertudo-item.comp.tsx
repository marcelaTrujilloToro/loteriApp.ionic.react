import React from "react";
import { Suertudo } from "../../../../models/suertudos/Suertudo";
import { IonCol, IonRow } from "@ionic/react";

type SuertudoProps = {
  suertudo: Suertudo;
};

const SuertudoItem: React.FC<SuertudoProps> = (props) => {
  return (
    <IonRow className="la-division-premios">
      <IonCol className="la-premio-fuente " >
        {props.suertudo.numero}
      </IonCol>
      <IonCol className="la-premio-fuente ">{props.suertudo.cantidad}</IonCol>
      <IonCol className="la-premio-fuente ">{props.suertudo.premio}</IonCol>
    </IonRow>
  );
};
export default SuertudoItem;