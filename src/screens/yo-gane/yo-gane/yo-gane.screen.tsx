import React, { useState } from "react";

import "./yo-gane.style.css";
import Header from "../../../components/header/header.comp";
import { useLoterias } from "../../../hooks/loteria/useLoterias.hook";
import Loading from "../../../shared/screen/loading/loading.screen";
import Error from "../../../shared/screen/error/error.screen";
import ModalYoGane from "../components/modal-yo-gane/modal-yo-gane.comp";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";


const YoGaneScreen: React.FC = () => {
  const { isLoading, isError, data: loteriasList } = useLoterias();

  const [verModal, setVerModal] = useState(false);

  const abrirModal = () => {
    setVerModal(true);
  };
  const cerrarModal = () => {
    setVerModal(false);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <Error></Error>;
  }

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid>
            <IonRow>
              <IonCol className="la-col-titulo">
                <IonTitle className="la-titulo-22">¿Yo Gané?</IonTitle>
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
              {loteriasList?.map((loteria) => (
                <IonCol key={loteria.codigo}>
                  <div className="la-rectangulo-azul">
                    <img
                      className="la-logo"
                      src={`/assets/img/loterias/${loteria.codigo}.png`}
                      onClick={() => abrirModal()}
                    ></img>
                  </div>

                  <IonModal isOpen={verModal} cssClass="la-modal-yo-gane">
                    <ModalYoGane
                      ocultarModal={cerrarModal}
                      loteria={loteria}
                    />
                  </IonModal>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default YoGaneScreen;
