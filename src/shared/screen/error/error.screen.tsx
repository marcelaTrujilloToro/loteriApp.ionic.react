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
                text: "Volver a qué cayo?",
                handler: () => {
                  history.push({
                    pathname: `/screens/que-cayo/:name`,
                  });
                }
              }
            ]}      
            />
        </div>
   
  );
};
export default Error;

