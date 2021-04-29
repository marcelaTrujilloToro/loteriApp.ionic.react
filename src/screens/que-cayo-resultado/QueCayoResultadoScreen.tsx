import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Premio } from "../../models/Premio";
import ListaPremios from "../../components/ListaPremios/ListaPremios";
import "./QueCayoResultado.style.css";

const QueCayoResultadoScreen: React.FC = () => {
  const [arregloPremios, setArregloPremios] = useState<Array<Premio>>([
    {
      codigo: "1",
      descripcion: "PRIMER PREMIO SECO DE 100 MILL",
      numero: "0936",
      serie: "245",
      valor: "1000",
    },
    {
      codigo: "2",
      descripcion: "PRIMER PREMIO SECO DE 50 MILL",
      numero: "0936",
      serie: "245",
      valor: "1000",
    },
    {
      codigo: "3",
      descripcion: "SEGUNDO PREMIO SECO DE 50 MILL",
      numero: "0936",
      serie: "245",
      valor: "1000",
    },
    {
      codigo: "4",
      descripcion: "PRIMER PREMIO SECO DE 20 MILL",
      numero: "0936",
      serie: "245",
      valor: "1000",
    },
    {
      codigo: "5",
      descripcion: "SEGUNDO PREMIO SECO DE 20 MILL",
      numero: "0936",
      serie: "245",
      valor: "1000",
    },
  ]);

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
                {/* <img className="la" src="/assets/imagenes/Loteriapp-billete-completo.png"></img> */}
                <IonGrid  >
                  <IonRow>
                    <IonCol>
                      <img className="la-logo-ltr"
                        src="/assets/imagenes/Loteriapp_logo_valle.png"
                        alt=""
                      />
                    </IonCol>
                    <IonCol >
                      <IonGrid className="ion-no-padding">
                        <IonRow>
                          <IonCol className="la-fuente-billete-22">PREMIO MAYOR</IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol className="la-titulo-16">Miercoles 10 de Marzo - 2021</IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol className="la-col-num-sorteo">
                      <div className="la-circulo-blanco"> <span className="la-cifra-sorteo">9</span> </div>
                      <div className="la-circulo-blanco"><span className="la-cifra-sorteo">3</span></div>
                      <div className="la-circulo-blanco"><span className="la-cifra-sorteo">9</span></div>
                      <div className="la-circulo-blanco"><span className="la-cifra-sorteo">7</span></div>
                      <div className="la-circulo-rojo"><span className="la-serie-sorteo">183</span></div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="2" offset="4"> <span className="la-titulo-num-sorteo la-info-sorteo">Sorteo</span></IonCol>
                    <IonCol size="2" ><span className="la-num-sorteo la-info-sorteo">4685</span></IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </IonRow>

            <IonRow className="la-lista-sorteo-row">
              <IonCol>
                <ListaPremios listaPremios={arregloPremios}></ListaPremios>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default QueCayoResultadoScreen;
