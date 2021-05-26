import React, { useContext, useState } from "react";
import "./modal-avisame.si.gano.style.css";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
} from "@ionic/react";
import { AvisameSiGano } from "../../../../models/avisame-si-gano/AvisameSiGano";
import { AvisameSiGanoContext } from "../../../../providers/avisame-si-gano/avisameSiGano.context";
import { useAvisameSiGano } from "../../../../hooks/avisame-si-gano/useAvisameSiGano.hook";

interface ModalAvisameSiGanoProps {
  ocultarModalAvisame: () => void;
  abrirModalNotificacion: () => void;
}


const ModalAvisameSiGano: React.FC<ModalAvisameSiGanoProps> = (props) => {

  const [numeroDigito1, setNumeroDigito1] = useState<number>();
  const [numeroDigito2, setNumeroDigito2] = useState<number>();
  const [numeroDigito3, setNumeroDigito3] = useState<number>();
  const [numeroDigito4, setNumeroDigito4] = useState<number>();

  const {avisameSiGanoParams, setAvisameSiGanoParams} = useContext(AvisameSiGanoContext);

  const { data:respuesta } = useAvisameSiGano(avisameSiGanoParams);
  
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
  
  console.log(avisameSiGanoParams);
  
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
                      type="tel"
                      value={numeroDigito1}
                      maxlength={1}
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
                      type="tel"
                      value={numeroDigito2}
                      maxlength={1}
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
                      type="tel"
                      value={numeroDigito3}
                      maxlength={1}
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
                      type="tel"
                      value={numeroDigito4}
                      maxlength={1}
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

          <IonRow>
            <IonCol>
              <p className="la-titulo-16">Cantidad de Sorteos</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      type="tel"
                      maxlength={2}
                      value={avisameSiGanoParams.cantidadSorteos}
                      onIonChange={(e: any) => {
                        setAvisameSiGanoParams({...avisameSiGanoParams, cantidadSorteos: e.detail.value});
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
                  setAvisameSiGanoParams({...avisameSiGanoParams, operacion:1, numero: obtenerNumeroSuerte(), fecha: parseInt(obtenerFechaActual()) })
                    props.ocultarModalAvisame();
                    props.abrirModalNotificacion();
                }}
                >
                REGISTRAR
              </button>
            </IonCol>

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
