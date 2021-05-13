import React, { useState } from "react";
import { Loteria } from "../../../../models/loteria/Loteria";
import { useHistory } from "react-router";
import "./modal-numeros-suertudos.style.css";
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";

interface ModalNumerosSuertudosProps {
  ocultarModal: () => void;
  loteria: Loteria;
}

const ModalNumerosSuertudos: React.FC<ModalNumerosSuertudosProps> = (props) => {
  const history = useHistory();

  const [primeraCifra, setPrimeraCifra] = useState<string>("off");
  const [segundaCifra, setSegundaCifra] = useState<string>("off");
  const [terceraCifra, setTerceraCifra] = useState<string>("off");
  const [ultimaCifra, setUltimaCifra] = useState<string>("off");
  const [cantSorteos, setCantSorteos] = useState<string>("10");

  return (
    <IonContent>
      <div className="la-modal-suertudos-content">
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
            <IonCol className="la-titulo-modal-suertudos">
              <p className="la-titulo-16">
                Aproximación con tus números de la suerte
              </p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonList className="check">
                <IonItem>
                  <IonLabel color="primary">Primera cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    value={primeraCifra}
                    onIonChange={(e) => {
                      setPrimeraCifra(e.detail.value);
                    }}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel color="primary">Segunda cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    value={segundaCifra}
                    onIonChange={(e) => {
                      setSegundaCifra(e.detail.value);
                    }}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel color="primary">Tercera cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    value={terceraCifra}
                    onIonChange={(e) => {
                      setTerceraCifra(e.detail.value);
                    }}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel color="primary">Ultima cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    value={ultimaCifra}
                    onIonChange={(e) => {
                      setUltimaCifra(e.detail.value);
                    }}
                  />
                </IonItem>
              </IonList>
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
                      type="number"
                      value={cantSorteos}
                      onIonChange={(e: any) => {
                        setCantSorteos(e.detail.value);
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
                    pathname: `/screens/numeros-suertudos/numeros-suertudos-resultados/numeros-suertudos-resultados.screen/${props.loteria.codigo}/${primeraCifra}/${segundaCifra}/${terceraCifra}/${ultimaCifra}/${cantSorteos}`,
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

export default ModalNumerosSuertudos;
