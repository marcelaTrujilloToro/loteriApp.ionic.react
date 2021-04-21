import React from "react";
import Header from "../../components/Header/Header";
import "../que-cayo/QueCayo.styles.css";

import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";

const QueCayo = () => {
  return (
    <IonPage>
      <Header></Header>

      <IonContent>
        <div className="la-content-gradiente">
          <IonGrid>
            <IonRow>
              <IonCol className = "la-fuente-titulo">
                ¿Qué Cayó?
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size = "7" offset="5">
                <div className = "la-content-rectangulo-rojo "></div>
              </IonCol>
              
            </IonRow>

            <IonRow>
              <IonCol  className = "la-fuente-subtitulo">
                <p>Lorem ipsum dolor sit amet, consectetur adipis elit sed malesuada aliquam pharetra dignissim volutpat parturient.</p>
              </IonCol>
             
            </IonRow>

            <IonRow>
              <IonCol size = "6" offset="4">
                <div className = "la-content-rectangulo-azul">
                  <img  className="la-content-logo-lotvalle" src="\assets\img\splash\LoteriApp_loter-2_84x45.png"/>
                </div>
              </IonCol>
             
            </IonRow>


            
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default QueCayo;
