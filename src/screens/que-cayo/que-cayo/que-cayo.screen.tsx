import React, { useState } from "react";
import "./que-cayo.style.css";
import Header from "../../../components/header/header.comp";
import ModalQueCayo from "../components/modal-que-cayo/modal-que-cayo.comp";
import { useLoterias } from '../../../hooks/loteria/useLoterias.hook';
import Loading from '../../../shared/screen/loading/loading.screen';

import Error from '../../../shared/screen/error/error.screen'
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

const QueCayoScreen: React.FC = () => {
  const { isLoading, isError, data: loteriasList } = useLoterias();
  
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };
  const cerrarModal = () => {
    setShowModal(false);
  };

  if (isLoading) {
    return (
      <Loading></Loading>
    );
  }


  if (isError) {

    return (
      <Error></Error>
    );
  }

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid>
            <IonRow>
              <IonCol className="la-col-titulo-q-c">
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
              {loteriasList?.map((loteria) => (
                <IonCol key={loteria.codigo}>
                  <div className="la-rectangulo-azul">
                    <img
                      className="la-logo"
                      src={`/assets/img/loterias/${loteria.codigo}.png`}
                      onClick={() => abrirModal()}
                    ></img>
                  </div>

                  <IonModal isOpen={showModal} cssClass="la-que-cayo-modal">
                    <ModalQueCayo ocultarModal={cerrarModal} loteria={loteria}/>
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
export default QueCayoScreen;
