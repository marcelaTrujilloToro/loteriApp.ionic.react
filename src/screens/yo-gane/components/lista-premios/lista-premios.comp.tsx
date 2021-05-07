import { IonGrid, IonTitle } from '@ionic/react';
import React from 'react'
import { Premio } from '../../../../models/yo-gane/Premio';
import { PremioItem } from '../premio-item/premio-item.comp';


type ListaPremiosProps = {
    listaPremios: Premio[] | undefined;
}

export const ListaPremios: React.FC <ListaPremiosProps> = (props) => {
    if (props.listaPremios === undefined) {
        return(
          <IonTitle>No hay secos</IonTitle>
        )
        
      }else{
        return (
          <IonGrid className=" ion-no-padding la-grid-lista-premios">
            {props.listaPremios.map((premio) => {
              return <PremioItem key={premio.nombre} premio={premio}></PremioItem>;
            })}
          </IonGrid>
        );
    
      }
}
