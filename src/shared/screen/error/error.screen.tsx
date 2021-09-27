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
import { useHistory } from "react-router";

interface ErrorProps {
  mensaje: string
  direccion: string
}

const Error: React.FC<ErrorProps> = (props) => {
    
    const [error, setError] = useState(true);

    const history = useHistory();

    return (
    
      <div className="la-content-gradiente-darker">
          <IonAlert            
            isOpen={error}
            onDidDismiss={() => setError(false)}
            header={"Error"}
            message={props.mensaje}   
            buttons={[
              {
                text: "¿Ingresar datos?",
                handler: () => {
                  history.push({
                    pathname: `/${props.direccion}`,
                  });
                }
              }
            ]}      
            />
        </div>
   
  );
};
export default Error;

