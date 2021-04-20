import React from "react";
import "../Header/Header.css";

import {
  IonButton,
  IonCol,
  IonGrid,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonRow,
} from "@ionic/react";

const Header = () => {
  return (
    <IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol size="2" className="ion-align-self-center">
            <IonButton fill="clear" className="la-header-menu">
              <IonMenuButton slot="start" color="warning"></IonMenuButton>
            </IonButton>
          </IonCol>
          <IonCol size="10">
            <div className="la-header-elipse">
              <IonImg
                className="la-header-logo"
                src="\assets\imagenes\LoteriApp_logo_300x148 3.png"
              ></IonImg>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>
  );
};
export default Header;
