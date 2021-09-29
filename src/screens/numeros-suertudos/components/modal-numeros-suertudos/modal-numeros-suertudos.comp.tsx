import React, { useState } from "react";
import { Loteria } from "../../../../models/loteria/Loteria";
import { useHistory } from "react-router";
import "./modal-numeros-suertudos.style.css";
import {
  IonAlert,
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

  const [cantidadSorteos, setCantidadSorteos] = useState<number | undefined>(10);
  const [alertaErrorCantSorteos, setAlertaErrorCantSorteos] = useState<boolean>(false)

  const validarCantidadSorteos = () => {
    if (cantidadSorteos) {
      if (cantidadSorteos > 20) {
        return false;
      }
      return true;
    }
  };

  const cambiarCheck = (check: boolean) => {
    if (check === true) {
      return "X";
    }
    return " ";
  }

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
              <p className="la-titulo-16 la-texto-modal">
                Aproximación con tus números de la suerte
              </p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonList className="check">
                <IonItem>
                  <IonLabel color="danger">Primera cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    checked={checkPrimeraCifra}
                    onIonChange={(e) => {
                      setCheckPrimeraCifra(e.detail.checked);
                    }}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel color="danger">Segunda cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    checked={checkSegundaCifra}
                    onIonChange={(e) => {
                      setCheckSegundaCifra(e.detail.checked);
                    }}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel color="danger">Tercera cifra</IonLabel>
                  <IonCheckbox
                    slot="end"
                    checked={checkTerceraCifra}
                    onIonChange={(e) => {
                      setCheckTerceraCifra(e.detail.checked);
                      
                    }}
                    
                  />
                </IonItem>
                <IonItem>
                  <IonLabel color="danger">Ultima cifra</IonLabel>
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
              <p className="la-titulo-16 la-titulo-modal">Cantidad de Sorteos</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol className="la-fondo-digito">
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
                  if (validarCantidadSorteos() === false) {
                    setAlertaErrorCantSorteos(true);
                  }else{
                    props.ocultarModal();
                    history.push({
                      pathname: `/screens/numeros-suertudos/numeros-suertudos-resultados/numeros-suertudos-resultados.screen/${props.loteria.codigo}/${cambiarCheck(checkPrimeraCifra)}/${cambiarCheck(checkSegundaCifra)}/${cambiarCheck(checkTerceraCifra)}/${cambiarCheck(checkUltimaCifra)}/${cantidadSorteos}/`,
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
        isOpen={alertaErrorCantSorteos}
        onDidDismiss={() => setAlertaErrorCantSorteos(false)}
        header={"Error"}
        message={"La cantidad de sorteos debe ser inferior a 20"}
        buttons={[
          {
            text: "Aceptar",
            handler: () => {
              setAlertaErrorCantSorteos(false);
              setCantidadSorteos(undefined);
            },
          },
        ]}
      />
    </IonContent>
  );
};

export default ModalNumerosSuertudos;
