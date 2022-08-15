import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  setupIonicReact ,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

// My imports
import AddActivity from "./pages/AddActivity/AddActivity";
import AllActivities from "./pages/AllActivities/AllActivities";

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

/* Theme variables */
import "./theme/variables.css";

// Iconos
import { carOutline } from "ionicons/icons";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="scheduleAppMenu1">
        <Route exact path="/all-activities">
          <AllActivities />
        </Route>
        {/* <Route path="/all-activities" component={AllActivities} exact={true} /> */}
        <Route path="/add-activity" component={AddActivity} exact={true} />
        <Route>
          <Redirect to="/all-activities" />
        </Route>
      </IonRouterOutlet>
      <IonMenu side="start" contentId="scheduleAppMenu1">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem
                routerLink="/all-activities"
                routerDirection="none"
                lines="none"
              >
                <IonIcon color="medium" slot="start" icon={carOutline} />
                <IonLabel>Todas las Actividades</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                routerLink="/add-activity"
                routerDirection="none"
                lines="none"
              >
                <IonIcon color="medium" slot="start" icon={carOutline} />
                <IonLabel>Agregar actividad</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    </IonReactRouter>
  </IonApp>
);

export default App;
