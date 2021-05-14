import React, { useState } from "react";

import Header from "../../../components/header/header.comp";
import {  IonContent, IonLoading, IonPage } from "@ionic/react";

const Loading: React.FC = () => {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    
      <IonContent>
        <div className="la-content-gradiente-darker">
          <IonLoading            
            isOpen={loading}
            onDidDismiss={() => setLoading(false)}
            message={"Cargando..."}
            duration={5000}
            spinner="bubbles"            
            />
        </div>
      </IonContent>
  );
};
export default Loading;
