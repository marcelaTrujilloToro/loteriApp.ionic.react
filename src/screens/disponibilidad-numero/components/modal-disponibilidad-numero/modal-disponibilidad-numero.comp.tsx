import React, { useState } from 'react';
import { Loteria } from '../../../../models/loteria/Loteria';
import { useHistory } from "react-router";
import './modal-disponibilidad-numero.style.css';

import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonInput,
    IonRow,
} from "@ionic/react";

interface ModalDisponibilidadNumeroProps {
    loteria: Loteria;
    ocultarModal: () => void;
}

const ModalDisponibilidadNumero: React.FC<ModalDisponibilidadNumeroProps> = (props) => {
    
    const history = useHistory();
    
    const [numeroTiqueteArr, setNumeroTiqueteArr] = useState(["", "", "", ""]);

  let inputTiqueteRefsArr = Array<any>(numeroTiqueteArr.length);

  const [numeroSerieArr, setNumeroSerieArr] = useState(["", "", ""]);

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

   
    const getTiquete = () => {
      return`${numeroTiqueteArr[0]}${numeroTiqueteArr[1]}${numeroTiqueteArr[2]}${numeroTiqueteArr[3]}`;
    };

    const getSerie = () => {
      return`${numeroSerieArr[0]}${numeroSerieArr[1]}${numeroSerieArr[2]}`;
    };

    return (
        <IonContent>
        <div className="la-modal-disponibilidad-num-content">
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
                      props.ocultarModal();
                      history.push({
                        pathname: `/screens/disponibilidad-numero/disponibilidad-numero-resultado/disponibilidad-numero-resultado.screen/${props.loteria.codigo}/${getTiquete()}/${getSerie()}`,
                      });
                    }}
                >
                  CONSULTAR
                </button>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    )
};
export default ModalDisponibilidadNumero;