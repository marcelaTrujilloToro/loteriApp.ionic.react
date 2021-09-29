import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import "./modal-codigo-verificacion.style.css";
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
  IonAlert,
} from "@ionic/react";

interface ModalAvisameVerificacionProps {
  ocultarModal: () => void;
  abrirModalVerificacion: () => void;
  abrirModalAvisame: () => void;
  opcion: string;
}

const ModalCodigoVerificacion: React.FC<ModalAvisameVerificacionProps> = (
  props
) => {
  const { avisameSiGanoParams, setAvisameSiGanoParams } =
    useContext(AvisameSiGanoContext);

  const { data: respuesta } = useAvisameSiGano(avisameSiGanoParams);

  const history = useHistory();



  const [verAlerta, setVerAlerta] = useState(false);

  const [verAlertExcedeIntento, setVerAlertExcedeIntento] = useState(false);

  const validarRespuestaCodigoVerificacion = () => {
    if (respuesta?.codigoVerificacion.valido === 1) {
      if (props.opcion === "1") {
        props.ocultarModal();
        props.abrirModalAvisame();
      } else if (props.opcion === "0") {
        history.push({
          pathname: `/screens/eliminar-subscripcion/eliminar-subscripcion-resultado/eliminar-subscripcion-resultado.screen/`,
        });
      }
    } else if (
      respuesta?.codigoVerificacion.valido === 0 &&
      respuesta.codigoVerificacion.excedeIntentos === 0
    ) {
      setVerAlerta(true);
    } else if (respuesta?.codigoVerificacion.excedeIntentos === 1) {
      setVerAlertExcedeIntento(true);
    }
  };

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
                <b>6</b> dígitos, por favor ingréselo.
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
                      maxlength={6}
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
                  validarRespuestaCodigoVerificacion();
                }}
              >
                CONFIRMAR
              </button>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>

      <IonAlert
        isOpen={verAlerta}
        onDidDismiss={() => setVerAlerta(false)}
        cssClass="my-custom-class"
        header={respuesta?.codigoVerificacion.mensaje}
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
        header={respuesta?.codigoVerificacion.mensaje}
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
              props.abrirModalVerificacion();
            },
          },
        ]}
      />
    </IonContent>
  );
};
export default ModalCodigoVerificacion;
