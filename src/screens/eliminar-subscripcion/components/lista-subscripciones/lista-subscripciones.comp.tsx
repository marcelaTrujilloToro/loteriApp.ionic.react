import React from "react";
import { Subscripcion } from "../../../../models/eliminar-subscripcion/Subscripcion";
import { IonGrid, IonTitle } from "@ionic/react";
import { SubscripcionItem } from "../subscripcion-item/subscripcion-item.comp";

type ListaSubscripcionesProps = {
  listaSubscripciones: Subscripcion[] | undefined;
};

const ListaSubscripciones: React.FC<ListaSubscripcionesProps> = (props) => {
  if (props.listaSubscripciones === undefined) {
    return <IonTitle>No hay numeros inscritos</IonTitle>;
  } else {
    return (
      <IonGrid className=" ion-no-padding">
        {props.listaSubscripciones.map((subscripcion) => {
          return (
            <SubscripcionItem
              key={subscripcion.numero}
              subscripcion={subscripcion}
              
            ></SubscripcionItem>
          );
        })}
      </IonGrid>
    );
  }
};

export default ListaSubscripciones;
