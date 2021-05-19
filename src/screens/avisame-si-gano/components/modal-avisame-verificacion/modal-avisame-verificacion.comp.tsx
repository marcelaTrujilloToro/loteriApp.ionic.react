import React, { useState } from "react";
import { Loteria } from "../../../../models/loteria/Loteria";
import { useHistory } from "react-router";
import "./modal-avisame-verificacion.style.css";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
} from "@ionic/react";

interface ModalAvisameVerificacionProps {
  ocultarModal: () => void;
  celular: string | undefined;
  email: string | undefined;
}

const ModalAvisameVerificacion: React.FC<ModalAvisameVerificacionProps> = (
  props
) => {
  const history = useHistory();

  const [codigoVerificacion, setCodigoVerificacion] = useState<number>();

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
                Se envió al correo o celular un código de confirmación de 6 dígitos, por favor ingréselo. 
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
                      value={codigoVerificacion}
                      required={true}
                      maxlength={6}
                      placeholder="######"
                      onIonChange={(e: any) => {
                        setCodigoVerificacion(e.detail.value);
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
                  props.ocultarModal();
                  history.push({
                    pathname: `/screens/que-cayo-resultado/que-cayo-resultado.screen`,
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
export default ModalAvisameVerificacion;
