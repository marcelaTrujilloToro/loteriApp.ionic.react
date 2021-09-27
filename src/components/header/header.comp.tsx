import React from "react";
import "./header.style.css";

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
              <IonMenuButton slot="start" color="light"></IonMenuButton>
            </IonButton>
          </IonCol>
          <IonCol size="10">
            <div className="la-header-elipse">
              <IonImg
                className="la-header-logo"
                src="../../assets/imagenes/logoValleFondoRojo.png"
              ></IonImg>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>
  );
};
export default Header;
