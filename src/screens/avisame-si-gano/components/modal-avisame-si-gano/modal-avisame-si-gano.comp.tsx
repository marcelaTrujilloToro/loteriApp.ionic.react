import React, { useState } from "react";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
} from "@ionic/react";

interface ModalAvisameSiGanoProps {
  ocultarModalAvisame: () => void;
}

const ModalAvisameSiGano: React.FC<ModalAvisameSiGanoProps> = (props) => {

    const [numeroDigito1, setNumeroDigito1] = useState<number>();
    const [numeroDigito2, setNumeroDigito2] = useState<number>();
    const [numeroDigito3, setNumeroDigito3] = useState<number>();
    const [numeroDigito4, setNumeroDigito4] = useState<number>();

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
              <p className="la-titulo-16">Tú número de la Suerte:</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow >
                  <IonCol>
                    <IonInput
                      type="number"
                      value={numeroDigito1}
                      onIonChange={(e:any) =>{
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
                <IonRow >
                  <IonCol>
                    <IonInput
                      type="number"
                      value={numeroDigito2}
                      onIonChange={(e:any) =>{
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
                <IonRow >
                  <IonCol>
                    <IonInput
                      type="number"
                      value={numeroDigito3}
                      onIonChange={(e:any) =>{
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
                <IonRow >
                  <IonCol>
                    <IonInput
                      type="text"
                      value={numeroDigito4}
                      onIonChange={(e:any) =>{
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
                <IonInput type="date"></IonInput>
            </IonCol>
        </IonRow>

        </IonGrid>
      </div>
    </IonContent>
  );
};
export default ModalAvisameSiGano;
