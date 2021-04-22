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

const Modal = () => {
  return (
    <IonContent>
      <IonGrid className="la-modal-fondo">
        <IonRow>
          <IonCol>
            <p className="la-texto-darkblue-12">
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
            <IonRow>
              <IonCol>
                <IonInput type="text">4</IonInput>
                <div className="la-linea-roja"></div>
              </IonCol>
              <IonCol>
                <div className="la-linea-roja"></div>
              </IonCol>
              <IonCol>
                <div className="la-linea-roja"></div>
              </IonCol>
              <IonCol>
                <div className="la-linea-roja"></div>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <button className="la-boton">CONSULTAR</button>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};
export default Modal;
