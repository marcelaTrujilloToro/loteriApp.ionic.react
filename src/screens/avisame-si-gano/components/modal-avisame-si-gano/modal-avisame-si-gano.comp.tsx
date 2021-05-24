import React, { useState } from "react";
import "./modal-avisame.si.gano.style.css";
import { useAvisameSiGano } from "../../../../hooks/avisame-si-gano/useAvisamePrimerosParametros.hook";
import { useAvisameSegundoHook } from "../../../../hooks/avisame-si-gano/useAvisameSegundosParametros.hook";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
} from "@ionic/react";
import { AvisameSiGano } from "../../../../models/avisame-si-gano/AvisameSiGano";

interface ModalAvisameSiGanoProps {
  ocultarModalAvisame: () => void;
  abrirModalNotificacionGuardada: () => void;
  recuperarRespuesta: (avisame: AvisameSiGano) => void;
}

let opcion: number;

const ModalAvisameSiGano: React.FC<ModalAvisameSiGanoProps> = (props) => {
  const [numeroDigito1, setNumeroDigito1] = useState<number>();
  const [numeroDigito2, setNumeroDigito2] = useState<number>();
  const [numeroDigito3, setNumeroDigito3] = useState<number>();
  const [numeroDigito4, setNumeroDigito4] = useState<number>();
  
  const obtenerNumeroSuerte = () => {
    return `${numeroDigito1}${numeroDigito2}${numeroDigito3}${numeroDigito4}`;
  };
  
  const completarMes = (mesAValidar: number) => {
    if (mesAValidar < 10) {
      return `0${mesAValidar}`;
    }
    return mesAValidar;
  };
  
  const obtenerFechaActual = () => {
    let date: Date = new Date();
    const mes = date.getMonth() + 1;
    const mesReal = completarMes(mes);
    return `${date.getFullYear()}${mesReal}${date.getDate()}`;
  };


  const { data: avisame } = useAvisameSegundoHook(
    obtenerNumeroSuerte(), obtenerFechaActual(),  opcion
    
  );

  if (avisame) {
    props.recuperarRespuesta(avisame);
  }
  
  
  
  return (
    <IonContent>
      <div className="la-avisame-modal-content">
        <IonButton
          className="la-boton-cerrar"
          onClick={() => {
            props.ocultarModalAvisame();
          }}
          fill="clear"
        >
          X
        </IonButton>
        <IonGrid className="ion-no-padding la-content-grid">
          <IonRow className="la-row-avisame-texto">
            <IonCol>
              <p className="la-texto-darkblue-12 la-texto">
                Lorem ipsum dolor sit amet, consectetur adipis elit sed
                malesuada aliquam pharetra dignissim volutpat parturient.
              </p>
            </IonCol>
          </IonRow>

          <IonRow className="la-row-titulo-avisame">
            <IonCol>
              <p className="la-titulo-16">Tú número de la Suerte:</p>
            </IonCol>
          </IonRow>

          <IonRow className="la-row-digitos-numero-avisame">
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      type="number"
                      value={numeroDigito1}
                      onIonChange={(e: any) => {
                        setNumeroDigito1(e.detail.value);
                      }}
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="la-linea-roja-digito"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>

            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      type="number"
                      value={numeroDigito2}
                      onIonChange={(e: any) => {
                        setNumeroDigito2(e.detail.value);
                      }}
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="la-linea-roja-digito"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>

            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      type="number"
                      value={numeroDigito3}
                      onIonChange={(e: any) => {
                        setNumeroDigito3(e.detail.value);
                      }}
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="la-linea-roja-digito"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>

            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      type="text"
                      value={numeroDigito4}
                      onIonChange={(e: any) => {
                        setNumeroDigito4(e.detail.value);
                      }}
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="la-linea-roja-digito"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>

          <IonRow className="la-row-botones-avisame">
            <IonCol>
              <button
                className="la-boton la-boton-consultar"
                onClick={() => {
                  props.abrirModalNotificacionGuardada();
                }}
                >
                REGISTRAR
              </button>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <button
                className="la-boton la-boton-consultar"
                onClick={() => {
                  
                }}
              >
                ELIMINAR
              </button>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonContent>
  );
};
export default ModalAvisameSiGano;
