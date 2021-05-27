import React, { useState } from "react";
import { Subscripcion } from "../../../../models/eliminar-subscripcion/Subscripcion";
import { IonButton, IonCol, IonRow } from "@ionic/react";
import { useEliminarSubscripcion } from "../../../../hooks/eliminar-susbcripcion/useEliminarSubscripcion.hook";

type SubscripcionProps = {
  subscripcion: Subscripcion;
 
};



export const SubscripcionItem: React.FC<SubscripcionProps> = (props) => {
  
  return (
    <IonRow className="la-division-premios" >
      <IonCol className="la-premio-fuente ">{props.subscripcion.numero}</IonCol>
      <IonCol className="la-premio-fuente ">{props.subscripcion.sorteosPendientes}
      </IonCol>
      {}
      <IonCol>
        <IonButton size="small"
          onClick={() => {
            
          }}
        >Eliminar</IonButton>
      </IonCol>
    </IonRow>
  );
};
