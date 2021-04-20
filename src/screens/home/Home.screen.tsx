import {
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";

const HomeScreen = () => {
  return (
    <IonPage>
      <Header></Header>

      <IonContent className = "ion-no-padding">
        <div className="la-content-gradiente">
          
          <IonGrid className = "la-content-grid">

            <IonRow className = "la-grid-row1">
              <IonCol>
                f1c1
              </IonCol>
            </IonRow>

            <IonRow className = "la-grid-row2">
              <IonCol >
                f2c1
              </IonCol>
            </IonRow>

            <IonRow className = "la-grid-row3">
              <IonCol>
                f3c1
              </IonCol>           
            </IonRow> 

          </IonGrid>
        </div>
      </IonContent>

      {/* <IonContent>
        <div className="la-content-gradiente">
          <IonGrid>
            <IonRow>
              <IonCol>
                <div className="la-content-banner">
                  <IonImg
                    className="la-img-banner"
                    src="assets\img\home\LA_banner_1_360x160px.jpg"
                  ></IonImg>
                </div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className = "la-fuente-titulo">
                <h5>Título 1</h5>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol  className = "la-fuente-subtitulo">
                <p>Lorem ipsum dolor sit amet, consectetur adipis elit sed malesuada aliquam pharetra dignissim volutpat parturient risus sem vestibulum id neque egestas. Est euismod phasellus sagittis.</p>
              </IonCol>           
            </IonRow> 

          </IonGrid>
        </div>
      </IonContent> */}
    </IonPage>
  );
};

export default HomeScreen;
