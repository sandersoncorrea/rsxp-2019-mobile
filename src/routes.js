import React from 'react';
import {Dimensions, BackHandler} from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Main from './pages/Main';
import Login from './pages/Login';
import Cursos from './pages/Cursos';
import MenuDrawer from './components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  initialRouteName: 'Main',
  drawerWidth: WIDTH * 0.83,
  drawerPosition: 'left',
  contentComponent: props => {
    return <MenuDrawer {...props} />;
  },
};
const StackConfig = {
  initialRouteName: 'Login',
  headerMode: 'none',
};

const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: Main,
    },
    Cursos: {
      screen: Cursos,
    },
  },
  DrawerConfig,
);

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    DrawerNavigator: {
      screen: DrawerNavigator,
    },
  },
  StackConfig,
);

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

const Routes = createAppContainer(StackNavigator);

export default () => (
  <Routes
    onNavigationStateChange={(prevState, currentState, action) => {
      const currentScreen = getActiveRouteName(currentState);
      const prevScreen = getActiveRouteName(prevState);

      if (action.type === 'Navigation/BACK') {
        if (prevScreen === 'Main' || prevScreen === 'Cursos') {
          BackHandler.exitApp();
        }
      }
    }}
  />
);
