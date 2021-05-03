import React, { useState } from "react";
import "./modal-que-cayo.style.css";
import QueCayoResultadoScreen, { QueCayoResultadoScreenParams } from "../../que-cayo-resultado/que-cayo-resultado.screen";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router";
import { Loteria } from "../../../../models/loteria/Loteria";

interface ModalProps {
  ocultarModal: () => void;
  loteria: Loteria;
}

const ModalQueCayo: React.FC<ModalProps> = (props) => {

  const history = useHistory();

  const [sorteoDigito1, setSorteoDigito1] = useState(props.loteria.ultimoSorteo[0]);
  const [sorteoDigito2, setSorteoDigito2] = useState(props.loteria.ultimoSorteo[1]);
  const [sorteoDigito3, setSorteoDigito3] = useState(props.loteria.ultimoSorteo[2]);
  const [sorteoDigito4, setSorteoDigito4] = useState(props.loteria.ultimoSorteo[3]);


  return (


    <IonContent >
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
                <IonRow className="la-num-sorteo">
                  <IonCol >
                    <IonInput                      
                      type="text"
                      value={sorteoDigito1}
                      onChange = {(evento:any) => {
                        setSorteoDigito1(evento.target.value);
                     }}
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="la-linea-roja"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>

            <IonCol>
              <IonGrid>
                <IonRow  className="la-num-sorteo">
                  <IonCol>
                    <IonInput
                      type="text"
                      value={sorteoDigito2}
                      onChange = {(evento:any) => {
                        setSorteoDigito2(evento.target.value);
                     }}
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="la-linea-roja"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>

            <IonCol>
              <IonGrid>
                <IonRow className="la-num-sorteo">
                  <IonCol>
                    <IonInput
                      type="text"
                      value={sorteoDigito3}
                      onChange = {(evento:any) => {
                        setSorteoDigito3(evento.target.value);
                     }}
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="la-linea-roja"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>

            <IonCol>
              <IonGrid>
                <IonRow className="la-num-sorteo">
                  <IonCol>
                    <IonInput
                      type="text"
                      value={sorteoDigito4}
                      onChange = {(evento:any) => {
                        setSorteoDigito4(evento.target.value);
                     }}
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="la-linea-roja"></div>
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
                    pathname: `/screens/que-cayo-resultado/QueCayoResultadoScreen/${props.loteria.codigo}/${props.loteria.ultimoSorteo}`,
                  })
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
