import React, { useContext, useState } from "react";
import "./avisame-si-gano-datos.style.css";
import Header from "../../../components/header/header.comp";
import { useHistory } from "react-router";
import { LoteriaContext } from "../../../providers/loteria/loteria.context";
import ModalAvisameVerificacion from "../components/modal-avisame-verificacion/modal-avisame-verificacion.comp";
import ModalAvisameSiGano from "../components/modal-avisame-si-gano/modal-avisame-si-gano.comp";

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
import ModalNotificacionGuardada from "../components/modal-notificacion-guardada/modal-notificacion-guardada.comp";
import { AvisameSiGanoContext } from "../../../providers/avisame-si-gano/avisameSiGano.context";
import { useAvisameSiGano } from "../../../hooks/avisame-si-gano/useAvisameSiGano.hook";

const AvisameSiGanoDatosScren: React.FC = () => {

  const { avisameSiGanoParams, setAvisameSiGanoParams } = useContext(AvisameSiGanoContext);


  const [verModalCodigoVerificacion, setVerModalCodigoVerificacion] =
    useState<boolean>(false);

  const [verModalAvisame, setVerModalAvisame] = useState<boolean>(false);

  const {} = useAvisameSiGano(avisameSiGanoParams);

  const abrirModalVerificacion = () => {
    setVerModalCodigoVerificacion(true);
  };
  const cerrarModalVerificacion = () => {
    setVerModalCodigoVerificacion(false);
  };

  const abrirModalAvisame = () => {
    setVerModalAvisame(true);
  };
  const cerrarModalAvisame = () => {
    setVerModalAvisame(false);
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
                        maxlength={10}
                        value={avisameSiGanoParams.celular}
                        placeholder="Numero de celular"
                        onIonChange={(e: any) => {
                          setAvisameSiGanoParams({
                            ...avisameSiGanoParams,
                            celular: e.detail.value,
                          });
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
                        value={avisameSiGanoParams.email}
                        onIonChange={(e: any) => {
                          setAvisameSiGanoParams({
                            ...avisameSiGanoParams,
                            email: e.detail.value,
                          });
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

            <IonRow className="la-row-boton-enviar">
              <IonCol>
                <button
                  className="la-boton la-boton-consultar"
                  onClick={() => {
                    abrirModalVerificacion();
                  }}
                >
                  ENVIAR
                </button>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

       </IonContent>
        <IonModal
          isOpen={verModalCodigoVerificacion}
          cssClass="la-avisame-verificacion-modal"
        >
        
          <ModalAvisameVerificacion ocultarModal={cerrarModalVerificacion}
          abrirModalAvisame={abrirModalAvisame} />
        </IonModal>

        <IonModal isOpen={verModalAvisame} cssClass="la-avisame-si-gano-modal">
          <ModalAvisameSiGano
            ocultarModalAvisame={cerrarModalAvisame}
          ></ModalAvisameSiGano>
        </IonModal> 

        {/* <IonModal isOpen={verModalNotificacionGuardada} cssClass="la-notificacion-guardada-modal">
          <ModalNotificacionGuardada
            ocultarModalNotificacionGuardada= {cerrarModalNotificacionGuardada}
            // mensaje= {mensaje}
          ></ModalNotificacionGuardada>
        </IonModal> */}
    </IonPage>
  );
};

export default AvisameSiGanoDatosScren;
