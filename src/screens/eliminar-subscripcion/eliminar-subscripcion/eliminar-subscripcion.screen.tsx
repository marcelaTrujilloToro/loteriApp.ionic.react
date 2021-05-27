import React, { useContext, useState } from "react";

import Header from "../../../components/header/header.comp";
import ListaLoterias from "../../../components/lista-loterias/lista-loterias.comp";
import { Loteria } from "../../../models/loteria/Loteria";
import { useHistory } from "react-router";

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
import { AvisameSiGanoContext } from "../../../providers/avisame-si-gano/avisameSiGano.context";
import { useAvisameSiGano } from "../../../hooks/avisame-si-gano/useAvisameSiGano.hook";


const EliminarSubscripcionScreen: React.FC = () => {
  
  const history = useHistory();
  const {avisameSiGanoParams, setAvisameSiGanoParams} = useContext(AvisameSiGanoContext);


  const onLoteriaSeleccionadaFn = (loteriaSeleccionada: Loteria) => {
    setAvisameSiGanoParams({...avisameSiGanoParams, loteria: loteriaSeleccionada });
    const opcion = "0";
    history.push({
      pathname: `/screens/avisame-si-gano/avisame-si-gano-datos/avisame-si-gano-datos.screen/${opcion}`,
    });
  };

  const { isLoading, isError, data:resultado } = useAvisameSiGano(avisameSiGanoParams);

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
       
        <div className="la-content-gradiente-darker">
          <IonGrid>
            <IonRow>
              <IonCol className="la-col-titulo">
                <IonTitle className="la-titulo-22">Mis Subscripciones</IonTitle>
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

export default EliminarSubscripcionScreen;