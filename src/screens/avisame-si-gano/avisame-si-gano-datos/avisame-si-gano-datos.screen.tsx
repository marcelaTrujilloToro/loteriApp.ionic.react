import React, { useContext, useState } from "react";
import "./avisame-si-gano-datos.style.css";
import Header from "../../../components/header/header.comp";
import { useHistory } from "react-router";
import { LoteriaContext } from "../../../providers/loteria/loteria.context";
import ModalAvisameVerificacion from "../components/modal-avisame-verificacion/modal-avisame-verificacion.comp";
import ModalAvisameSiGano from "../components/modal-avisame-si-gano/modal-avisame-si-gano.comp";
import { useAvisameSegundoHook } from "../../../hooks/avisame-si-gano/useAvisameSegundosParametros.hook";

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
import { AvisameSiGano } from "../../../models/avisame-si-gano/AvisameSiGano";
import ModalNotificacionGuardada from "../components/modal-notificacion-guardada/modal-notificacion-guardada.comp";


const AvisameSiGanoDatosScren: React.FC = () => {

  const { loteriaSeleccionada } = useContext(LoteriaContext);
  const [celular, setCelular] = useState<string>();
  const [email, setEmail] = useState<string>();
  
  const [verModalVerificacion, setVerModalVerificacion] = useState(false);
  
  const abrirModalVerificacion = () => {
    setVerModalVerificacion(true);
  };
  
  const cerrarModalVerificacion = (valido?: number) => {
    setVerModalVerificacion(false);
    if (valido === 1) {
      setVerModalAvisame(true);
    }
  };
  
  const [verModalAvisame, setVerModalAvisame] = useState(false);
  
  const abrirModalAvisame = () => {
    setVerModalAvisame(true);
  };
  
  const cerrarModalAvisame = (valido?: number) => {
    setVerModalAvisame(false);
  };
  

  const [verModalNotificacionGuardada, setVerModalNotificacionGuardada] = useState(false);
  const abrirModalNotificacionGuardada = () => {
    setVerModalAvisame(true);
  };
  
  const cerrarModalNotificacionGuardada = () => {
    setVerModalAvisame(false);
  };
  
 
  const recuperarRespuesta = (avisame: AvisameSiGano) => {
    
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
              isOpen={verModalVerificacion}
              cssClass="la-avisame-verificacion-modal"
            >
              {celular && email ? (
                <ModalAvisameVerificacion
                  ocultarModal={cerrarModalVerificacion}
                  abrirModal={abrirModalVerificacion}
                  celular={celular}
                  email={email}
                />
              ) : null}
            </IonModal>

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

        <IonModal isOpen={verModalAvisame} cssClass="la-avisame-si-gano-modal">
          <ModalAvisameSiGano
            ocultarModalAvisame={cerrarModalAvisame}
            abrirModalNotificacionGuardada={abrirModalNotificacionGuardada}
            recuperarRespuesta= {recuperarRespuesta}
          ></ModalAvisameSiGano>
        </IonModal>

        <IonModal isOpen={verModalNotificacionGuardada} cssClass="la-notificacion-guardada-modal">
          <ModalNotificacionGuardada
            ocultarModalNotificacionGuardada= {cerrarModalNotificacionGuardada}
            // mensaje= {mensaje}
          ></ModalNotificacionGuardada>
        </IonModal>

        
      </IonContent>
    </IonPage>
  );
};

export default AvisameSiGanoDatosScren;
