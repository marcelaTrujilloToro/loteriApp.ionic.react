import React from 'react'
import { Suertudo } from "../../../../models/suertudos/Suertudo";
import { IonGrid, IonTitle } from "@ionic/react";
import SuertudoItem from "../suertudo-item/suertudo-item.comp";


type ListaSuertudosProps = {
    listaSuertudos: Suertudo[] | undefined;
}

const ListaSuertudos: React.FC <ListaSuertudosProps> = (props) => {

        if (props.listaSuertudos === undefined) {
            return(
              <IonTitle>No hay premios</IonTitle>
            )
            
          }else{
            return (
              <IonGrid className=" ion-no-padding la-grid-lista-premios">
                {props.listaSuertudos.map((suertudo) => {
                  return <SuertudoItem key={suertudo.numero} suertudo={suertudo}></SuertudoItem>;
                })}
              </IonGrid>
            );
        
          }
    
};

export default ListaSuertudos;
