import React, { useContext, useState } from "react";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
} from "@ionic/react";
import "./yo-gane-resultado.style.css";
import Header from "../../../components/header/header.comp";
import { ListaPremios } from "../components/lista-premios/lista-premios.comp";
import { useYoGane } from "../../../hooks/yo-gane/useYoGane.hook";
import { useParams } from "react-router";
import Loading from "../../../shared/screen/loading/loading.screen";
import Error from "../../../shared/screen/error/error.screen";
import { LoteriaContext } from "../../../providers/loteria/loteria.context";

export interface YoGaneResultadoScreenParams {
  codigoLoteria: string;
  numeroSorteo: string;
  numero: string;
  serie: string;
}

const YoGaneResultadoScreen: React.FC = () => {
  const { codigoLoteria, numeroSorteo, numero, serie } =
    useParams<YoGaneResultadoScreenParams>();

  const {
    isLoading,
    isError,
    data: resultados,
  } = useYoGane(codigoLoteria, numeroSorteo, numero, serie);

  if (isLoading) {
    return <Loading></Loading>;
  }

  // if (isError) {
  //   return <Error></Error>;
  // }

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid className=" la-content-grid ion-no-padding">
            <IonRow className="la-yg-row-imagen">
              <IonCol>
                <div>
                  {resultados?.premios ? (
                    <img
                      className="la-imagen-gano"
                      src={resultados.imagenGano}
                    />
                  ) : (
                    <IonText className="la-mensaje-perdio">
                      <p>{resultados?.mensaje}</p>
                    </IonText>
                  )}
                </div>
              </IonCol>
            </IonRow>

            <IonRow className="la-yg-row-datos">
              <IonCol>
                <IonGrid className="ion-no-padding">
                  <IonRow>
                    <IonCol>Sorteo</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>{numeroSorteo}</IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
              <IonCol>
                <IonGrid className="ion-no-padding">
                  <IonRow>
                    <IonCol>Numero</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>{numero}</IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
              <IonCol>
                <IonGrid className="ion-no-padding">
                  <IonRow>
                    <IonCol>Serie</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>{serie}</IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
            </IonRow>

            <IonRow className="la-yg-row-lista">
              {isError ? (
                <Error></Error>
              ) : (
                <IonCol>
                  {resultados?.premios ? (
                    <ListaPremios
                      listaPremios={resultados?.premios}
                    ></ListaPremios>
                  ) : (
                    <img
                      className="la-imagen-perdio"
                      src={resultados?.imagenPerdio}
                    />
                  )}
                </IonCol>
              )}
            </IonRow>

            <IonRow className="la-yg-row-slider">
              <IonSlides pager={true}>
                <IonSlide>
                  <img
                    src="https://loteriadeltolima.com/wp-content/uploads/2021/06/PROMOCIONAL-BICICLETA-Y-PATINETA-1.jpg"
                    alt=""
                  />
                </IonSlide>
                <IonSlide>
                  <img
                    src="https://loteriadeltolima.com/wp-content/uploads/2021/06/promocional_sorteo_3915.jpg"
                    alt=""
                  />
                </IonSlide>
                <IonSlide>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5A4on3kBVGLxG2-Na2oD-7Q4z1q4O61rLeQ&usqp=CAU"
                    alt=""
                  />
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
