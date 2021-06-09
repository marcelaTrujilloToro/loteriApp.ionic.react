import React, { useContext, useState } from "react";

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

  const [numeroSuerteArr, setNumeroSuerteArr] = useState([
    "",
    "",
    "",
    ""
  ]);

  let inputNumeroSuerteArr = Array<any>(numeroSuerteArr.length);

  const {avisameSiGanoParams, setAvisameSiGanoParams} = useContext(AvisameSiGanoContext);

  const { data:respuesta } = useAvisameSiGano(avisameSiGanoParams);
  

  const cambiarFocoDigito = (digitoEvt: any, index: any) => {
    const digito = digitoEvt.target.value;

    setNumeroSuerteArr(
     numeroSuerteArr.map((valor: any, i: any) => (i !== index ? valor : digito))
    );

    if (isNaN(parseInt(digito))) {
      return;
    }

    if (index <numeroSuerteArr.length - 1) {
      inputNumeroSuerteArr[index + 1].focus();
    }
  };

  const obtenerNumeroSuerte = () => {
    return `${numeroSuerteArr[0]}${numeroSuerteArr[1]}${numeroSuerteArr[2]}${numeroSuerteArr[3]}`;
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
          <IonRow >
            <IonCol>
              <p className="la-texto-darkblue-12 la-texto">
                Lorem ipsum dolor sit amet, consectetur adipis elit sed
                malesuada aliquam pharetra dignissim volutpat parturient.
              </p>
            </IonCol>
          </IonRow>

          <IonRow >
            <IonCol>
              <p className="la-titulo-16">Tú número de la Suerte:</p>
            </IonCol>
          </IonRow>

          <IonRow >
          {numeroSuerteArr.map((digito, index) => (
              <IonCol key={index}>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <input
                        type="tel"
                        className="la-input-digito"
                        maxLength={1}
                        value={digito}
                        ref={(inputRef: any) => {
                          inputNumeroSuerteArr[index] = inputRef;
                        }}
                        onChange={(e: any) => {
                          cambiarFocoDigito(
                            e,
                            index
                          );
                        }}
                      ></input>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <div className="la-linea-roja-digito"></div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
            ))}
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
                      className="la-input-digito"
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

          <IonRow >
            <IonCol>
              <button
                className="la-boton la-boton-consultar"
                onClick={() => {
                  setAvisameSiGanoParams({...avisameSiGanoParams, numero: obtenerNumeroSuerte(), fecha: parseInt(obtenerFechaActual()) })
                    props.ocultarModalAvisame();
                    props.abrirModalNotificacion();
                }}
                >
                REGISTRAR
              </button>
            </IonCol>

          
          </IonRow>

        </IonGrid>
      </div>
    </IonContent>
  );
};
export default ModalAvisameSiGano;
