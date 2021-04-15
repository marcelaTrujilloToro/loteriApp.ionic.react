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
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { chevronForward, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string,
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: '¿Qué Cayó?',
    url: '/screens/que-cayo',
    iosIcon: chevronForward,
    mdIcon: chevronForward
  },
  {
    title: '¿Yo Gané?',
    url: '/screens/Page',
    iosIcon: chevronForward,
    mdIcon: chevronForward
   },
  // {
  //   title: 'Los nÃºmeros suertudos',
  //   url: '/page/Favorites',
  //   mdIcon: heartSharp
  // },
  // {
  //   title: 'Disponibilidad de nÃºmero',
  //   url: '/page/Archived',
  //   mdIcon: archiveSharp
  // },
  // {
  //   title: 'AvÃ­same si gano',
  //   url: '/page/Trash',
  //   mdIcon: trashSharp
  // }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader className = "menu-header">
            <div className = "gradiente">
              <IonImg src = "\assets\imagenes\LoteriApp_logo_300x148 3.png" className = "logo"></IonImg>
            </div>
          </IonListHeader>
  
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel >{appPage.title}</IonLabel>
                  <IonIcon  slot="end" ios={appPage.iosIcon} md={appPage.mdIcon} />
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