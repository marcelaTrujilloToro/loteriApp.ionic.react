import React from "react";
import { useParams } from "react-router";
import "./disponibilidad-numero-resultado.style.css";
import Header from "../../../components/header/header.comp";
import { useDisponibilidadNumero } from "../../../hooks/disponibilidad-numero/useDisponibilidadNumero.hook";
import ListaDisponibilidadNumeros from "../components/lista-disponibilidad-numeros/lista-disponibilidad-numeros.comp";
import "./disponibilidad-numero-resultado.style.css";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import Loading from "../../../shared/screen/loading/loading.screen";
import Error from "../../../shared/screen/error/error.screen";

interface DisponibilidadNumeroResultadoScreenParams {
  codigoLoteria: string;
  numero: string;
  serie: string;
}

const DisponibilidadNumeroResultadoScreen: React.FC = () => {
  const { codigoLoteria, numero, serie } =
    useParams<DisponibilidadNumeroResultadoScreenParams>();

  const {
    isError,
    isLoading,
    data: respuesta,
  } = useDisponibilidadNumero(codigoLoteria, numero, serie);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const mensaje = "";
  return (
    <IonPage>
      <Header></Header>

      <IonContent className="ion-no-padding ">
        <div className="la-content-gradiente-darker la-content-height">
          <IonGrid className=" la-content-grid ion-no-padding">
            <IonRow className="la-titulo-disponibilidad-row">
              <IonCol className=" la-col-titulo-disponibilidad">
                <IonTitle className="la-titulo-22 la-titulo-disponibilidad">
                  Disponibilidad de Números
                </IonTitle>
                <div className="la-content-rectangulo-rojo la-linea-roja-disponibilidad"></div>
              </IonCol>
            </IonRow>

            <IonRow className="la-logo-loteria-seleccionada-row">
              <IonCol>
                <img
                  className="la-logo-loteria"
                  src={`/assets/imagenes/${codigoLoteria}-sin-fondo.png`}
                  alt=""
                />
              </IonCol>
            </IonRow>

            <IonRow className="la-subtitulo-disponibilidad-row">
              <IonCol>
                <p>
                  Número: <span>{numero}</span>
                </p>
              </IonCol>
            </IonRow>

            <IonRow className="la-items-disponibilidad-row">
              <IonCol size="2">
                <p>Serie</p>
              </IonCol>
              <IonCol size="4">
                <p>Distribuidor</p>
              </IonCol>
              <IonCol size="3">
                <p>Ciudad</p>
              </IonCol>
              <IonCol size="3">
                <p>Telefono</p>
              </IonCol>
            </IonRow>

            <IonRow className="la-lista-premios-disponibilidad-row">
              <IonCol>
                {isError ? (
                  <Error mensaje={mensaje} direccion={"screens/disponibilidad-numero/:name"}></Error>
                ) : (
                  <ListaDisponibilidadNumeros
                    listaDisponibilidadNumeros={respuesta}
                  ></ListaDisponibilidadNumeros>
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default DisponibilidadNumeroResultadoScreen;
