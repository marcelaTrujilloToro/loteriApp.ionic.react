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
    title: '¿Qué cayó?',
    url: '/screens/que-cayo',
    iosIcon: 'chevronForward',
    mdIcon: chevronForward
  },
  // {
  //   title: '¿Yo gane?',
  //   url: '/page/Outbox',
  //   mdIcon: paperPlaneSharp
  // },
  // {
  //   title: 'Los números suertudos',
  //   url: '/page/Favorites',
  //   mdIcon: heartSharp
  // },
  // {
  //   title: 'Disponibilidad de número',
  //   url: '/page/Archived',
  //   mdIcon: archiveSharp
  // },
  // {
  //   title: 'Avísame si gano',
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
          <IonListHeader>
            <div className = "gradiente">
              <IonImg src = "\assets\imagenes\LoteriApp_logo_300x148 3.png"></IonImg>
            </div>
          </IonListHeader>
  
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false} color = "primary">
                <IonItem color = "primary" className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel >{appPage.title}</IonLabel>
                  <IonIcon color = "warning" slot="end" ios={appPage.iosIcon} md={appPage.mdIcon} />
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