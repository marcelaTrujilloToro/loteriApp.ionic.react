import React from "react";
import "../que-cayo/que-cayo.css";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const QueCayo = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonButton fill="clear">
          <IonMenuButton slot="start" color="warning"></IonMenuButton>
        </IonButton>

        <div className="elipse">
          <IonImg src="\assets\imagenes\LoteriApp_logo_300x148 3.png"></IonImg>
        </div>
      </IonHeader>

      <IonContent className="content">
        <div className = "div-texto">
          <IonTitle className="fuente-titulo">¿Qué cayó?</IonTitle>
          <div className = "rectangulo-rojo"></div>
          <IonText className="ion-text-center fuente-texto">
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipis elit sed malesuada
              aliquam pharetra dignissim volutpat parturient.
            </h5>
          </IonText>
        </div>
        <IonGrid>
          <IonRow>
            <IonCol size="6" offset="3" >
              <IonImg src="\assets\imagenes\logo.png"></IonImg>
            </IonCol>            
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default QueCayo;
