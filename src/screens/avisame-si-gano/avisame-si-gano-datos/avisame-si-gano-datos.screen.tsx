import React, { useState } from "react";
import "./avisame-si-gano-datos.style.css";
import Header from "../../../components/header/header.comp";
import { useHistory } from "react-router";

import ModalAvisameVerificacion from "../components/modal-avisame-verificacion/modal-avisame-verificacion.comp";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonInput,
  IonAlert,
} from "@ionic/react";
import { Loteria } from "../../../models/loteria/Loteria";

const AvisameSiGanoDatosScren: React.FC = () => {
  const [celular, setCelular] = useState<string>();
  const [email, setEmail] = useState<string>();

  const [verModal, setVerModal] = useState(false);

  const abrirModal = () => {
    setVerModal(true);
  };

  const cerrarModal = () => {
    setVerModal(false);
  };

  return (
    <IonPage>
      <Header />
      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid className="la-content-grid ion-no-padding">
            <IonRow className="la-row-titulo-avisame">
              <IonCol className="la-col-titulo la-col-titulo-avisame">
                <IonTitle className="la-titulo-22">Avísame sí Gano</IonTitle>
                <div className="la-linea-roja "></div>
              </IonCol>
            </IonRow>

            <IonRow className="la-row-texto-avisame">
              <IonCol className="la-texto-avisame">
                <IonText>
                  Lorem ipsum dolor sit amet, consectetur adipis elit sed
                  malesuada aliquam pharetra dignissim volutpat parturient.
                </IonText>
              </IonCol>
            </IonRow>

            <IonRow className="la-row-dato-celular">
              <IonCol>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonInput
                        type="tel"
                        required={true}
                        maxlength={10}
                        value={celular}
                        placeholder="Numero de celular"
                        onIonChange={(e: any) => {
                          setCelular(e.detail.value);
                        }}
                      ></IonInput>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <div className="la-linea-roja-digito la-linea-datos-avisame"></div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
            </IonRow>

            <IonRow className="la-row-dato-email">
              <IonCol>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonInput
                        type="email"
                        placeholder="Correo electronico"
                        value={email}
                        onIonChange={(e: any) => {
                          setEmail(e.detail.value);
                        }}
                      ></IonInput>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <div className="la-linea-roja-digito la-linea-datos-avisame"></div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
            </IonRow>

            <IonModal
              isOpen={verModal}
              cssClass="la-avisame-verificacion-modal"
            >
              <ModalAvisameVerificacion
                ocultarModal={cerrarModal}
                celular={celular}
                email={email}
              />
            </IonModal>
            <IonRow className="la-row-boton-enviar">
              <IonCol>
                <button
                  className="la-boton la-boton-consultar"
                  onClick={() => {
                    abrirModal();
                  }}
                >
                  ENVIAR
                </button>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AvisameSiGanoDatosScren;
