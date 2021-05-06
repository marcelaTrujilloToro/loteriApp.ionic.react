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

import { useQueryClient, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Theme variables */
import "./theme/variables.css";
import "./App.css";

import Menu from "./components/menu/menu.comp";
import QueCayoScreen from "./screens/que-cayo/que-cayo/que-cayo.screen";
import Home from "./screens/home/Home.screen";
import QueCayoResultadoScreen from "./screens/que-cayo/que-cayo-resultado/que-cayo-resultado.screen";
import YoGanePrincipalScreen from "./screens/yo-gane/yo-gane-principal/yo-gane-principal.screen";
import YoGaneScreen from "./screens/yo-gane/yo-gane/yo-gane.screen";
import YoGaneGanadorScreen from "./screens/yo-gane/yo-gane-resultado/yo-gane-ganador/yo-gane-ganador.screen"

// Create a client
const queryClient = new QueryClient();


const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Home/>
              </Route>

              <Route path="/screens/que-cayo/:name" exact={true}>
                <QueCayoScreen/>
              </Route>

              <Route
                path="/screens/que-cayo-resultado/que-cayo-resultado.screen/:codigoLoteria/:numeroSorteo"
                exact={true}
              >
                <QueCayoResultadoScreen/>
              </Route>

              <Route path="/screens/yo-gane-principal/:name" exact={true}>
                <YoGanePrincipalScreen/>
              </Route>

              <Route path="/screens/yo-gane/:name" exact={true}>
                <YoGaneScreen/>
              </Route>
              
              <Route path="/screens/yo-gane/yo-gane-resultado/yo-gane-ganador/yo-gane-ganador.screen" exact={true}>
                <YoGaneGanadorScreen/>
              </Route>
              
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
