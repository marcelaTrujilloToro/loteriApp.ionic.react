import React, { useContext, useState } from "react";
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

  const {loteriaSeleccionada} = useContext(LoteriaContext);

  const [sorteoDigito1, setSorteoDigito1] = useState <string>(loteriaSeleccionada.ultimoSorteo[0]);
  const [sorteoDigito2, setSorteoDigito2] = useState <string>(loteriaSeleccionada.ultimoSorteo[1]);
  const [sorteoDigito3, setSorteoDigito3] = useState <string>(loteriaSeleccionada.ultimoSorteo[2]);
  const [sorteoDigito4, setSorteoDigito4] = useState <string>(loteriaSeleccionada.ultimoSorteo[3]);

  const getSorteo = () => {
    return`${sorteoDigito1}${sorteoDigito2}${sorteoDigito3}${sorteoDigito4}`;
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
                <IonRow >
                  <IonCol>
                    <IonInput
                      type="number"
                      value={sorteoDigito1}
                      onIonChange={(e:any) =>{
                        setSorteoDigito1(e.detail.value);
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
                <IonRow >
                  <IonCol>
                    <IonInput
                      type="number"
                      value={sorteoDigito2}
                      onIonChange={(e:any) =>{
                        setSorteoDigito2(e.detail.value);
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
                <IonRow >
                  <IonCol>
                    <IonInput
                      type="number"
                      value={sorteoDigito3}
                      onIonChange={(e:any) =>{
                        setSorteoDigito3(e.detail.value);
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
                <IonRow >
                  <IonCol>
                    <IonInput
                      type="text"
                      value={sorteoDigito4}
                      onIonChange={(e:any) =>{
                        setSorteoDigito4(e.detail.value);
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
