import React, { useState } from 'react';
import { Loteria } from '../../../models/loteria/Loteria';
import './disponibilidad-numero.style.css';
import Header from '../../../components/header/header.comp';
import ListaLoterias from '../../../components/lista-loterias/lista-loterias.comp';
import  ModalDisponibilidadNumero from '../components/modal-disponibilidad-numero/modal-disponibilidad-numero.comp';

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

const DisponibilidadNumeroScreen: React.FC = () => {
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
          <IonModal isOpen={verModal} cssClass="la-disponibilidad-modal">
            < ModalDisponibilidadNumero
              ocultarModal={cerrarModal}
              loteria={loteriaSeleccionada}
            />
          </IonModal>
        ) : null}

        <div className="la-content-gradiente-darker">
          <IonGrid>
            <IonRow>
              <IonCol className="la-col-titulo">
                <IonTitle className="la-titulo-22">DISPONIBILIDAD DE NÚMERO</IonTitle>
                <div className="la-content-rectangulo-rojo "></div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="la-fuente-subtitulo">
                <IonText>
                  
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
export default 	DisponibilidadNumeroScreen;