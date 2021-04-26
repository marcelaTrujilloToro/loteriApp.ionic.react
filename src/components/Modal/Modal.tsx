import React from "react";
import "./Modal.css";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
  IonText,
} from "@ionic/react";

interface ModalProps {
  ocultarModal: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <IonContent>
      <div className="la-que-cayo-modal-content">

      <IonButton
        className="la-boton-cerrar"
        onClick={() => {
          props.ocultarModal();
          console.log("click");
        
        }}
        fill="clear"
      >
        X
      </IonButton>
      <IonGrid className="ion-no-padding">
        <IonRow>
          <IonCol>
            <p className="la-texto-darkblue-12 la-texto">
              Lorem ipsum dolor sit amet, consectetur adipis elit sed malesuada
              aliquam pharetra dignissim volutpat parturient.
            </p>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <p className="la-titulo-16">Número de Sorteo</p>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput className="la-num-sorteo" type="number"></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="la-linea-roja"></div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>

          <IonCol>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput className="la-num-sorteo" type="number"></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="la-linea-roja"></div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>

          <IonCol>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput className="la-num-sorteo" type="number"></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="la-linea-roja"></div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>

          <IonCol>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput className="la-num-sorteo" type="number"></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="la-linea-roja"></div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <button className="la-boton la-boton-consultar">CONSULTAR</button>
          </IonCol>
        </IonRow>
      </IonGrid>
      </div>
    </IonContent>
  );
};
export default Modal;
