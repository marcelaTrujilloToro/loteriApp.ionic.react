import React from 'react';
import "../que-cayo/que-cayo.css";

import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonText, IonTitle, IonToolbar } from '@ionic/react';

const QueCayo = () => {
    return (

        <IonPage>
            <IonHeader >
                <IonToolbar >
                    <IonButton slot = "start" size = "large" >
                            <IonMenuButton color = "warning"></IonMenuButton>
                            <IonImg src = "\assets\imagenes\LoteriApp_logo_300x148 3.png"></IonImg>
                    </IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent className = "content">
                    <IonTitle  className = "ion-text-center fuente" >¿Qué cayó?</IonTitle>
                    <IonText className = "ion-text-center"  >
                         <h5>Lorem ipsum dolor sit amet, consectetur adipis elit sed malesuada aliquam pharetra dignissim volutpat parturient.</h5>
                    </IonText>
                    <IonGrid>
                    <IonRow >
                        <IonCol>
                            <IonButton size="large" fill = "clear" >
                                <IonImg src = "\assets\imagenes\logo_nuevo_manizales.png"></IonImg>                                    
                            </IonButton>
                            <IonButton  size="large" fill = "clear">
                                    <IonImg src = "\assets\imagenes\logo.png"></IonImg>                                    
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow >
                        <IonCol>
                            <IonButton  size="large" fill = "clear">
                                    <IonImg  src = "\assets\imagenes\logonuevo.png "></IonImg>

                            </IonButton>                        
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                
            </IonContent>
        </IonPage>
       
    )
}
export default QueCayo; 
