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

  const abrirModal = () => {
    setShowModal(true);
};
  const cerrarModal = () => {
    setShowModal(false);
};

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente">
          <IonGrid>
            <IonRow>
              <IonCol className="la-col-titulo">
                <IonTitle className="la-titulo-22">¿Qué Cayó?</IonTitle>
                <div className="la-content-rectangulo-rojo "></div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="la-fuente-subtitulo">
                <IonText>
                  Lorem ipsum dolor sit amet, consectetur adipis elit sed
                  malesuada aliquam pharetra dignissim volutpat parturient.
                </IonText>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol >
                <div className="la-rectangulo-azul">
                  <img
                    className="la-logo"
                    src="/assets/img/splash/LoteriApp_loter-2_84x45.png"
                    onClick={() => abrirModal()}></img>
                  
                </div>

                <IonModal isOpen={showModal} cssClass="my-custom-class">
                  <Modal ocultarModal= {cerrarModal}/>
                </IonModal>

              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default QueCayoScreen;
