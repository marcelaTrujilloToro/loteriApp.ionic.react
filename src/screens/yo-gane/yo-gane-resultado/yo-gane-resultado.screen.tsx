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
  IonText,
} from "@ionic/react";
import "./yo-gane-resultado.style.css";
import Header from "../../../components/header/header.comp";
import { ListaPremios } from "../components/lista-premios/lista-premios.comp";
import { useYoGane } from "../../../hooks/yo-gane/useYoGane.hook";
import { Premio } from "../../../models/yo-gane/Premio";
import { useParams } from "react-router";
import YoGaneScreen from "../yo-gane/yo-gane.screen";
import Loading from "../../../shared/screen/loading/loading.screen";
import Error from "../../../shared/screen/error/error.screen";

export interface YoGaneResultadoScreenParams {
  codigoLoteria: string;
  numeroSorteo: string;
  numero: string;
  serie: string;
}

const YoGaneResultadoScreen: React.FC = () => {
  
  const {
    codigoLoteria,
    numeroSorteo,
    numero,
    serie,
  } = useParams<YoGaneResultadoScreenParams>();

  const { isLoading, isError, data: resultados } = useYoGane(
    codigoLoteria,
    numeroSorteo,
    numero,
    serie
  );
  

  if (isLoading) {
    return (
      <Loading></Loading>
    );
  }


  if (isError) {

    return (
      <Error></Error>
    );
  }

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid className=" la-content-grid ion-no-padding">
            <IonRow className="la-yg-row-imagen">
              <IonCol>
                <div>
                  {resultados?.premios 
                    ? (
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

            <IonRow className="la-yg-row-lista">
              <IonCol>
                {resultados?.premios
                   ? (
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
            </IonRow>

            <IonRow className="la-yg-row-slider">
              <IonSlides pager={true}>
                <IonSlide >
                  <img
                    
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHxk_yxlr0r_MHzI2NHw9V719TrDmsztZaw&usqp=CAU"
                    alt=""
                    />
                </IonSlide>
                <IonSlide>
                  <img
                    src="https://github.com/marcelaTrujilloToro/loteriApp.ionic.react/blob/main/public/assets/img/splash/LoteriApp_azen_96x30.png?raw=true"
                    alt=""
                    />
                </IonSlide>
                <IonSlide >
                  <img
                    
                    src="https://github.com/marcelaTrujilloToro/loteriApp.ionic.react/blob/main/public/assets/img/consulta_premios/LoteriApp_consultapremios_slider_360x180px.jpg?raw=true"
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
