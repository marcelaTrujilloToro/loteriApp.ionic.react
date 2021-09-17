import React, { useContext, useState } from "react";
import { Loteria } from "../../../models/loteria/Loteria";
import { useHistory } from "react-router";
import Header from "../../../components/header/header.comp";
import ListaLoterias from "../../../components/lista-loterias/lista-loterias.comp";

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
import Loading from "../../../shared/screen/loading/loading.screen";
import Error from "../../../shared/screen/error/error.screen";

const AvisameSiGanoScreen: React.FC = () => {
  const { avisameSiGanoParams, setAvisameSiGanoParams } =
    useContext(AvisameSiGanoContext);

  const history = useHistory();

  const onLoteriaSeleccionadaFn = (loteriaSeleccionada: Loteria) => {
    setAvisameSiGanoParams({
      ...avisameSiGanoParams,
      loteria: loteriaSeleccionada,
    });
    const opcion = "1";
    history.push({
      pathname: `/screens/solicitud-codigo/solicitud-codigo/solicitud-codigo.screen/${opcion}`,
    });
  };

  const {
    isLoading,
    isError,
    data: resultado,
  } = useAvisameSiGano(avisameSiGanoParams);

  if (isLoading) {
    return <Loading></Loading>;
  }
  const mensaje = "";

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid>
            <IonRow>
              <IonCol className="la-col-titulo">
                <IonTitle className="la-titulo-22">Avísame sí Gano</IonTitle>
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
            {isError ? (
              <Error mensaje={mensaje}></Error>
            ) : (
              <ListaLoterias
                onLoteriaSeleccionadaFn={onLoteriaSeleccionadaFn}
              />
            )}
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AvisameSiGanoScreen;
