/* Core CSS required for Ionic components to work properly */

import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import React from "react";
import queryClient from './react-query-client';
import { useQueryClient, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Theme variables */
import "./theme/variables.css";
import "./App.css";

import { LoteriaProvider } from "./providers/loteria/loteria.context";
import { AvisameSiGanoProvider } from "./providers/avisame-si-gano/avisameSiGano.context";
import { EliminarSubscripcionProvider } from "./providers/eliminar-subscripcion/eliminarSubscripcion.context";
import Menu from "./components/menu/menu.comp";
import QueCayoScreen from "./screens/que-cayo/que-cayo/que-cayo.screen";
import Home from "./screens/home/Home.screen";
import QueCayoResultadoScreen from "./screens/que-cayo/que-cayo-resultado/que-cayo-resultado.screen";
import YoGanePrincipalScreen from "./screens/yo-gane/yo-gane-principal/yo-gane-principal.screen";
import YoGaneScreen from "./screens/yo-gane/yo-gane/yo-gane.screen";
import YoGaneResultadoScreen from "./screens/yo-gane/yo-gane-resultado/yo-gane-resultado.screen";
import NumerosSuertudosScreen from "./screens/numeros-suertudos/numeros-suertudos/numeros-suertudos.screen";
import NumerosSuertudosResultadosScreen from "./screens/numeros-suertudos/numeros-suertudos-resultados/numeros-suertudos-resultados.screen";
import AvisameSiGanoScreen from "./screens/avisame-si-gano/avisame-si-gano/avisame-si-gano.screen";
import AvisameValidacion from "./screens/avisame-si-gano/avisame-si-gano/avisame-validacion";
import SolicitudCodigoScreen from "./screens/solicitud-codigo/solicitud-codigo/solicitud-codigo.screen";
import EliminarSubscripcionScreen from "./screens/eliminar-subscripcion/eliminar-subscripcion/eliminar-subscripcion.screen";
import EliminarSubscripcionResultadoScreen from "./screens/eliminar-subscripcion/eliminar-subscripcion-resultado/eliminar-subscripcion-resultado.screen";
import DisponibilidadNumeroScreen from "./screens/disponibilidad-numero/disponibilidad-numero/disponibilidad-numero.screen";
import DisponibilidadNumeroResultadoScreen from "./screens/disponibilidad-numero/disponibilidad-numero-resultado/disponibilidad-numero-resultado.screen";



const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Home />
              </Route>

              <EliminarSubscripcionProvider>              
              <AvisameSiGanoProvider>
                <LoteriaProvider>
                  <Route path="/screens/que-cayo/:name" exact={true}>
                    <QueCayoScreen />
                  </Route>

                  <Route
                    path="/screens/que-cayo-resultado/que-cayo-resultado.screen/:numeroSorteo"
                    exact={true}
                  >
                    <QueCayoResultadoScreen />
                  </Route>

                  <Route path="/screens/yo-gane-principal/:name" exact={true}>
                    <YoGanePrincipalScreen />
                  </Route>

                  <Route path="/screens/yo-gane/:name" exact={true}>
                    <YoGaneScreen />
                  </Route>

                  <Route
                    path="/screens/yo-gane/yo-gane-resultado/yo-gane-resultado.screen/:codigoLoteria/:numeroSorteo/:numero/:serie"
                    exact={true}
                  >
                    <YoGaneResultadoScreen />
                  </Route>

                  <Route path="/screens/numeros-suertudos/:name" exact={true}>
                    <NumerosSuertudosScreen />
                  </Route>

                  <Route
                    path="/screens/numeros-suertudos/numeros-suertudos-resultados/numeros-suertudos-resultados.screen/:codigoLoteria/:primeraCifra/:segundaCifra/:terceraCifra/:ultimaCifra/:cantidadSorteos"
                    exact={true}
                  >
                    <NumerosSuertudosResultadosScreen />
                  </Route>

                  <Route path="/screens/avisame-si-gano/:name" exact={true}>
                    <AvisameSiGanoScreen />
                  </Route>

                  <Route path="/screens/avisame-si-gano/avisame-si-gano/avisame-validacion/:opcion" exact={true}>
                    <AvisameValidacion />
                  </Route>

                  <Route
                    path="/screens/solicitud-codigo/solicitud-codigo/solicitud-codigo.screen/:opcion"
                    exact={true}
                  >
                    <SolicitudCodigoScreen />
                  </Route>

                  <Route path="/screens/eliminar-subscripcion/:name" exact={true}>
                    <EliminarSubscripcionScreen />
                  </Route>

                  <Route path="/screens/eliminar-subscripcion/eliminar-subscripcion-resultado/eliminar-subscripcion-resultado.screen/" exact={true}>
                    <EliminarSubscripcionResultadoScreen />
                  </Route>

                  <Route path="/screens/disponibilidad-numero/:name" exact={true}>
                    <DisponibilidadNumeroScreen />
                  </Route>

                  <Route
                    path="/screens/disponibilidad-numero/disponibilidad-numero-resultado/disponibilidad-numero-resultado.screen/:codigoLoteria/:numero/:serie"
                    exact={true}
                  >
                    <DisponibilidadNumeroResultadoScreen />
                  </Route>

                </LoteriaProvider>
              </AvisameSiGanoProvider>
              </EliminarSubscripcionProvider>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
