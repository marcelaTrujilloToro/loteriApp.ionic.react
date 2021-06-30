import React, { useContext, useState } from "react";
import { Subscripcion } from "../../../../models/eliminar-subscripcion/Subscripcion";
import { IonButton, IonCol, IonRow, IonAlert } from "@ionic/react";
import { useEliminarSubscripcion } from "../../../../hooks/eliminar-susbcripcion/useEliminarSubscripcion.hook";
import { EliminarSubscripcionContext } from "../../../../providers/eliminar-subscripcion/eliminarSubscripcion.context";

type SubscripcionProps = {
  subscripcion: Subscripcion;
};

export const SubscripcionItem: React.FC<SubscripcionProps> = (props) => {
  const { eliminarSubscripcionParams, setEliminarSubscripcionParams } =
    useContext(EliminarSubscripcionContext);

  const { data: respuesta } = useEliminarSubscripcion(
    eliminarSubscripcionParams
  );

  const [verAlertEliminado, setVerAlertEliminado] = useState(false);
  const [verAlertEliminadoError, setVerAlertEliminadoError] = useState(false);

  const verificarSiNumeroEliminado = () => {
    if (respuesta) {
      for (let i = 0; i < respuesta.length; i++) {
        if (props.subscripcion.numero === respuesta[i].numero) {
          if (respuesta[i].eliminado === 1) {
            setVerAlertEliminado(true);
          }else if (respuesta[i].eliminado === 0) {
            setVerAlertEliminadoError(true);
            
          }
        }
      }
    }
  };

  return (
    <>
      <IonRow className="la-division-premios">
        <IonCol className="la-premio-fuente ">
          {props.subscripcion.numero}
        </IonCol>
        <IonCol className="la-premio-fuente ">
          {props.subscripcion.sorteosPendientes}
        </IonCol>
        <IonCol>
          {respuesta ? (
            <IonButton
              size="small"
              color="danger"
              onClick={() => {
                setEliminarSubscripcionParams({
                  ...eliminarSubscripcionParams,
                  numero: props.subscripcion.numero,
                });
                verificarSiNumeroEliminado();
              }}
            >
              Eliminar
            </IonButton>
          ) : null}
        </IonCol>
      </IonRow>

      <IonAlert
        isOpen={verAlertEliminado}
        onDidDismiss={() => setVerAlertEliminado(false)}
        cssClass="my-custom-class"
        header={"Eliminado"}
        message={"Se ha eliminado la subscripcion al número seleccionado"}
        buttons={[
          {
            text: "Aceptar",
            handler: () => {
              setVerAlertEliminado(false);
            },
          },
        ]}
      />

      <IonAlert
        isOpen={verAlertEliminadoError}
        onDidDismiss={() => setVerAlertEliminadoError(false)}
        cssClass="my-custom-class"
        header={"Error"}
        message={"No se ha podido eliminar la subscripcion"}
        buttons={[
          {
            text: "Aceptar",
            handler: () => {
              setVerAlertEliminadoError(false);
            },
          },
        ]}
      />
    </>
  );
};
