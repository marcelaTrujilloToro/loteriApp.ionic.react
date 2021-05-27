import React from "react";

import "./eliminar-subscripcion.style.css";
import Header from "../../../components/header/header.comp";
import { useParams } from "react-router";
import { useEliminarSubscripcion } from "../../../hooks/eliminar-susbcripcion/useEliminarSubscripcion.hook";
import  ListaSubscripciones from "../components/lista-subscripciones/lista-subscripciones.comp";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";

export interface EliminarSubscripcionResultadoScreenParams {
  codigoLoteria: string;
  celular: string;
  email: string;
}

const EliminarSubscripcionResultadoScreen = () => {
  const { codigoLoteria, celular, email } =
    useParams<EliminarSubscripcionResultadoScreenParams>();

  const { data: respuesta } = useEliminarSubscripcion(
    codigoLoteria,
    celular,
    email
  );

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding ">
        <div className="la-content-gradiente-darker la-content-height ">
          <IonGrid  className=" la-content-grid ion-no-padding">

            <IonRow className="la-subscripcion-titulo-row">
              <IonCol className=" la-col-titulo-subscripcion ">
              <IonTitle className="la-titulo-22 la-titulo-subscripcion">
                  Mis números subscritos
                </IonTitle>
                <div className="la-content-rectangulo-rojo la-linea-roja-ns"></div>
              </IonCol>
            </IonRow>

            <IonRow className="">
              <IonCol>
                <img
                  className="la-logo-loteria"
                  src={`/assets/imagenes/${codigoLoteria}-sin-fondo.png`}
                  alt=""
                />
              </IonCol>
            </IonRow>

            <IonRow className="la-subscripcion-subtitulos-row">
              <IonCol>
                <p>Número</p>
              </IonCol>
              <IonCol>
                <p>Sorteos pendientes</p>
              </IonCol>

              <IonCol>
                <p></p>
              </IonCol>
             
            </IonRow>

            <IonRow className="la-subscripcion-lista-row">
                <IonCol>
                    < ListaSubscripciones listaSubscripciones={respuesta}
                    ></ListaSubscripciones>
                </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EliminarSubscripcionResultadoScreen;
