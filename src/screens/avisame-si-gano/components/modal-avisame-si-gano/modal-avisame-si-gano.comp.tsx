import React, { useContext, useState } from "react";

import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
} from "@ionic/react";
import { AvisameSiGano } from "../../../../models/avisame-si-gano/AvisameSiGano";
import { AvisameSiGanoContext } from "../../../../providers/avisame-si-gano/avisameSiGano.context";
import { useAvisameSolicitudCodigo } from "../../../../hooks/avisame-solicitud-codigo/useAvisameSolicitudCodigo.hook";

interface ModalAvisameSiGanoProps {
  ocultarModalAvisame: () => void;
  abrirModalNotificacion: () => void;
}


const ModalAvisameSiGano: React.FC<ModalAvisameSiGanoProps> = (props) => {

  const [numeroSuerteArr, setNumeroSuerteArr] = useState(["","","",""]);
  let inputNumeroSuerteArr = Array<any>(numeroSuerteArr.length);
  
  const [numeroSerieArr, setNumeroSerieArr] = useState(["","",""]);
  let inputNumeroSerieArr = Array<any>(numeroSerieArr.length);
  
  const [alertaErrorCantSorteos, setAlertaErrorCantSorteos] = useState<boolean>(false)

  const {avisameSiGanoParams, setAvisameSiGanoParams} = useContext(AvisameSiGanoContext);

  const { data:respuesta } = useAvisameSolicitudCodigo(avisameSiGanoParams);

  const validarCantidadSorteos = () => {
    if (avisameSiGanoParams.cantidadSorteos) {
      if (avisameSiGanoParams.cantidadSorteos > 10) {
        return false;
      }
      return true;
    }
  };

  const cambiarFocoDigito = (digitoEvt: any, index: any, setArreglo: any, arregloDigitos: any, inputRefsArr: any) => {
    const digito = digitoEvt.target.value;

    setArreglo(
      arregloDigitos.map((valor: any, i: any) => (i !== index ? valor : digito))
    );

    if (isNaN(parseInt(digito))) {
      return;
    }

    if (index < arregloDigitos.length - 1) {
      inputRefsArr[index + 1].focus();
    }
  };

  const obtenerNumeroSuerte = () => {
    return `${numeroSuerteArr[0]}${numeroSuerteArr[1]}${numeroSuerteArr[2]}${numeroSuerteArr[3]}`;
  };

  const obtenerNumeroSerie = () => {
    return `${numeroSerieArr[0]}${numeroSerieArr[1]}${numeroSerieArr[2]}`;
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
              <p className="la-texto-darkblue-12 la-texto la-texto-modal">
                Lorem ipsum dolor sit amet, consectetur adipis elit sed
                malesuada aliquam pharetra dignissim volutpat parturient.
              </p>
            </IonCol>
          </IonRow>

          <IonRow >
            <IonCol>
              <p className="la-titulo-16 la-titulo-modal">Tú número de la Suerte:</p>
            </IonCol>
          </IonRow>

          <IonRow >
          {numeroSuerteArr.map((digito, index) => (
              <IonCol key={index}>
                <IonGrid>
                  <IonRow>
                    <IonCol className="la-fondo-digito">
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
                            index,
                            setNumeroSuerteArr,
                            numeroSuerteArr,
                            inputNumeroSuerteArr
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

          <IonRow >
            <IonCol>
              <p className="la-titulo-16 la-titulo-modal">Serie:</p>
            </IonCol>
          </IonRow>

          <IonRow >
          {numeroSerieArr.map((digito, index) => (
              <IonCol key={index}>
                <IonGrid>
                  <IonRow>
                    <IonCol className="la-fondo-digito">
                      <input
                        type="tel"
                        className="la-input-digito"
                        maxLength={1}
                        value={digito}
                        ref={(inputRef: any) => {
                          inputNumeroSerieArr[index] = inputRef;
                        }}
                        onChange={(e: any) => {
                          cambiarFocoDigito(
                            e,
                            index,
                            setNumeroSerieArr,
                            numeroSerieArr,
                            inputNumeroSerieArr
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
              <p className="la-titulo-16 la-titulo-modal">Cantidad de Sorteos</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol className="la-fondo-digito">
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
                  if (validarCantidadSorteos() === false) {
                    setAlertaErrorCantSorteos(true);
                  }else {
                    setAvisameSiGanoParams({...avisameSiGanoParams, serie:obtenerNumeroSerie(), numero: obtenerNumeroSuerte(), fecha: parseInt(obtenerFechaActual()) })
                      props.ocultarModalAvisame();
                      props.abrirModalNotificacion();
                  }
                }}
                >
                REGISTRAR
              </button>
            </IonCol>

          
          </IonRow>

        </IonGrid>
      </div>

      <IonAlert
        isOpen={alertaErrorCantSorteos}
        onDidDismiss={() => setAlertaErrorCantSorteos(false)}
        header={"Error"}
        message={"La cantidad de sorteos debe ser máximo 10"}
        buttons={[
          {
            text: "Aceptar",
            handler: () => {
              setAlertaErrorCantSorteos(false);
              setAvisameSiGanoParams({...avisameSiGanoParams, cantidadSorteos: undefined})
            },
          },
        ]}
      />
    </IonContent>
  );
};
export default ModalAvisameSiGano;
