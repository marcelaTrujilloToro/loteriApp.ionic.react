import React, { useContext } from "react";
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import "./que-cayo-resultado.style.css";
import Header from "../../../components/header/header.comp";
import ListaSecos from "../components/lista-secos/lista-secos.comp";
import { useResultados } from '../../../hooks/resultados/useResultados.hook'
import { useParams } from "react-router";
import Loading from "../../../shared/screen/loading/loading.screen";
import Error from "../../../shared/screen/error/error.screen";
import { LoteriaContext } from "../../../providers/loteria/loteria.context";

export interface QueCayoResultadoScreenParams {
  numeroSorteo: string;
}


const QueCayoResultadoScreen: React.FC = () => {
  
  const {loteriaSeleccionada} = useContext(LoteriaContext);

  
  const { numeroSorteo } = useParams<QueCayoResultadoScreenParams>();

  const { isLoading, isError, data:resultado } = useResultados(loteriaSeleccionada.codigo, numeroSorteo);

  

  if (isLoading) {
    return (
      <Loading></Loading>
    );
  }


  // if (isError) {

  //   return (
  //     <Error></Error>
  //   );
  // }
  const mensaje = "El numero de sorteo no existe en la base de datos"
  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker la-content-height">
          <IonGrid className=" la-content-grid">
            
            <IonRow className="la-titulo-que-cayo-row">
              <IonCol className=" la-col-titulo-que-cayo">
                <div className="la-titulo-22 la-titulo-que-cayo">Resultados de Sorteo</div>
                <div className="la-content-rectangulo-rojo la-linea-roja-que-cayo"></div>
              </IonCol>
            </IonRow>

            <IonRow className="la-billete-row">
              <div className="la-billete-amarillo" >
                <IonGrid >
                  <IonRow>
                    <IonCol>
                      <img className="la-logo-ltr"
                        src={`/assets/imagenes/${loteriaSeleccionada.codigo}-sin-fondo.png`}
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
                {
                  isError
                  ?
                  <Error mensaje={mensaje} direccion={"screens/que-cayo/que-cayo.screen"}></Error>
                  :
                  <ListaSecos listaSecos={resultado?.secos}></ListaSecos>

                }
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default QueCayoResultadoScreen;
