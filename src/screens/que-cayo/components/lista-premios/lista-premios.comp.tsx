import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import { Seco } from "../../../../models/que-cayo/Seco";
import PremioItem from "../premio-item/premio-item.comp";
import "./lista-premios.style.css";

type ListaPremioProps = {
  listaPremios: Array<Seco>;
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
