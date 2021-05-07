import { IonCol, IonGrid, IonRow, IonText, IonTitle } from "@ionic/react";
import React from "react";
import { Seco } from "../../../../models/que-cayo/Seco";
import SecoItem from "../seco-item/seco-item.comp";
import "./lista-secos.style.css";

type ListaSecosProps = {
  listaSecos: Seco[] | undefined;
};

const ListaSecos: React.FC<ListaSecosProps> = (props) => {
  
  if (props.listaSecos === undefined) {
    return(
      <IonTitle>No hay secos</IonTitle>
    )
    
  }else{
    return (
      <IonGrid className=" ion-no-padding la-grid-lista-premios">
        {props.listaSecos.map((seco) => {
          return <SecoItem key={seco.nombre} seco={seco}></SecoItem>;
        })}
      </IonGrid>
    );

  }
  
};
export default ListaSecos;
