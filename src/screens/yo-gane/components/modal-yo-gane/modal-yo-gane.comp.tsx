import React, { useContext, useRef, useState } from "react";

import "./modal-yo-gane.style.css";
import { Loteria } from "../../../../models/loteria/Loteria";
import { useHistory } from "react-router";

import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
} from "@ionic/react";

interface ModalYoGaneProps {
  loteria: Loteria;
  ocultarModal: () => void;
}

const ModalYoGane: React.FC<ModalYoGaneProps> = (props) => {
  const history = useHistory();

  const [numeroSorteoArr, setNumeroSorteoArr] = useState([
    props.loteria.ultimoSorteo[0],
    props.loteria.ultimoSorteo[1],
    props.loteria.ultimoSorteo[2],
    props.loteria.ultimoSorteo[3],
  ]);

  let inputSorteoRefsArr = Array<any>(numeroSorteoArr.length);

  const [numeroTiqueteArr, setNumeroTiqueteArr] = useState(["", "", "", ""]);

  let inputTiqueteRefsArr = Array<any>(numeroTiqueteArr.length);

  const [numeroSerieArr, setNumeroSerieArr] = useState(["", "", ""]);

  const [verAlertaDatosInvalidos, setVerAlertaDatosInvalidos] = useState(false);

  let inputSerieRefsArr = Array<any>(numeroSerieArr.length);

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

  const getSorteo = () => {
    return `${numeroSorteoArr[0]}${numeroSorteoArr[1]}${numeroSorteoArr[2]}${numeroSorteoArr[3]}`;
  };

  const getTiquete = () => {
    return `${numeroTiqueteArr[0]}${numeroTiqueteArr[1]}${numeroTiqueteArr[2]}${numeroTiqueteArr[3]}`;
  };

  const getSerie = () => {
    return `${numeroSerieArr[0]}${numeroSerieArr[1]}${numeroSerieArr[2]}`;
  };


  return (
    <IonContent>
      <div className="la-yo-gane-modal-content">
        <IonButton
          className="la-boton-cerrar"
          onClick={() => {
            props.ocultarModal();
          }}
          fill="clear"
        >
          X
        </IonButton>
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol>
              <p className="la-texto-darkblue-12 la-texto la-texto-modal">
                Lorem ipsum dolor sit amet, consectetur adipis elit sed
                malesuada aliquam pharetra dignissim volutpat parturient.
              </p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <p className="la-titulo-16 la-titulo-modal">Número de Sorteo</p>
            </IonCol>
          </IonRow>

          <IonRow>
            {numeroSorteoArr.map((digito, index) => (
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
                          inputSorteoRefsArr[index] = inputRef;
                        }}
                        onChange={(e: any) => {
                          cambiarFocoDigito(
                            e,
                            index,
                            setNumeroSorteoArr,
                            numeroSorteoArr,
                            inputSorteoRefsArr
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
              <p className="la-titulo-16 la-titulo-modal">Número de Tiquete</p>
            </IonCol>
          </IonRow>

          <IonRow>
            {numeroTiqueteArr.map((digito, index) => (
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
                          inputTiqueteRefsArr[index] = inputRef;
                        }}
                        onChange={(e: any) => {
                          cambiarFocoDigito(
                            e,
                            index,
                            setNumeroTiqueteArr,
                            numeroTiqueteArr,
                            inputTiqueteRefsArr
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
              <p className="la-titulo-16 la-titulo-modal">Número de Serie</p>
            </IonCol>
          </IonRow>

          <IonRow>
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
                          inputSerieRefsArr[index] = inputRef;
                        }}
                        onChange={(e: any) => {
                          cambiarFocoDigito(
                            e,
                            index,
                            setNumeroSerieArr,
                            numeroSerieArr,
                            inputSerieRefsArr
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
              <button
                className="la-boton la-boton-consultar"
                onClick={() => {
                  if (getSerie().length === 0 || getTiquete().length === 0) {
                    setVerAlertaDatosInvalidos(true);
                  }else{
                    props.ocultarModal();
                    history.push({
                      pathname: `/screens/yo-gane/yo-gane-resultado/yo-gane-resultado.screen/${
                        props.loteria.codigo
                      }/${getSorteo()}/${getTiquete()}/${getSerie()}`,
                    });
                  }
                  
                }}
              >
                CONSULTAR
              </button>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
      <IonAlert
        isOpen={verAlertaDatosInvalidos}
        cssClass="my-custom-class"
        header={"Error"}
        message={"Debe ingresar todos los datos"}
        backdropDismiss={true}
        buttons={[
          {
            text: "Aceptar",
            handler: () => {
              setVerAlertaDatosInvalidos(false)
            },
          },
        ]}
      />
    </IonContent>
  );
};

export default ModalYoGane;
