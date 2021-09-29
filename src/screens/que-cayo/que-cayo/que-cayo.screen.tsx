import React, { useContext, useState } from "react";
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
import { LoteriaContext } from "../../../providers/loteria/loteria.context";

const QueCayoScreen: React.FC = () => {

  const {loteriaSeleccionada, setLoteriaSeleccionada} = useContext(LoteriaContext);
  
  const [verModal, setVerModal] = useState(false);


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
            />
          </IonModal>
        ) : null}

        <div className="la-content-gradiente-darker">
          <IonGrid>
            <IonRow>
              <IonCol className="la-col-titulo">
                <IonTitle className="la-titulo-22">¿QUÉ CAYÓ?</IonTitle>
                <div className="la-content-rectangulo-rojo "></div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="la-fuente-subtitulo">
                <IonText>
                 Conoce los números ganadores de los sorteos realizados todos los miercoles.
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
