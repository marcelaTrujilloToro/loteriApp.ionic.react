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
    
    const [tiqueteDig1, setTiqueteDig1] = useState<string>();
    const [tiqueteDig2, setTiqueteDig2] = useState<string>();
    const [tiqueteDig3, setTiqueteDig3] = useState<string>();
    const [tiqueteDig4, setTiqueteDig4] = useState<string>();

    const [serieDig1, setSerieDig1] = useState<string>();
    const [serieDig2, setSerieDig2] = useState<string>();
    const [serieDig3, setSerieDig3] = useState<string>();

   
    const getTiquete = () => {
      return`${tiqueteDig1}${tiqueteDig2}${tiqueteDig3}${tiqueteDig4}`;
    };

    const getSerie = () => {
      return`${serieDig1}${serieDig2}${serieDig3}`;
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
                <p className="la-texto-darkblue-12 la-texto">
                  Lorem ipsum dolor sit amet, consectetur adipis elit sed
                  malesuada aliquam pharetra dignissim volutpat parturient.
                </p>
              </IonCol>
            </IonRow>
  
            
  
            <IonRow>
              <IonCol>
                <p className="la-titulo-16">Número de Tiquete</p>
              </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                    <IonInput
                          type="tel"
                          maxlength={1}
                          value={tiqueteDig1}
                          onIonChange={(e:any) =>{
                            setTiqueteDig1(e.detail.value);
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
                  <IonRow>
                    <IonCol>
                    <IonInput
                          type="tel"
                          maxlength={1}
                          value={tiqueteDig2}
                          onIonChange={(e:any) =>{
                            setTiqueteDig2(e.detail.value);
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
                  <IonRow>
                    <IonCol>
                    <IonInput
                          type="tel"
                          maxlength={1}
                          value={tiqueteDig3}
                          onIonChange={(e:any) =>{
                            setTiqueteDig3(e.detail.value);
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
                  <IonRow>
                    <IonCol>
                    <IonInput
                          type="tel"
                          maxlength={1}  
                          value={tiqueteDig4}
                          onIonChange={(e:any) =>{
                            setTiqueteDig4(e.detail.value);
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
                <p className="la-titulo-16">Número de Serie</p>
              </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonInput
                          type="tel"
                          maxlength={1}   
                          value={serieDig1}
                          onIonChange={(e:any) =>{
                            setSerieDig1(e.detail.value);
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
                  <IonRow>
                    <IonCol>
                    <IonInput
                          type="tel"
                          maxlength={1} 
                          value={serieDig2}
                          onIonChange={(e:any) =>{
                            setSerieDig2(e.detail.value);
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
                  <IonRow>
                    <IonCol>
                    <IonInput
                          type="tel"
                          maxlength={1}
                          value={serieDig3}
                          onIonChange={(e:any) =>{
                            setSerieDig3(e.detail.value);
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