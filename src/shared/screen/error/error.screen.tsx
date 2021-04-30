import React, { useState } from "react";
import {
  IonAlert,
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonText,
  IonTitle,
} from "@ionic/react";

import Header from "../../../components/header/header.comp";


const Error: React.FC = () => {
    
    const [error, setError] = useState(true);

    return (
    <IonPage>
      <Header></Header>

      <IonContent>
        <div className="la-content-gradiente-darker la-error-carga">
          <IonAlert            
            isOpen={error}
            onDidDismiss={() => setError(false)}
            header={"Error"}
            message={"Al cargar la lista de loterias"}          
            />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Error;
