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

  const [checkPrimeraCifra, setCheckPrimeraCifra] = useState(false);
  const [checkSegundaCifra, setCheckSegundaCifra] = useState(false);
  const [checkTerceraCifra, setCheckTerceraCifra] = useState(false);
  const [checkUltimaCifra, setCheckUltimaCifra] = useState(false);

  const [cantidadSorteos, setCantidadSorteos] = useState<string>("10");


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
                    checked={checkPrimeraCifra}
                    onIonChange={(e) => {
                      setCheckPrimeraCifra(e.detail.checked);
                    }}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel color="primary">Segunda cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    checked={checkSegundaCifra}
                    onIonChange={(e) => {
                      setCheckSegundaCifra(e.detail.checked);
                    }}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel color="primary">Tercera cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    checked={checkTerceraCifra}
                    onIonChange={(e) => {
                      setCheckTerceraCifra(e.detail.checked);
                      
                    }}
                    
                  />
                </IonItem>
                <IonItem>
                  <IonLabel color="primary">Ultima cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    checked={checkUltimaCifra}
                    onIonChange={(e) => {
                      setCheckUltimaCifra(e.detail.checked);
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
                      value={cantidadSorteos}
                      onIonChange={(e: any) => {
                        setCantidadSorteos(e.detail.value);
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
                    pathname: `/screens/numeros-suertudos/numeros-suertudos-resultados/numeros-suertudos-resultados.screen/${props.loteria.codigo}/${checkPrimeraCifra}/${checkSegundaCifra}/${checkTerceraCifra}/${checkUltimaCifra}/${cantidadSorteos}/`,
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
