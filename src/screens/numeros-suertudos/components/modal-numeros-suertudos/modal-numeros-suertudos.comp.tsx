import React from "react";
import { Loteria } from "../../../../models/loteria/Loteria";
import { useHistory } from "react-router";
import "./modal-numeros-suertudos.style.css";
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonInput,
    IonRow,
} from "@ionic/react";

interface ModalNumerosSuertudosProps {
    ocultarModal: () => void;
    loteria: Loteria;
  }

const ModalNumerosSuertudos: React.FC <ModalNumerosSuertudosProps> = (props) => {

    const history = useHistory();
    
  return (
    <IonContent>
      <div className="la-modal-suertudos-content">
        <IonButton
          className="la-boton-cerrar"
          onClick={() => {
            props.ocultarModal();
            history.push({
              pathname: `/screens/numeros-suertudos/numeros-suertudos-resultados/numeros-suertudos-resultados.screen/`,
            });
          }}
          fill="clear"
        >
          X
        </IonButton>
        <IonGrid className="ion-no-padding">

        <IonRow>
            <IonCol className="la-titulo-modal-suertudos">
              <p className="la-titulo-16">Aproximación con tus números de la suerte</p>
            </IonCol>
          </IonRow>

        </IonGrid>
      </div>
    </IonContent>
  );
};

export default ModalNumerosSuertudos;