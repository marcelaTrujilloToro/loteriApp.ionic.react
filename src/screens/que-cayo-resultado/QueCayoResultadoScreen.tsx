import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./QueCayoResultado.style.css";
import {Premio} from "../../models/Premio"
import ListaPremios from "../../components/ListaPremios/ListaPremios"

const QueCayoResultadoScreen: React.FC = () => {


    const [arregloPremios, setArregloPremios] = useState<Array<Premio>>(
        [
            { 
                codigo: '1',
                descripcion: "PRIMER PREMIO SECO DE 100 MILL", 
                numero: '0936', 
                serie: '245', 
                valor: '1000', 
            },
            { 
                codigo: '2',
                descripcion: "PRIMER PREMIO SECO DE 50 MILL", 
                numero: '0936', 
                serie: '245', 
                valor: '1000', 
            },
            { 
                codigo: '3',
                descripcion: "SEGUNDO PREMIO SECO DE 50 MILL", 
                numero: '0936', 
                serie: '245', 
                valor: '1000', 
            },
            { 
                codigo: '4',
                descripcion: "PRIMER PREMIO SECO DE 20 MILL", 
                numero: '0936', 
                serie: '245', 
                valor: '1000', 
            },
            { 
                codigo: '5',
                descripcion: "SEGUNDO PREMIO SECO DE 20 MIL", 
                numero: '0936', 
                serie: '245', 
                valor: '1000', 
            }

        ]
    );


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
                <IonCol>
                    <img src="/assets/imagenes/Loteriapp-billete-completo.png"></img>
                </IonCol>
            </IonRow>

            <IonRow className="la-lista-sorteo-row" >
                <IonCol>
                    <ListaPremios listaPremios={arregloPremios} ></ListaPremios>
                </IonCol>
            </IonRow>

        </IonGrid>

        </div>
      </IonContent>
    </IonPage>
  );
};
export default QueCayoResultadoScreen;
