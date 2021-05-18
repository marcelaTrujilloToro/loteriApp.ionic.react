import React, { useState } from "react";
import { IonCol, IonRow } from "@ionic/react";
import { useLoterias } from "../../hooks/loteria/useLoterias.hook";
import Loading from "../../shared/screen/loading/loading.screen";
import Error from "../../shared/screen/error/error.screen";
import { Loteria } from "../../models/loteria/Loteria";


export interface ListaLoteriasProps{
  onLoteriaSeleccionadaFn: (loteria:Loteria) => void; 
}

const ListaLoterias: React.FC <ListaLoteriasProps> = (props) => {

  const { isLoading, isError, data: loteriasList } = useLoterias();

  if (isLoading) {
    return <Loading/>;
  }

  if (isError) {
    return <Error/>;
  }

  return (
    <IonRow>
      {loteriasList?.map((loteria) => (
        <IonCol key={loteria.codigo}>
          <div className="la-rectangulo-azul">
            <img
              className="la-logo"
              src={`/assets/img/loterias/${loteria.codigo}.png`}
              onClick={() => props.onLoteriaSeleccionadaFn(loteria)}
            ></img>
          </div>          
        </IonCol>
      ))}
    </IonRow>
  );
};

export default ListaLoterias;

// 