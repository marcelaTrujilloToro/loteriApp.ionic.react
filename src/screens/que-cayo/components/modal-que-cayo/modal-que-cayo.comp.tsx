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

  const [sorteoDigito1, setSorteoDigito1] = useState<string>(loteriaSeleccionada.ultimoSorteo[0]);
  const [sorteoDigito2, setSorteoDigito2] = useState<string>(loteriaSeleccionada.ultimoSorteo[1]);
  const [sorteoDigito3, setSorteoDigito3] = useState<string>(loteriaSeleccionada.ultimoSorteo[2]);
  const [sorteoDigito4, setSorteoDigito4] = useState<string>(loteriaSeleccionada.ultimoSorteo[3]);

  let refDigito1: any = React.createRef();
  let refDigito2: any = React.createRef();
  let refDigito3: any = React.createRef();
  let refDigito4: any = React.createRef();

  
  const onDigito1Change = (digito1: string) => {
    setSorteoDigito1(digito1);
    if (isNaN(parseInt(digito1))) {
      return;
    }
    
    refDigito2.current?.focus();
  };
  
  const onDigito2Change = (digito2: string) => {
    setSorteoDigito2(digito2);
    if (isNaN(parseInt(digito2))) {
      return;
    }
    
    refDigito3.current?.focus();
  };
  
  const onDigito3Change = (digito3: string) => {
    setSorteoDigito3(digito3);
    if (isNaN(parseInt(digito3))) {
      return;
    }
    
    refDigito4.current?.focus();
  };
  
  const onDigito4Change = (digito4: string) => {
    setSorteoDigito4(digito4);
  };
  
  const getSorteo = () => {
    return `${sorteoDigito1}${sorteoDigito2}${sorteoDigito3}${sorteoDigito4}`;
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
              <p className="la-texto-darkblue-12 la-texto">
                Lorem ipsum dolor sit amet, consectetur adipis elit sed
                malesuada aliquam pharetra dignissim volutpat parturient.
              </p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <p className="la-titulo-16">Número de Sorteo</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <input
                      className="la-input-digito"
                      type="tel"
                      value={sorteoDigito1}
                      maxLength={1}
                      ref={refDigito1}
                      onChange={(e: any) => {
                        onDigito1Change(e.target.value);
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

            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <input
                      className="la-input-digito"
                      type="tel"
                      value={sorteoDigito2}
                      maxLength={1}
                      ref={refDigito2}
                      onChange={(e: any) => {
                        onDigito2Change(e.target.value);
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

            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <input
                      type="tel"
                      className="la-input-digito"
                      value={sorteoDigito3}
                      maxLength={1}
                      ref={refDigito3}
                      onChange={(e: any) => {
                        onDigito3Change(e.target.value);
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

            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <input
                      type="tel"
                      value={sorteoDigito4}
                      className="la-input-digito"
                      maxLength={1}
                      ref={refDigito4}
                      onChange={(e: any) => {
                        onDigito4Change(e.target.value);
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
