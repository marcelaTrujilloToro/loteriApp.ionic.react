import React, { useState } from "react";
import "./que-cayo.style.css";
import Header from "../../../components/header/header.comp";
import ListaLoterias from "../../../components/lista-loterias/lista-loterias.comp";
import { Loteria } from "../../../models/loteria/Loteria";
import ModalQueCayo from "../components/modal-que-cayo/modal-que-cayo.comp";

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
  const [verModal, setVerModal] = useState(false);

  const [loteriaSeleccionada, setLoteriaSeleccionada] = useState<Loteria>();

  const abrirModal = () => {
    setVerModal(true);
  };

  const cerrarModal = () => {
    setVerModal(false);
  };

  const onLoteriaSeleccionadaFn = (loteria: Loteria) => {
    setLoteriaSeleccionada(loteria);
    abrirModal();
  };

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        {loteriaSeleccionada !== undefined ? (
          <IonModal isOpen={verModal} cssClass="la-que-cayo-modal">
            <ModalQueCayo
              ocultarModal={cerrarModal}
              loteria={loteriaSeleccionada}
            />
          </IonModal>
        ) : null}

        <div className="la-content-gradiente-darker">
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

            <ListaLoterias onLoteriaSeleccionadaFn={onLoteriaSeleccionadaFn} />
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default QueCayoScreen;
