import React, { useState } from "react";
import Header from "../../../components/header/header.comp";
import "./numeros-suertudos-resultados.style.css";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from "@ionic/react";
import {
  chevronDown,
  chevronForward,
  home,
  informationCircle,
  navigate,
  star,
} from "ionicons/icons";

const NumerosSuertudosResultadosScreen = () => {
  const [pets, setPets] = useState("");
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

            <IonRow className="la-botones-ns-row">
              <IonCol>
                <IonSelect
                  selectedText="Aproximación"
                  interface="popover"
                  className="la-select-suertudos"
                >
                  <IonSelectOption value="">1</IonSelectOption>
                  <IonSelectOption value="">2</IonSelectOption>
                  <IonSelectOption value="">3</IonSelectOption>
                  <IonSelectOption value="">4</IonSelectOption>
                  <IonSelectOption value="">5</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect
                  selectedText="Cantidad Sorteos"
                  className="la-select-suertudos"
                  interface="popover"
                >
                  <IonSelectOption value="">1</IonSelectOption>
                  <IonSelectOption value="">2</IonSelectOption>
                  <IonSelectOption value="">3</IonSelectOption>
                  <IonSelectOption value="">4</IonSelectOption>
                  <IonSelectOption value="">5</IonSelectOption>
                </IonSelect>
              </IonCol>
            </IonRow>

            <IonRow className="la-lista-premios-ns-row">
              <IonCol>Lista premios</IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NumerosSuertudosResultadosScreen;
