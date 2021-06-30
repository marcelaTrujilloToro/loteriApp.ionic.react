import React, { StrictMode, useContext, useState } from "react";
import "./solicitud-codigo.style.css";

import Header from "../../../components/header/header.comp";
import { useAvisameSiGano } from "../../../hooks/avisame-si-gano/useAvisameSiGano.hook";
import { AvisameSiGanoContext } from "../../../providers/avisame-si-gano/avisameSiGano.context";
import ModalCodigoVerificacion from "../components/modal-avisame-verificacion/modal-codigo-verificacion.comp";
import ModalAvisameSiGano from "../../avisame-si-gano/components/modal-avisame-si-gano/modal-avisame-si-gano.comp";
import ModalNotificacionGuardada from "../../avisame-si-gano/components/modal-notificacion-guardada/modal-notificacion-guardada.comp";
import { useParams } from "react-router";
import { EliminarSubscripcionContext } from "../../../providers/eliminar-subscripcion/eliminarSubscripcion.context";
import { useEliminarSubscripcion } from "../../../hooks/eliminar-susbcripcion/useEliminarSubscripcion.hook";
import validator from "validator";

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

export interface AvisameSiGanoScreenParams {
  opcion: string;
}

const SolicitudCodigoScreen: React.FC = () => {
  const { opcion } = useParams<AvisameSiGanoScreenParams>();

  const { avisameSiGanoParams, setAvisameSiGanoParams } =
    useContext(AvisameSiGanoContext);

  const [verModalCodigoVerificacion, setVerModalCodigoVerificacion] =
    useState<boolean>(false);

  const [verModalAvisame, setVerModalAvisame] = useState<boolean>(false);

  const { data: respuesta } = useAvisameSiGano(avisameSiGanoParams);

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

  const [verModalNotificacion, setVerModalNotificacion] =
    useState<boolean>(false);

  const [verAlertaDatosInvalidos, setVerAlertaDatosInvalidos] = useState(false);

  

  const abrirModalNotificacion = () => {
    setVerModalNotificacion(true);
  };
  const cerrarModalNotificacion = () => {
    setVerModalNotificacion(false);
  };

  const { eliminarSubscripcionParams, setEliminarSubscripcionParams } = useContext(EliminarSubscripcionContext);

  const { data: resultado } = useEliminarSubscripcion(eliminarSubscripcionParams);

  const validarCorreo = () => {
    if (avisameSiGanoParams.email) {
      if (!validator.isEmail(avisameSiGanoParams.email)) {
        return false;
      }
      return true;
    }
  };

  const validarCelular = () => {
    if (avisameSiGanoParams.celular) {
      if (avisameSiGanoParams.celular.length < 10) {
        return false;
      }
      return true;
    }
  };

  return (
    <IonPage>
      <Header />
      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid className="la-content-grid ion-no-padding">
            <IonRow className="la-row-titulo-avisame">
              <IonCol className="la-col-titulo la-col-titulo-avisame">
                {opcion === "1" ? (
                  <IonTitle className="la-titulo-22">Avísame sí Gano</IonTitle>
                ) : (
                  <IonTitle className="la-titulo-22">
                    Mis Subscripciones
                  </IonTitle>
                )}
                <div className="la-content-rectangulo-rojo la-height-linea"></div>
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
                        placeholder="Número de celular"
                        onIonChange={(e: any) => {
                            setAvisameSiGanoParams({
                              ...avisameSiGanoParams,
                              celular: e.detail.value,
                            });

                            setEliminarSubscripcionParams({
                              ...eliminarSubscripcionParams,
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

                            setEliminarSubscripcionParams({
                              ...eliminarSubscripcionParams,
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
                    if (validarCorreo() === false || validarCelular() === false) {
                      setVerAlertaDatosInvalidos(true);
                    } else {
                      abrirModalVerificacion();
                    }
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
        <ModalCodigoVerificacion
          ocultarModal={cerrarModalVerificacion}
          abrirModalVerificacion={abrirModalVerificacion}
          abrirModalAvisame={abrirModalAvisame}
          opcion={opcion}
        />
      </IonModal>

      <IonModal isOpen={verModalAvisame} cssClass="la-avisame-si-gano-modal">
        <ModalAvisameSiGano
          ocultarModalAvisame={cerrarModalAvisame}
          abrirModalNotificacion={abrirModalNotificacion}
        ></ModalAvisameSiGano>
      </IonModal>

      <IonModal
        isOpen={verModalNotificacion}
        cssClass="la-notificacion-guardada-modal"
      >
        <ModalNotificacionGuardada
          ocultarModalNotificacionGuardada={cerrarModalNotificacion}
        ></ModalNotificacionGuardada>
      </IonModal>

      <IonAlert
        isOpen={verAlertaDatosInvalidos}
        onDidDismiss={() => setVerAlertaDatosInvalidos(false)}
        cssClass="my-custom-class"
        header={"Error"}
        message={"Ha ingresado mal un dato"}
        buttons={[
          {
            text: "Aceptar",
            handler: () => {
              setVerAlertaDatosInvalidos(false);
              setAvisameSiGanoParams({
                ...avisameSiGanoParams,
                email: undefined, celular: undefined
              });
            },
          },
        ]}
      />

      
    </IonPage>
  );
};

export default SolicitudCodigoScreen;