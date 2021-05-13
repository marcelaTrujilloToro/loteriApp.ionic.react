import React, { useState } from "react";
import "./numeros-suertudos-resultados.style.css";
import Header from "../../../components/header/header.comp";
import ListaSuertudos from "../components/lista-suertudos/lista-suertudos-comp";
import { useSuertudos } from "../../../hooks/suertudos/useSuertudos";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from "@ionic/react";
import { useParams } from "react-router";

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

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid className=" la-content-grid ion-no-padding">
            <IonRow className="la-titulo-ns-row">
              <IonCol className="la-col-titulo-suertudos">
                <IonTitle className="la-titulo-22 la-titulo-suertudos">
                  Los Números Suertudos
                </IonTitle>
                <div className="la-linea-roja"></div>
              </IonCol>
            </IonRow>

            

            <IonRow className="la-lista-premios-ns-row">
              <IonCol>
                {resultadoSuertudos ? (
                <ListaSuertudos listaSuertudos={resultadoSuertudos}></ListaSuertudos>

                ):( null)}
                </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NumerosSuertudosResultadosScreen;
