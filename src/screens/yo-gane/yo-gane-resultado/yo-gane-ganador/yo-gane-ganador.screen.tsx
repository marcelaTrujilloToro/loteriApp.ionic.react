import React from "react";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import "./yo-gane-ganador.style.css";
import Header from "../../../../components/header/header.comp";



const YoGaneGanadorScreen = () => {
  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid className=" la-content-grid">
            <IonRow className="la-yg-row-felicitaciones">
              <IonCol>
                <div className="la-img-felicitacion">
                  <img
                    src="/assets/img/consulta_premios/LoteriApp_consultapremios_ganador_274x130px.png"
                    alt=""
                  />
                </div>
              </IonCol>
            </IonRow>

            <IonRow className="la-yg-row-lista">
              <IonCol>
                <IonList>
                  <IonItem>Seco1</IonItem>
                  <IonItem>Seco2</IonItem>
                </IonList>
              </IonCol>
            </IonRow>

            <IonRow className="la-yg-row-slider la.img-slider">
              <IonSlides pager={true}>
                <IonSlide >
                    <img  src="/assets/img/consulta_premios/LoteriApp_consultapremios_slider_360x180px.jpg" alt="" />
                </IonSlide>
                <IonSlide>
                  <h1>Slide 2</h1>
                </IonSlide>
                <IonSlide>
                  <h1>Slide 3</h1>
                </IonSlide>
              </IonSlides>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default YoGaneGanadorScreen;
