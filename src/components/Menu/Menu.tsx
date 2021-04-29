import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  chevronForward,
} from "ionicons/icons";

import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "¿Qué Cayó?",
    url: "../../screens/que-cayo/QueCayo.screen",
    iosIcon: chevronForward,
    mdIcon: chevronForward,
  },
  // {
  //   title: ¿Yo Gané?',
  //   url: "",
  //   iosIcon: chevronForward,
  //   mdIcon: chevronForward,
  // },
  // {
  //   title: 'Los Números Suertudos',
  //   url: "",
  //   iosIcon: chevronForward,
  //   mdIcon: chevronForward,
  // },
  // {
  //   title: 'Disponibilidad de Número',
  //   url: "",
  //   iosIcon: chevronForward,
  //   mdIcon: chevronForward,
  // },
  // {
  //   title: 'Aví­same si Gano',
  //   url: "",
  //   iosIcon: chevronForward,
  //   mdIcon: chevronForward,
  // }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader className="la-menu-header">
            <div className="la-header-gradiente">
              <IonImg src="\assets\imagenes\LoteriApp_logo_300x148 3.png"></IonImg>
            </div>
          </IonListHeader>

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : "la-menu-item"
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonLabel>{appPage.title}</IonLabel>
                  <IonIcon
                    slot="end"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
