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
    
      
        <div className="la-content-gradiente-darker">
          <IonAlert            
            isOpen={error}
            onDidDismiss={() => setError(false)}
            header={"Error"}
            message={"Al cargar los resultados"}          
            />
        </div>
   
  );
};
export default Error;
