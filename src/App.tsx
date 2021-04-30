/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/menu/menu.comp';
import QueCayoScreen from './screens/que-cayo/que-cayo/que-cayo.screen';
import Home from './screens/home/Home.screen';
import QueCayoResultadoScreen from './screens/que-cayo/que-cayo-resultado/que-cayo-resultado.screen';

/* Theme variables */
import './theme/variables.css';
import './App.css';


const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

            <Route path="/" exact={true}>
              <Home></Home>
            </Route>

            <Route path="/screens/que-cayo/:name" exact={true}>
              <QueCayoScreen></QueCayoScreen>
            </Route>

            <Route path="/screens/que-cayo-resultado/QueCayoResultadoScreen" exact={true}>
              <QueCayoResultadoScreen/>
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
