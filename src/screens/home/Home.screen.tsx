import {
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import React from "react";
import "./Home.styles.css";
import Header from "../../components/header/header.comp";
import QueCayoScreen from "../que-cayo/que-cayo/que-cayo.screen";
import { useHistory } from "react-router";


const HomeScreen = () => {

  const history = useHistory();
  
  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-light">
          <IonGrid className="ion-no-padding la-content-grid">
            <IonRow className="la-imagen-row">
              <IonCol>
                <IonImg src="https://caracoltv.brightspotcdn.com/dims4/default/1399f0a/2147483647/strip/true/crop/678x381+0+25/resize/1200x675!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Ff2%2F38%2Fbb6cd590473395775fb5d25e88c3%2Floteria-del-valle-agosto-12-2020-2.jpg"></IonImg>
              </IonCol>
            </IonRow>

            <IonRow className="la-titulo-texto-row">
              <IonCol>

                <IonGrid className="la-contenedor-texto">
                  <IonRow className="ion-align-items-end">
                    <IonCol>
                      <p className="la-titulo-18 la-titulo-row">Título 1</p>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ion-align-items-center">
                    <IonCol>
                      <p className="la-texto-blue-14 la-texto-row">
                        Lorem ipsum dolor sit amet, consectetur adipis elit sed
                        malesuada aliquam pharetra.
                      </p>
                    </IonCol>
                  </IonRow>
                </IonGrid>

              </IonCol>
            </IonRow>

            <IonRow className="la-menu-opciones-row">
              <IonCol>
                <div className="la-opciones-contenedor">
                  <IonGrid className="ion-no-padding la-grid-opciones">
                    <IonRow className="la-contendor-row">
                      <IonCol>
                        <IonGrid className="la-contenedor-opcion">
                          <IonRow>
                            <IonCol>
                              <div className="cuadro-amarillo">
                                <IonImg
                                  className="la-img-opcion"
                                  src="/assets/imagenes/Loteriapp_opcion_que_cayo.png"
                                  onClick={() => {
                                    history.push({
                                      pathname: `/screens/que-cayo/que-cayo.screen`,
                                    })
                                  }}
                                ></IonImg>
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <IonText>¿Qué Cayó?</IonText>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <div className="la-linea-roja-opcion"></div>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonCol>

                      <IonCol>
                        <IonGrid className="la-contenedor-opcion">
                          <IonRow>
                            <IonCol>
                              <div className="cuadro-amarillo">
                                <IonImg
                                  className="la-img-opcion"
                                  src="/assets/imagenes/Loteriapp_opcion_yo_gane.png"
                                  onClick={() => {
                                    history.push({
                                      pathname: `/screens/yo-gane-principal/yo-gane.screen`,
                                    })
                                  }}
                                ></IonImg>
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <IonText>¿Yo Gané?</IonText>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <div className="la-linea-roja-opcion"></div>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonCol>
                    </IonRow>

                    <IonRow className="la-contendor-row">
                      <IonCol>
                        <IonGrid className="la-contenedor-opcion">
                          <IonRow>
                            <IonCol>
                              <div className="cuadro-amarillo">
                                <IonImg
                                  className="la-img-opcion"
                                  src="/assets/imagenes/Loteriapp_opcion_numeros_suertudos.png"
                                  onClick={() => {
                                    history.push({
                                      pathname: `/screens/numeros-suertudos/numeros-suertudos.screen`,
                                    })
                                  }}
                                ></IonImg>
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <IonText># Suertudos</IonText>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <div className="la-linea-roja-opcion"></div>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonCol>

                      <IonCol>
                        <IonGrid className="la-contenedor-opcion">
                          <IonRow>
                            <IonCol>
                              <div className="cuadro-amarillo">
                                <IonImg
                                  className="la-img-opcion"
                                  src="/assets/imagenes/Loteriapp_opcion_avisame.png"
                                  onClick={() => {
                                    history.push({
                                      pathname: `/screens/avisame-si-gano/avisame-si-gano.screen`,
                                    })
                                  }}
                                ></IonImg>
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <IonText>Avísame si gano</IonText>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <div className="la-linea-roja-opcion"></div>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
