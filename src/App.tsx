import React, { useState, useEffect } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonContent,
  setupIonicReact,
  isPlatform
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, timeOutline, peopleOutline, gridOutline, add } from 'ionicons/icons';
import { StatusBar, Style } from '@capacitor/status-bar';

import Home from './pages/home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/variables.css';

setupIonicReact();

interface MainLayoutProps {
  isDark: boolean;
  toggleTheme: () => void;
}

type HomeProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const HomeComponent = Home as React.ComponentType<HomeProps>;

const MainLayout: React.FC<{ isDark: boolean, toggleTheme: () => void }> = ({ isDark, toggleTheme }) => {

  const location = useLocation();

  const hideTabBarRoutes = ['/login', '/register'];

  const shouldHideTabBar = hideTabBarRoutes.includes(location.pathname);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/home">
          <HomeComponent isDark={isDark} toggleTheme={toggleTheme} />
        </Route>

        <Route exact path="/activity">
          <IonPage>
            <IonContent fullscreen className="transition-colors duration-300">
              <div className="flex items-center justify-center h-full dark:text-white"><h1>Actividad</h1></div>
            </IonContent>
          </IonPage>
        </Route>

        <Route exact path="/together">
          <IonPage>
            <IonContent fullscreen className="transition-colors duration-300">
              <div className="flex items-center justify-center h-full dark:text-white"><h1>Together</h1></div>
            </IonContent>
          </IonPage>
        </Route>

        <Route exact path="/more">
          <IonPage>
            <IonContent fullscreen className="transition-colors duration-300">
              <div className="flex items-center justify-center h-full dark:text-white"><h1>Más</h1></div>
            </IonContent>
          </IonPage>
        </Route>

        <Route exact path="/"><Redirect to="/home" /></Route>
      </IonRouterOutlet>

      {!shouldHideTabBar && (
        <IonTabBar slot="bottom" className="h-20 border-t-0 shadow-[0_-5px_20px_rgba(0,0,0,0.03)] bg-white dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">

          <IonTabButton tab="home" href="/home" className="bg-transparent">
            <IonIcon icon={homeOutline} />
            <IonLabel className="text-xs mt-1 font-medium">Inicio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="activity" href="/activity" className="bg-transparent">
            <IonIcon icon={timeOutline} />
            <IonLabel className="text-xs mt-1 font-medium">Actividad</IonLabel>
          </IonTabButton>

          <IonTabButton tab="add" className="bg-transparent" style={{ overflow: 'visible', '--ripple-color': 'transparent' }}>
            <IonLabel className="hidden">Add</IonLabel>
            <div className="relative -top-6 z-10">
              <button
                className="mt-8 w-12 h-12 rounded-full! flex items-center justify-center transition-all duration-100 active:scale-90 bg-slate-900 text-white shadow-lg shadow-slate-300/50 dark:bg-white dark:text-slate-900 dark:shadow-slate-900/50"
                onClick={() => console.log('Abrir Modal de Agregar')}
              >
                <IonIcon icon={add} className="text-3xl" />
              </button>
            </div>
          </IonTabButton>

          <IonTabButton tab="together" href="/together" className="bg-transparent">
            <IonIcon icon={peopleOutline} />
            <IonLabel className="text-xs mt-1 font-medium">Together</IonLabel>
          </IonTabButton>

          <IonTabButton tab="more" href="/more" className="bg-transparent">
            <IonIcon icon={gridOutline} />
            <IonLabel className="text-xs mt-1 font-medium">Más</IonLabel>
          </IonTabButton>

        </IonTabBar>
      )}
    </IonTabs>
  );
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const applyTheme = async () => {
      const html = document.documentElement;
      if (isDark) {
        html.classList.add('dark');
        if (isPlatform('capacitor')) {
          try {
            await StatusBar.setStyle({ style: Style.Dark });
            await StatusBar.setBackgroundColor({ color: '#020617' });
          } catch (e) { }
        }
      } else {
        html.classList.remove('dark');
        if (isPlatform('capacitor')) {
          try {
            await StatusBar.setStyle({ style: Style.Light });
            await StatusBar.setBackgroundColor({ color: '#f8fafc' });
          } catch (e) { }
        }
      }
    };
    applyTheme();
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <IonApp>
      <IonReactRouter>
        <MainLayout isDark={isDark} toggleTheme={toggleTheme} />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;