import React from "react";
import { DisponibilidadNumero } from "../../../../models/disponibilidad-numero/DisponibilidadNumero";
import DisponibilidadNumeroItem from "../disponibilidad-item/disponibilidad-item.comp";
import { IonCol, IonGrid, IonRow, IonText, IonTitle } from "@ionic/react";

type ListaDisponibilidadNumerosProps = {
  listaDisponibilidadNumeros: DisponibilidadNumero[] | undefined;
};

const ListaDisponibilidadNumeros: React.FC<ListaDisponibilidadNumerosProps> = (
  props
) => {
  if (props.listaDisponibilidadNumeros === undefined) {
    return <IonTitle>No hay numeros disponibles</IonTitle>;
  } else {
    return (
      <IonGrid className=" ion-no-padding ">
        {props.listaDisponibilidadNumeros.map((disponibilidadNumero) => {
          return (
            <DisponibilidadNumeroItem
              key={disponibilidadNumero.distribuidor}
              disponibilidadNumero={disponibilidadNumero}
            ></DisponibilidadNumeroItem>
          );
        })}
      </IonGrid>
    );
  }
};

export default ListaDisponibilidadNumeros;
