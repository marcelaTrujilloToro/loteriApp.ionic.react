import React from "react";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";

import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import "./yo-gane-principal.style.css";
import Header from "../../../components/header/header.comp";
import { useHistory } from "react-router";

const YoGanePrincipalScreen: React.FC = () => {
  const history = useHistory();

  const iniciarScanner = async () => {
    
    const data = await BarcodeScanner.scan({
      showTorchButton: true, 
      prompt: "Acerque la línea roja al código de barras del billete",
      formats: "CODE_128",
    });

    if (data.cancelled) {
      history.replace({
        pathname: `/screens/yo-gane/yo-gane.screen`,
      });
    }

    // alert(JSON.stringify(data.text));
    return data.text;
  };


  const obtenerDatosCodigoBarras = (
    codigo: string,
    readingOrder: number,
    leerXFracciones: boolean
  ) => {
    return {
      codigo: leerXFracciones ? codigo : codigo.substr(0, codigo.length - 2),
      sorteo: codigo.substr(7, 4),
      numero: codigo.substr(11, 4),
      serie: codigo.substr(15, 3),
      readingOrder,
    };
  };

  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding">
        <div className="la-content-gradiente-darker">
          <IonGrid className="la-content-grid">
            <IonRow className="la-row-titulo">
              <IonCol className="la-col-titulo-yo-gane">
                <IonTitle className="la-titulo-22 la-yo-gane">
                  ¿Yo Gané?
                </IonTitle>
                <div className="la-linea-roja"></div>
              </IonCol>
            </IonRow>

            <IonRow className="la-row-img-scanner">
              <IonCol>
                <img
                  src="/assets/img/consulta_premios/LoteriApp_consultapremios_scan_245x140px.jpg"
                  alt=""
                />
              </IonCol>
            </IonRow>

            <IonRow className="la-row-texto">
              <IonCol className="la-texto-yo-gane">
                <IonText>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis elit sed
                    malesuada aliquam pharetra dignissim volutpat parturient.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis elit sed
                    malesuada aliquam.
                  </p>
                </IonText>
              </IonCol>
            </IonRow>

            <IonRow className="la-row-botones">
              <IonCol>
                <div className="la-div-botones">
                
                  <button
                    className="la-boton la-boton-camara"
                    onClick={async () => {
                      const codigoBarras = obtenerDatosCodigoBarras(
                        await iniciarScanner(),
                        1,
                        true
                      );
                      history.push({
                        pathname: `/screens/yo-gane/yo-gane-resultado/yo-gane-resultado.screen/${codigoBarras.codigo}/${codigoBarras.sorteo}/${codigoBarras.numero}/${codigoBarras.serie}`,
                      });
                    }}
                  >
                    CÁMARA
                  </button>

                  
                  <button
                    className="la-boton la-boton-datos"
                    onClick={() => {
                      history.push({
                        pathname: `/screens/yo-gane/yo-gane.screen`,
                      });
                    }}
                  >
                    INGRESAR DATOS
                  </button>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent> 
    </IonPage>
  );
};

export default YoGanePrincipalScreen;
