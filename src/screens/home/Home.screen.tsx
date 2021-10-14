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
import { useLogin } from "../../hooks/login/login.hook";
import queryClient from "../../react-query-client";

const HomeScreen = () => {
  const { data } = useLogin(
    "awKfzUMihDq2rODcjNUbuQ==",
    "awKfzUMihDq2rODcjNUbuQ=="
  );
  const history = useHistory();
  console.log(JSON.stringify(data));

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-light">
          <IonGrid className="ion-no-padding la-content-grid">
            <IonRow className="la-imagen-row">
              <IonCol>
                <IonImg src="https://www.benevalle.gov.co/sites/default/files/multimedia/boletin_web_promocionaloct30.jpg" />
              </IonCol>
            </IonRow>

            {/* <IonRow className="la-titulo-texto-row">
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
            </IonRow> */}

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
                                    });
                                  }}
                                ></IonImg>
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <IonText className="la-titulo-opcion">
                                ¿Qué Cayó?
                              </IonText>
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
                                    });
                                  }}
                                ></IonImg>
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <IonText className="la-titulo-opcion">
                                ¿Yo Gané?
                              </IonText>
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
                                    });
                                  }}
                                ></IonImg>
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <IonText className="la-titulo-opcion">
                                # Suertudos
                              </IonText>
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
                                  src="/assets/imagenes/Loteriapp_opcion_que_cayo.png"
                                  onClick={() => {
                                    history.push({
                                      pathname: `/screens/que-cayo/que-cayo.screen`,
                                    });
                                  }}
                                ></IonImg>
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <IonText className="la-titulo-opcion">
                                Disponibilidad #
                              </IonText>
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
                                  src="/assets/imagenes/Loteriapp_opcion_avisame.png"
                                  onClick={() => {
                                    history.push({
                                      pathname: `/screens/avisame-si-gano/avisame-si-gano.screen`,
                                    });
                                  }}
                                ></IonImg>
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>
                              <IonText className="la-titulo-opcion">
                                Avísame si gano
                              </IonText>
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
