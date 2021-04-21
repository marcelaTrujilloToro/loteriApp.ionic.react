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
import Header from "../../components/Header/Header";

import "./Home.styles.css";

const HomeScreen = () => {
  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-fondo">
          <IonGrid className="ion-no-padding la-content-grid">
            <IonRow className="la-imagen-row">
              <IonCol>
                <IonImg src="/assets/img/home/LA_banner_1_360x160px.jpg"></IonImg>
              </IonCol>
            </IonRow>

            <IonRow className="la-titulo-texto-row">
              <IonCol>
                <div className="la-contenedor-texto">
                  <p className="la-titulo-row">Título 1</p>
                  <p className="la-subtitulo-row">
                    Lorem ipsum dolor sit amet, consectetur adipis elit sed
                    malesuada aliquam pharetra dignissim volutpat parturient
                    risus sem.
                  </p>
                </div>
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
