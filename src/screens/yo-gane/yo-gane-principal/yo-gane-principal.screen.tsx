import React from "react";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";

import "./yo-gane-principal.style.css";
import Header from "../../../components/header/header.comp";
import { useHistory } from "react-router";

const YoGanePrincipalScreen: React.FC = () => {

  const history = useHistory();

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid className="la-content-grid">
            <IonRow className="la-row-titulo">
              <IonCol className="la-col-titulo-yo-gane">
                <IonTitle className="la-titulo-22 la-yo-gane">
                  ¿Yo Gané?
                </IonTitle>
                <div className="la-linea-roja"></div>
              </IonCol>
            </IonRow>

            <IonRow className="la-row-img-scanner">
              <IonCol>
                <img
                  src="/assets/img/consulta_premios/LoteriApp_consultapremios_scan_245x140px.jpg"
                  alt=""
                />
              </IonCol>
            </IonRow>

            <IonRow className="la-row-texto">
              <IonCol className="la-texto-yo-gane">
                <IonText>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis elit sed
                    malesuada aliquam pharetra dignissim volutpat parturient.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis elit sed
                    malesuada aliquam.
                  </p>
                </IonText>
              </IonCol>
            </IonRow>

            <IonRow className="la-row-botones">
              <IonCol>
              <div className="la-div-botones">
                <button className="la-boton la-boton-camara">CÁMARA</button>
                <button className="la-boton la-boton-datos"
                onClick={() => {
                  history.push({
                    pathname: `/screens/yo-gane/yo-gane.screen`,
                  })
                }}              
                >
                  INGRESAR DATOS
                </button>
              </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default YoGanePrincipalScreen;
