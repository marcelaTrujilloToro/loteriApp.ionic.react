import React, { useState } from "react";
import "./numeros-suertudos-resultados.style.css";
import Header from "../../../components/header/header.comp";
import ListaSuertudos from "../components/lista-suertudos/lista-suertudos-comp";
import { useSuertudos } from "../../../hooks/suertudos/useSuertudos.hook";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import { useParams } from "react-router";
import Loading from "../../../shared/screen/loading/loading.screen";
import Error from "../../../shared/screen/error/error.screen";

export interface SuertudosResultadosScreenParams {
  codigoLoteria: string;
  primeraCifra: string;
  segundaCifra: string;
  terceraCifra: string;
  ultimaCifra: string;
  cantidadSorteos: string;
}

const NumerosSuertudosResultadosScreen: React.FC = () => {
  const {
    codigoLoteria,
    primeraCifra,
    segundaCifra,
    terceraCifra,
    ultimaCifra,
    cantidadSorteos,
  } = useParams<SuertudosResultadosScreenParams>();

  const {
    isLoading,
    isError,
    data: resultadoSuertudos,
  } = useSuertudos(
    codigoLoteria,
    primeraCifra,
    segundaCifra,
    terceraCifra,
    ultimaCifra,
    cantidadSorteos
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <Error></Error>;
  }

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding ">
        <div className="la-content-gradiente-darker la-content-height">
          <IonGrid className=" la-content-grid ion-no-padding">
            
            <IonRow className="la-titulo-ns-row">
              <IonCol className=" la-col-titulo-suertudos">
                <IonTitle className="la-titulo-22 la-titulo-suertudos">
                  Los Números Suertudos
                </IonTitle>
                <div className="la-content-rectangulo-rojo la-linea-roja-ns"></div>
              </IonCol>
            </IonRow>

            <IonRow className="la-logo-loteria-seleccionada-row">
              <IonCol>
                <img
                  className="la-logo-loteria"
                  src={`/assets/imagenes/${codigoLoteria}-sin-fondo.png`}
                  alt=""
                />
              </IonCol>
            </IonRow>

            <IonRow className="la-subtitulo-suertudos-row">
              <IonCol>
                <p>
                  Suertudos de los últimos <span>{cantidadSorteos}</span> sorteos
                </p>
              </IonCol>
            </IonRow>

            <IonRow className="la-items-ns-row">
              <IonCol>
                <p>Número</p>
              </IonCol>
              <IonCol>
                <p>Veces caído</p>
              </IonCol>
              <IonCol>
                <p>Premio</p>
              </IonCol>
            </IonRow>

            <IonRow className="la-lista-premios-ns-row">
              <IonCol>
                <ListaSuertudos
                  listaSuertudos={resultadoSuertudos}
                ></ListaSuertudos>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NumerosSuertudosResultadosScreen;
