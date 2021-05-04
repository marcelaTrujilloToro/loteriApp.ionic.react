import React, { useState } from "react";
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import "./que-cayo-resultado.style.css";
import Header from "../../../components/header/header.comp";
import { Seco } from "../../../models/que-cayo/Seco";
import ListaSecos from "../components/lista-secos/lista-secos.comp";
import { useResultados } from '../../../hooks/resultados/useResultados.hook'
import { useParams } from "react-router";
import Loading from "../../../shared/screen/loading/loading.screen";
import Error from "../../../shared/screen/error/error.screen";

export interface QueCayoResultadoScreenParams {
  codigoLoteria: string;
  numeroSorteo: string;
}

const QueCayoResultadoScreen: React.FC = () => {
  
  const { codigoLoteria, numeroSorteo } = useParams<QueCayoResultadoScreenParams>();

  const { isLoading, isError, data:resultado } = useResultados(codigoLoteria, numeroSorteo);

  

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
          <IonGrid className=" la-content-grid">
            <IonRow className="la-title-row">
              <IonCol className="la-col-titulo">
                <div className="la-titulo-22 ">Resultados de Sorteo</div>
                <div className="la-rectangulo-rojo "></div>
              </IonCol>
            </IonRow>

            <IonRow className="la-billete-row">
              <div style={{backgroundImage: `url(/assets/imagenes/Loteriapp-billete-completo.png)`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}} >
                <IonGrid  >
                  <IonRow>
                    <IonCol>
                      <img className="la-logo-ltr"
                        src={`/assets/imagenes/${codigoLoteria}-sin-fondo.png`}
                        alt=""
                      />
                    </IonCol>
                    <IonCol >
                      <IonGrid className="ion-no-padding">
                        <IonRow>
                          <IonCol className="la-fuente-billete-22">PREMIO MAYOR</IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol className="la-titulo-16">{resultado?.nombreDiaMes} {resultado?.diaMes} de {resultado?.nombreMes} - {resultado?.anio}</IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol className="la-col-num-sorteo">
                      <div className="la-balota-blanca"> <span className="la-cifra-sorteo">{resultado?.numeroMayor[0]}</span> </div>
                      <div className="la-balota-blanca"><span className="la-cifra-sorteo">{resultado?.numeroMayor[1]}</span></div>
                      <div className="la-balota-blanca"><span className="la-cifra-sorteo">{resultado?.numeroMayor[2]}</span></div>
                      <div className="la-balota-blanca"><span className="la-cifra-sorteo">{resultado?.numeroMayor[3]}</span></div>
                      <div className="la-balota-roja"><span className="la-serie-sorteo">{resultado?.serieMayor}</span></div>
                    </IonCol>
                  </IonRow>
                  
                  <IonRow>
                    <IonCol size="2" offset="4"> <span className="la-titulo-num-sorteo la-info-sorteo">Sorteo</span></IonCol>
                    <IonCol size="2" ><span className="la-num-sorteo la-info-sorteo">{numeroSorteo}</span></IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </IonRow>

            <IonRow className="la-lista-sorteo-row">
              <IonCol>
                <ListaSecos listaSecos={resultado?.secos}></ListaSecos>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default QueCayoResultadoScreen;
