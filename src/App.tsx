import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addOutline, listOutline, notificationsOutline, searchCircleOutline } from 'ionicons/icons';
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

/* Theme variables */
import './theme/variables.css';
import Search from './pages/Search';
import Detail from './pages/Detail';
import List from './pages/List';
import Input from './pages/Input';
import Notify from './pages/Notify';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/input">
            <Input />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/notify">
            <Notify />
          </Route>
          <Route exact path="/list/view/:idRoute">
            <Detail />
          </Route>
          <Route exact path="/search/view/:idRoute">
            <Detail />
          </Route>
          <Route exact path="/">
            <Redirect to="/list" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="list" href="/list">
            <IonIcon icon={listOutline} />
            <IonLabel>List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="input" href="/input">
            <IonIcon icon={addOutline} />
            <IonLabel>Input</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchCircleOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="notify" href="/notify">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Notification</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
