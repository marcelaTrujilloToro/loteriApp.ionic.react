import React, { useContext, useState } from "react";
import { Loteria } from "../../../models/loteria/Loteria";
import { useHistory } from "react-router";
import Header from "../../../components/header/header.comp";
import ListaLoterias from "../../../components/lista-loterias/lista-loterias.comp";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import { AvisameSiGanoContext } from "../../../providers/avisame-si-gano/avisameSiGano.context";

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

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid>
            <IonRow>
              <IonCol className="la-col-titulo">
                <IonTitle className="la-titulo-22">AVÍSAME SI GANO</IonTitle>
                <div className="la-content-rectangulo-rojo "></div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="la-fuente-subtitulo">
                <IonText>
                  
                </IonText>
              </IonCol>
            </IonRow>
           
            <ListaLoterias
              onLoteriaSeleccionadaFn={onLoteriaSeleccionadaFn}/>
            
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AvisameSiGanoScreen;
