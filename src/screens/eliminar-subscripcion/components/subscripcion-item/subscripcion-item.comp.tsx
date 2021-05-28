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

  const verificarSiNumeroEliminado = () => {
    if (respuesta) {
      for (let i = 0; i < respuesta.length; i++) {
        if (props.subscripcion.numero === respuesta[i].numero) {
          if (respuesta[i].eliminado === 1) {
            setVerAlertEliminado(true);
            console.log(respuesta[i].numero);
          }
        }
      }
    }
  }

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
            text: "Okay",
            handler: () => {
              setVerAlertEliminado(false);
            },
          },
        ]}
      />
    </>
  );
};
