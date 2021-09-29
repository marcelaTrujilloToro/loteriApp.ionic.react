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

import "./menu.style.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "¿Qué Cayó?",
    url: "/screens/que-cayo/:name",
    iosIcon: chevronForward,
    mdIcon: chevronForward,
  },
  {
    title: '¿Yo Gané?',
    url: "/screens/yo-gane-principal/:name",
    iosIcon: chevronForward,
    mdIcon: chevronForward,
  },
  {
    title: 'Los Números Suertudos',
    url: "/screens/numeros-suertudos/:name",
    iosIcon: chevronForward,
    mdIcon: chevronForward,
  },
  {
    title: 'Aví­same si Gano',
    url: "/screens/avisame-si-gano/:name",
    iosIcon: chevronForward,
    mdIcon: chevronForward,
  },
  {
    title: 'Mis subscripciones',
    url: "/screens/eliminar-subscripcion/:name",
    iosIcon: chevronForward,
    mdIcon: chevronForward,
  },
  {
    title: 'Disponibilidad de Número',
    url: "/screens/disponibilidad-numero/:name",
    iosIcon: chevronForward,
    mdIcon: chevronForward,
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader className="la-menu-header">
            <div className="la-header-gradiente">
              <IonImg  className="la-logo-app" src="../../assets/imagenes/logoValleFondoRojo.png"></IonImg>
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
          <p className="la-texto-menu">©2021 Loteria del valle. Todos los derechos reservados.</p>
          <p className="la-texto-menu"> Juegue con responsabilidad. Los juegos de suerte y azar son exclusivos para mayores de edad.</p>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
