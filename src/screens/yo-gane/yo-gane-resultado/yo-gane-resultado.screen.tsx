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

  const mensaje = "Alguno de los campos ingresados no es correcto"

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
               // <Error mensaje={mensaje} direccion={"screens/yo-gane-principal/yo-gane.screen"}></Error>
               <img
               className="la-imagen-perdio"
               src={resultados?.imagenPerdio}
             />
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
                    src="https://loteria-resultados.net/wp-content/uploads/2018/06/Loter%C3%ADa-del-Valle.png"
                    alt=""
                  />
                </IonSlide>
                <IonSlide>
                  <img
                    src="https://www.loteriadelvalle.com/sites/default/files/fotos/galeria_billete-sorteo-4577-ganador-mayor.jpg"
                    alt=""
                  />
                </IonSlide>
                <IonSlide>
                  <img
                    src="https://www.benevalle.gov.co/sites/default/files/multimedia/boletin_web_promocionaloct30.jpg"
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
