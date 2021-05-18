import React, { useContext, useState } from "react";

import "./yo-gane.style.css";
import Header from "../../../components/header/header.comp";
import ListaLoterias from "../../../components/lista-loterias/lista-loterias.comp";
import { Loteria } from "../../../models/loteria/Loteria";
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
import { LoteriaContext } from "../../../providers/loteria/loteria.context";


const YoGaneScreen: React.FC = () => {
  
  const [verModal, setVerModal] = useState(false);

  const {loteriaSeleccionada, setLoteriaSeleccionada} = useContext(LoteriaContext);

  

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
          <IonModal isOpen={verModal} cssClass="la-modal-yo-gane">
            <ModalYoGane
              ocultarModal={cerrarModal}
            />
          </IonModal>
        ) : null}
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

            <ListaLoterias onLoteriaSeleccionadaFn={onLoteriaSeleccionadaFn}/>

          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default YoGaneScreen;
