import React from "react";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import "./yo-gane-resultado.style.css";
import Header from "../../../components/header/header.comp";
import {ListaPremios} from "../components/lista-premios/lista-premios.comp";
import { useYoGane } from "../../../hooks/yo-gane/useYoGane.hook";
import { Premio } from "../../../models/yo-gane/Premio";
import { useParams } from "react-router";
import YoGaneScreen from "../yo-gane/yo-gane.screen";

export interface YoGaneResultadoScreenParams {
  codigoLoteria: string;
  numeroSorteo: string;
  numero: string;
  serie: string;
}

const YoGaneResultadoScreen = () => {

  const {codigoLoteria, numeroSorteo, numero, serie} = useParams<YoGaneResultadoScreenParams>();

  const {data: resultados} = useYoGane(codigoLoteria, numeroSorteo, numero, serie);

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid className=" la-content-grid">
            <IonRow className="la-yg-row-felicitaciones">
              <IonCol>
                <div className="la-img-felicitacion">
                  <img
                    src="/assets/img/consulta_premios/LoteriApp_consultapremios_ganador_274x130px.png"
                    alt=""
                  />
                </div>
              </IonCol>
            </IonRow>

            <IonRow className="la-yg-row-lista">
              <IonCol>
                <ListaPremios listaPremios={resultados?.premios}  ></ListaPremios>
              </IonCol>
            </IonRow>

            <IonRow className="la-yg-row-slider la.img-slider">
              <IonSlides pager={true}>
                <IonSlide >
                    <img  src="/assets/img/consulta_premios/LoteriApp_consultapremios_slider_360x180px.jpg" alt="" />
                </IonSlide>
                <IonSlide>
                    <img  src="/assets/img/splash/LoteriApp_azen_96x30.png" alt="" />
                </IonSlide>
                <IonSlide>
                    <img  src="/assets/img/consulta_premios/LoteriApp_consultapremios_slider_360x180px.jpg" alt="" />
                </IonSlide>
              </IonSlides>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default YoGaneResultadoScreen;
