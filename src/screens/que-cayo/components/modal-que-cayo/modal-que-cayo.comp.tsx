import React, { MutableRefObject, useContext, useRef, useState } from "react";
import "./modal-que-cayo.style.css";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
} from "@ionic/react";
import { useHistory } from "react-router";
import { LoteriaContext } from "../../../../providers/loteria/loteria.context";

interface ModalQueCayoProps {
  ocultarModal: () => void;
}

const ModalQueCayo: React.FC<ModalQueCayoProps> = (props) => {
  const history = useHistory();

  const { loteriaSeleccionada } = useContext(LoteriaContext);

  const [numeroSorteoArr, setNumeroSorteoArr] = useState([
    loteriaSeleccionada.ultimoSorteo[0],
    loteriaSeleccionada.ultimoSorteo[1],
    loteriaSeleccionada.ultimoSorteo[2],
    loteriaSeleccionada.ultimoSorteo[3],
  ]);

  let inputSorteoRefsArr = Array<any>(numeroSorteoArr.length);

  const cambiarFocoDigito = (digitoEvt: any, index: any) => {
    const digito = digitoEvt.target.value;

    setNumeroSorteoArr(
      numeroSorteoArr.map((valor: any, i: any) =>
        i !== index ? valor : digito
      )
    );

    if (isNaN(parseInt(digito))) {
      return;
    }

    if (index < numeroSorteoArr.length - 1) {
      inputSorteoRefsArr[index + 1].focus();
    }
  };

  const getSorteo = () => {
    return `${numeroSorteoArr[0]}${numeroSorteoArr[1]}${numeroSorteoArr[2]}${numeroSorteoArr[3]}`;
  };

  return (
    <IonContent>
      <div className="la-que-cayo-modal-content">
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
                        cambiarFocoDigito(e, index);
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
                    pathname: `/screens/que-cayo-resultado/que-cayo-resultado.screen/${getSorteo()}`,
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
  );
};
export default ModalQueCayo;
