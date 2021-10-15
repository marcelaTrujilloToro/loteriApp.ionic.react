import React, { useContext } from "react";
import "./modal-notificacion-guardada.style.css";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
  IonTitle,
} from "@ionic/react";
import { useAvisameSolicitudCodigo } from "../../../../hooks/avisame-solicitud-codigo/useAvisameSolicitudCodigo.hook";
import { AvisameSiGanoContext } from "../../../../providers/avisame-si-gano/avisameSiGano.context";

interface ModalNotificacionGuardadaProps {
  ocultarModalNotificacionGuardada: () => void;
  
}

const ModalNotificacionGuardada: React.FC<ModalNotificacionGuardadaProps> = (props) => {

  const {avisameSiGanoParams, setAvisameSiGanoParams} = useContext(AvisameSiGanoContext);

  const { data:respuesta } = useAvisameSolicitudCodigo(avisameSiGanoParams);

  return (
    <IonContent>
      <div className="la-modal-notificacion-guardada">
        <IonButton
          className="la-boton-cerrar"
          onClick={() => {
            props.ocultarModalNotificacionGuardada();
          }}
          fill="clear"
        >
          X
        </IonButton>
        <IonGrid className="ion-no-padding la-content-grid">
            <IonRow className="la-altura-row">
                <IonCol>
                    <p className="la-mensaje-notificacion">
                      {respuesta?.notificacion.mensaje}
                    </p>
                </IonCol>
            </IonRow>
        </IonGrid>
      </div>
    </IonContent>
  );
};

export default ModalNotificacionGuardada;
