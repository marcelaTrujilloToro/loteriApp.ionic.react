import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import "./modal-avisame-verificacion.style.css";
import ModalAvisameSiGano from "../modal-avisame-si-gano/modal-avisame-si-gano.comp";
import { AvisameSiGanoContext } from "../../../../providers/avisame-si-gano/avisameSiGano.context";
import { useAvisameSiGano } from "../../../../hooks/avisame-si-gano/useAvisameSiGano.hook";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
  IonModal,
} from "@ionic/react";

interface ModalAvisameVerificacionProps {
  ocultarModal: () => void;
  abrirModalAvisame: () => void;
}

const ModalAvisameVerificacion: React.FC<ModalAvisameVerificacionProps> = (props) => {


  const {avisameSiGanoParams, setAvisameSiGanoParams} = useContext(AvisameSiGanoContext);

  const { data:resultado } = useAvisameSiGano(avisameSiGanoParams);

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
              <p className="la-texto-darkblue-12 la-texto">
                Se envió al correo o celular un código de confirmación de{" "}
                <b>6</b> dígitos, por favor ingréselo.
              </p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <p className="la-titulo-16">Código de confirmación:</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      type="tel"
                      value={avisameSiGanoParams.codigoVerificacion}
                      required={true}
                      maxlength={6}
                      placeholder="######"
                      onIonChange={(e: any) => {
                        setAvisameSiGanoParams({...avisameSiGanoParams, codigoVerificacion: e.detail.value});
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
                    if (resultado?.codigoVerificacion.valido === 1) {
                      props.abrirModalAvisame();
                    }
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
export default ModalAvisameVerificacion;
