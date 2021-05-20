import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import "./modal-avisame-verificacion.style.css";
import { useAvisameSiGano } from "../../../../hooks/avisame-si-gano/useAvisameSiGano";
import { LoteriaContext } from "../../../../providers/loteria/loteria.context";
import ModalAvisameSiGano from "../modal-avisame-si-gano/modal-avisame-si-gano.comp";

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
  ocultarModal: (valido?:number) => void;
  abrirModal: () => void;
  celular: string;
  email: string;
}

const ModalAvisameVerificacion: React.FC<ModalAvisameVerificacionProps> = (
  props
) => {
  const history = useHistory();

  const { loteriaSeleccionada } = useContext(LoteriaContext);

  const [codigoVerificacion, setCodigoVerificacion] = useState<number>(0);

  const { data: avisame } = useAvisameSiGano(
    loteriaSeleccionada.codigo,
    props.celular,
    props.email
  );

  const validarCodigoVerificacion = () => {
    if (avisame?.codigoVerificacion.valido === 1) {
      return  1;
    }
    return 0;
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
                    const valido = validarCodigoVerificacion();
                    props.ocultarModal(valido);
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
