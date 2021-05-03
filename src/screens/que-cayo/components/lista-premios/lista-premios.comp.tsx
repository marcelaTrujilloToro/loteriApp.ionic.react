import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import { Seco } from "../../../../models/que-cayo/Seco";
import PremioItem from "../premio-item/premio-item.comp";
import "./lista-premios.style.css";

type ListaPremioProps = {
  listaSecos: Array<Seco>;
};

const ListaPremios: React.FC<ListaPremioProps> = (props) => {
  return (
    <IonGrid className=" ion-no-padding la-grid-lista-premios">
      {props.listaSecos.map((seco) => {
        return <PremioItem key={seco.nombre} premio={seco}></PremioItem>;
      })}
    </IonGrid>
  );
};
export default ListaPremios;
