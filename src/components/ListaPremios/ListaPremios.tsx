import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import { Premio } from "../../models/Premio";
import PremioItem from "../PremioItem/PremioItem";
import "./ListaPremios.style.css";

type ListaPremioProps = {
  listaPremios: Array<Premio>;
};

const ListaPremios: React.FC<ListaPremioProps> = (props) => {
  return (
    <IonGrid className=" ion-no-padding la-grid-lista-premios">
      {props.listaPremios.map((premio) => {
        return <PremioItem premio={premio}></PremioItem>;
      })}
    </IonGrid>
  );
};
export default ListaPremios;
