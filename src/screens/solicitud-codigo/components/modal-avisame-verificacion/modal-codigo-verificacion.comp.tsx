import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import "./modal-codigo-verificacion.style.css";
import { AvisameSiGanoContext } from "../../../../providers/avisame-si-gano/avisameSiGano.context";
import { useAvisameSolicitudCodigo } from "../../../../hooks/avisame-solicitud-codigo/useAvisameSolicitudCodigo.hook";
import {  useAvisameOTP } from "../../../../hooks/avisame-OTP/useAvisameOTP.hook";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
  IonAlert,
} from "@ionic/react";

interface ModalAvisameVerificacionProps {
  ocultarModal: () => void;
  abrirModalVerificacion: () => void;
  abrirModalAvisame: () => void;
  opcion: string;
}

const ModalCodigoVerificacion: React.FC<ModalAvisameVerificacionProps> = (props) => {
  
  const { avisameSiGanoParams, setAvisameSiGanoParams } = useContext(AvisameSiGanoContext);

  const { data: respuesta } = useAvisameSolicitudCodigo(avisameSiGanoParams);

  console.log(JSON.stringify(respuesta));


  const history = useHistory();

  return (
    <IonContent>
      <div className="la-avisame-modal-content">
        <IonButton
          className="la-boton-cerrar"
          onClick={() => {
            props.ocultarModal();
          }}
          fill="clear"
        >
          X
        </IonButton>
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol>
              <p className="la-texto-darkblue-12 la-texto la-texto-modal">
                Se envió al correo o celular un código de confirmación de{" "}
                <b>10</b> carácteres, por favor ingréselo.
              </p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <p className="la-titulo-16 la-titulo-modal">Código de confirmación:</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol className="la-fondo-digito">
                    <IonInput
                      type="tel"
                      value={avisameSiGanoParams.codigoVerificacion}
                      required={true}
                      maxlength={10}
                      placeholder="######"
                      onIonChange={(e: any) => {
                        setAvisameSiGanoParams({
                          ...avisameSiGanoParams,
                          codigoVerificacion: e.detail.value,
                        });
                      }}
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="la-linea-roja-digito la-linea-confirmacion-avisame"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <button
                className="la-boton la-boton-consultar"
                onClick={() => {
                  history.push({
                    pathname: `/screens/avisame-si-gano/avisame-si-gano/avisame-validacion/${props.opcion}/`,
                  });
                  
                }}
              >
                CONFIRMAR
              </button>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>

      
    </IonContent>
  );
};
export default ModalCodigoVerificacion;
