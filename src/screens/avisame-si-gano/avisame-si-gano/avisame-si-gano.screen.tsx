import React, { useState } from "react";
import { Loteria } from "../../../models/loteria/Loteria";
import { useHistory } from "react-router";
import Header from "../../../components/header/header.comp";
import ListaLoterias from "../../../components/lista-loterias/lista-loterias.comp";
import ModalNumerosSuertudos from "../../numeros-suertudos/components/modal-numeros-suertudos/modal-numeros-suertudos.comp";
import AvisameSiGanoDatosScren from "../avisame-si-gano-datos/avisame-si-gano-datos.screen";

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

const AvisameSiGanoScreen: React.FC = () => {
  
  
  const [loteriaSeleccionada, setLoteriaSeleccionada] = useState<Loteria>();

  const history = useHistory();

  const onLoteriaSeleccionadaFn = (loteria: Loteria) => {
    setLoteriaSeleccionada(loteria);
    history.push({
      pathname: `/screens/avisame-si-gano/avisame-si-gano-datos/avisame-si-gano-datos.screen`,
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

            <ListaLoterias onLoteriaSeleccionadaFn={onLoteriaSeleccionadaFn}/>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AvisameSiGanoScreen;
