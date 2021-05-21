import React, { useContext, useState } from "react";

import "./modal-yo-gane.style.css";
import { Loteria } from "../../../../models/loteria/Loteria";
import { useHistory } from "react-router";

import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonInput,
    IonRow,
} from "@ionic/react";
import { LoteriaContext } from "../../../../providers/loteria/loteria.context";

interface ModalYoGaneProps {
  loteria: Loteria;
  ocultarModal: () => void;
}

const ModalYoGane: React.FC <ModalYoGaneProps> = (props) => {

    const history = useHistory();
    
    const [loteriaSeleccionada,setLoteriaSeleccionada] = useState();

    const [sorteoDig1, setSorteoDig1] = useState<string>(props.loteria.ultimoSorteo[0]);
    const [sorteoDig2, setSorteoDig2] = useState<string>(props.loteria.ultimoSorteo[1]);
    const [sorteoDig3, setSorteoDig3] = useState<string>(props.loteria.ultimoSorteo[2]);
    const [sorteoDig4, setSorteoDig4] = useState<string>(props.loteria.ultimoSorteo[3]);

    const [tiqueteDig1, setTiqueteDig1] = useState<string>();
    const [tiqueteDig2, setTiqueteDig2] = useState<string>();
    const [tiqueteDig3, setTiqueteDig3] = useState<string>();
    const [tiqueteDig4, setTiqueteDig4] = useState<string>();

    const [serieDig1, setSerieDig1] = useState<string>();
    const [serieDig2, setSerieDig2] = useState<string>();
    const [serieDig3, setSerieDig3] = useState<string>();

    const getSorteo = () => {
      return`${sorteoDig1}${sorteoDig2}${sorteoDig3}${sorteoDig4}`;
    };

    const getTiquete = () => {
      return`${tiqueteDig1}${tiqueteDig2}${tiqueteDig3}${tiqueteDig4}`;
    };

    const getSerie = () => {
      return`${serieDig1}${serieDig2}${serieDig3}`;
    };

    return (
    <IonContent>
      <div className="la-yo-gane-modal-content">
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
                    <IonInput
                        type="number" 
                        value={sorteoDig1}
                        onIonChange={(e:any) =>{
                          setSorteoDig1(e.detail.value);
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
                        type="number"
                        value={sorteoDig2}
                        onIonChange={(e:any) =>{
                          setSorteoDig2(e.detail.value);
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
                        type="number" 
                        value={sorteoDig3}
                        onIonChange={(e:any) =>{
                          setSorteoDig3(e.detail.value);
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
                        type="number"  
                        value={sorteoDig4}
                        onIonChange={(e:any) =>{
                          setSorteoDig4(e.detail.value);
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
              <p className="la-titulo-16">Número de Tiquete</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol>
                  <IonInput
                        type="number"
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
                        type="number"
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
                        type="number"
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
                        type="number"  
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
                        type="number"   
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
                        type="number" 
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
                        type="number"
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
                      pathname: `/screens/yo-gane/yo-gane-resultado/yo-gane-resultado.screen/${props.loteria.codigo}/${getSorteo()}/${getTiquete()}/${getSerie()}`,
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

export default ModalYoGane;
