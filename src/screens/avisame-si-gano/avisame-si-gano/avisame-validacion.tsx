import React, { useContext, useState } from "react";
import {
  IonAlert,
  IonCol,
  IonContent,
  IonGrid,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import Header from "../../../components/header/header.comp";
import { useAvisameOTP } from "../../../hooks/avisame-OTP/useAvisameOTP.hook";
import { AvisameSiGanoContext } from "../../../providers/avisame-si-gano/avisameSiGano.context";
import ModalCodigoVerificacion from "../../solicitud-codigo/components/modal-avisame-verificacion/modal-codigo-verificacion.comp";
import ModalAvisameSiGano from "../components/modal-avisame-si-gano/modal-avisame-si-gano.comp";
import ModalNotificacionGuardada from "../components/modal-notificacion-guardada/modal-notificacion-guardada.comp";
import { useHistory, useParams } from "react-router";

export interface AvisameSiGanoScreenParams {
  opcion: string;
}

const AvisameValidacion = () => {
  const history = useHistory();
  
  const { avisameSiGanoParams, setAvisameSiGanoParams } =useContext(AvisameSiGanoContext);
  
  const { opcion } = useParams<AvisameSiGanoScreenParams>();

  const { data: verificacionOTP } = useAvisameOTP(avisameSiGanoParams);

  const [verAlerta, setVerAlerta] = useState(false);
  const [verAlertExcedeIntento, setVerAlertExcedeIntento] = useState(false);

  const [verModalCodigoVerificacion, setVerModalCodigoVerificacion] =useState<boolean>(false);
  const [verModalAvisame, setVerModalAvisame] = useState<boolean>(false);
  const [verModalNotificacion, setVerModalNotificacion] =useState<boolean>(false);

  console.log(`OTP fuera del metodo: ${JSON.stringify(verificacionOTP)}`);

  const validarRespuestaCodigoVerificacion = () => {
   
        if (verificacionOTP?.codigoVerificacion?.valido === "1") {
          abrirModalAvisame();
        } else if (verificacionOTP?.codigoVerificacion?.valido === "0" && verificacionOTP?.codigoVerificacion?.excedeIntentos === "0") {
          setVerAlerta(true);
        } else if (verificacionOTP?.codigoVerificacion?.excedeIntentos === "1") {
          setVerAlertExcedeIntento(true);
        }
      
  };


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

  const abrirModalNotificacion = () => {
    setVerModalNotificacion(true);
  };
  const cerrarModalNotificacion = () => {
    setVerModalNotificacion(false);
  };

  if (verificacionOTP?.codigoVerificacion) {
    validarRespuestaCodigoVerificacion()
  }

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid>
            <IonRow>
              <IonCol className="la-col-titulo">
                <IonTitle className="la-titulo-22">AVÍSAME SI GANO</IonTitle>
                <div className="la-content-rectangulo-rojo "></div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="la-fuente-subtitulo">
                <IonText>
                  Lorem ipsum dolor sit amet, consectetur adipis elit sed
                  malesuada aliquam pharetra dignissim volutpat parturient.
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

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
            abrirModalVerificacion={abrirModalVerificacion}
            abrirModalAvisame={abrirModalAvisame}
            opcion={opcion}
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
          isOpen={verAlerta}
          onDidDismiss={() => setVerAlerta(false)}
          cssClass="my-custom-class"
          header="Error al ingresar el código"
          buttons={[
            {
              text: "Aceptar",
              handler: () => {
                setAvisameSiGanoParams({
                  ...avisameSiGanoParams,
                  codigoVerificacion: null,
                });
                setVerAlerta(false);
              },
            },
          ]}
        />

        <IonAlert
          isOpen={verAlertExcedeIntento}
          onDidDismiss={() => setVerAlertExcedeIntento(false)}
          cssClass="my-custom-class"
          header="Ha exedido los intentos"
          message={"¿Desea solicitar un nuevo código?"}
          buttons={[
            {
              text: "Cancelar",
              role: "cancel",
              cssClass: "secondary",
              handler: (blah) => {
                history.push({
                  pathname: `/`,
                });
              },
            },
            {
              text: "Aceptar",
              handler: () => {
                setAvisameSiGanoParams({
                  ...avisameSiGanoParams,
                  codigoVerificacion: null,
                });
                abrirModalVerificacion();
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default AvisameValidacion;
