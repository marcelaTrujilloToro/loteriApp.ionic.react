import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "../que-cayo/QueCayo.styles.css";
import Modal from "../../components/Modal/Modal";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";

const QueCayoScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente">
          <IonGrid>
            <IonRow>
              <IonCol className="la-fuente-titulo">¿Qué Cayó?</IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="7" offset="5">
                <div className="la-content-rectangulo-rojo "></div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="la-fuente-subtitulo">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis elit sed
                  malesuada aliquam pharetra dignissim volutpat parturient.
                </p>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="6" offset="4">
                <div className="la-rectangulo-azul">
                  <img
                    className="la-logo"
                    src="/assets/img/splash/LoteriApp_loter-2_84x45.png"
                  />
                </div>
                <IonModal isOpen={showModal} cssClass="my-custom-class">
                  <Modal />
                  <IonButton onClick={() => setShowModal(false)} fill="clear">
                    X
                  </IonButton>
                </IonModal>
                <IonButton onClick={() => setShowModal(true)}>
                  Show Modal
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default QueCayoScreen;
